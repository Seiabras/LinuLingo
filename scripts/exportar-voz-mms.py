"""
Exporta a voz neural do feroês: o modelo MMS-TTS da Meta (facebook/mms-tts-fao, VITS, licença
CC BY-NC 4.0 — uso não comercial) para ONNX, com a mesma entrada de «escalas» das vozes Piper
([ruído, duração, ruído da duração]), comprimido em int8 para caber no repositório.

Roda no GitHub Actions (.github/workflows/voz-feroes.yml), que tem acesso ao Hugging Face.
Saída em public/vozes/fo/: modelo.onnx, config.json; e src/data/fo/voz-teste.json, com a
tokenização de frases de teste feita pelo tokenizador oficial (o teste do app confere a do worker).
Uso: python scripts/exportar-voz-mms.py [repo]
"""
import inspect, json, os, sys, textwrap
import numpy as np
import torch
from huggingface_hub import HfApi, snapshot_download
import transformers.models.vits.modeling_vits as mv
from transformers import VitsModel, VitsTokenizer

REPO = sys.argv[1] if len(sys.argv) > 1 else 'facebook/mms-tts-fao'
OUT = 'public/vozes/fo'
os.makedirs(OUT, exist_ok=True)

info = HfApi().model_info(REPO)
card = info.card_data.to_dict() if info.card_data else {}
print('repo', REPO, 'revisão', info.sha, 'licença', card.get('license'))
print('arquivos', [s.rfilename for s in info.siblings])
path = snapshot_download(REPO, revision=info.sha)

# as escalas viram entradas do modelo (no transformers são atributos fixos, e o ONNX as congelaria)
src = textwrap.dedent(inspect.getsource(mv.VitsModel.forward))
src = '\n'.join(l for l in src.split('\n') if not l.startswith('@'))
for old, new in [
    ('length_scale = 1.0 / self.speaking_rate', 'length_scale = self._length_scale'),
    ('self.noise_scale_duration', 'self._noise_w'),
    ('self.noise_scale', 'self._noise_scale'),
]:
    assert old in src, f'não achei «{old}» no VitsModel.forward: a versão do transformers mudou'
    src = src.replace(old, new)
ns = {}
exec(src, mv.__dict__, ns)
mv.VitsModel.forward = ns['forward']

tok = VitsTokenizer.from_pretrained(path)
model = VitsModel.from_pretrained(path).eval()
cfg = model.config


class Wrapper(torch.nn.Module):
    def __init__(self, m):
        super().__init__()
        self.m = m

    def forward(self, input, scales):
        self.m._noise_scale = scales[0]
        self.m._length_scale = scales[1]
        self.m._noise_w = scales[2]
        return self.m(input_ids=input).waveform


w = Wrapper(model).eval()
defaults = [float(cfg.noise_scale), 1.0 / float(cfg.speaking_rate), float(cfg.noise_scale_duration)]
sample = tok('Góðan morgun! Hvussu hevur tú tað?', return_tensors='pt').input_ids
fp32 = f'{OUT}/modelo-fp32.onnx'
with torch.no_grad():
    torch.onnx.export(
        w, (sample, torch.tensor(defaults)), fp32,
        input_names=['input', 'scales'], output_names=['output'],
        dynamic_axes={'input': {1: 'n'}, 'output': {1: 'samples'}},
        opset_version=17, do_constant_folding=True,
    )

from onnxruntime.quantization import QuantType, quantize_dynamic
import onnxruntime as ort

q8 = f'{OUT}/modelo.onnx'
quantize_dynamic(fp32, q8, weight_type=QuantType.QUInt8, op_types_to_quantize=['MatMul', 'Conv', 'Gather'])
mb = lambda p: os.path.getsize(p) / 1e6
print(f'fp32 {mb(fp32):.1f} MB, int8 {mb(q8):.1f} MB')

# as duas versões, sem ruído (determinístico), têm de soar quase igual
feeds = {'input': sample.numpy(), 'scales': np.array([0.0, 1.0, 0.0], dtype=np.float32)}
a = ort.InferenceSession(fp32).run(None, feeds)[0].ravel()
b = ort.InferenceSession(q8).run(None, feeds)[0].ravel()
n = min(len(a), len(b))
snr = 10 * np.log10(np.sum(a[:n] ** 2) / max(np.sum((a[:n] - b[:n]) ** 2), 1e-12))
print(f'amostras fp32 {len(a)}, int8 {len(b)}, SNR int8 × fp32: {snr:.1f} dB')
with torch.no_grad():
    ref = w(sample, torch.tensor([0.0, 1.0, 0.0])).numpy().ravel()
m = min(len(ref), len(a))
print(f'PyTorch × ONNX fp32: SNR {10 * np.log10(np.sum(ref[:m] ** 2) / max(np.sum((ref[:m] - a[:m]) ** 2), 1e-12)):.1f} dB')

import soundfile as sf
os.makedirs('amostras', exist_ok=True)
feeds['scales'] = np.array(defaults, dtype=np.float32)
sf.write('amostras/fp32.wav', ort.InferenceSession(fp32).run(None, feeds)[0].ravel(), cfg.sampling_rate)
sf.write('amostras/int8.wav', ort.InferenceSession(q8).run(None, feeds)[0].ravel(), cfg.sampling_rate)

use = q8 if snr >= 15 else fp32
if use == fp32:
    print('int8 perde qualidade demais: fica o fp32')
    os.replace(fp32, q8)
else:
    os.remove(fp32)
if mb(q8) > 95:
    # o GitHub recusa arquivos de mais de 100 MB: parte em pedaços que o worker junta
    data = open(q8, 'rb').read()
    parts = [data[i:i + 90_000_000] for i in range(0, len(data), 90_000_000)]
    for i, p in enumerate(parts):
        open(f'{OUT}/modelo.onnx.{i}', 'wb').write(p)
    os.remove(q8)
    files = [f'modelo.onnx.{i}' for i in range(len(parts))]
else:
    files = ['modelo.onnx']

vocab = tok.get_vocab()
config = {
    'kind': 'mms',
    'repo': REPO,
    'revision': info.sha,
    'license': card.get('license'),
    'files': files,
    'mb': round(sum(os.path.getsize(f'{OUT}/{f}') for f in files) / 1e6),
    'audio': {'sample_rate': cfg.sampling_rate},
    'inference': {'noise_scale': defaults[0], 'length_scale': defaults[1], 'noise_w': defaults[2]},
    'vocab': vocab,
    'pad_id': tok.pad_token_id,
    'add_blank': bool(tok.add_blank),
    'normalize': bool(tok.normalize),
    'lowercase': bool(getattr(tok, 'do_lower_case', True)),
    'is_uroman': bool(getattr(tok, 'is_uroman', False)),
}
json.dump(config, open(f'{OUT}/config.json', 'w'), ensure_ascii=False, indent=1)

tests = [
    'Góðan morgun! Hvussu hevur tú tað?',
    'Eg eiti Linu, og eg dugi ikki føroyskt enn.',
    'Tórshavn er høvuðsstaðurin í Føroyum.',
    'ÁÐUR: 12 seyðir, 3 kýr og ein hundur.',
    'Hon sigur: «Takk fyri!»',
]
json.dump([{'text': t, 'ids': tok(t).input_ids} for t in tests], open('src/data/fo/voz-teste.json', 'w'), ensure_ascii=False, indent=1)
print(json.dumps({k: v for k, v in config.items() if k != 'vocab'}, ensure_ascii=False))
print('vocab', vocab)
