#!/bin/sh
# Instala o Piper (voz neural, offline) com a voz romena "mihai" SÓ para o seu usuário
# e liga ao speech-dispatcher, que é por onde Firefox e Chrome falam no Linux.
# Não usa sudo. Para desfazer: rm -rf ~/.local/share/piper ~/.local/bin/piper-falar ~/.config/speech-dispatcher
set -eu

VOZ="${1:-ro_RO-mihai-medium}"          # outras vozes: https://huggingface.co/rhasspy/piper-voices
LANG_CODE="$(echo "$VOZ" | cut -c1-2)"
FAMILIA="$(echo "$VOZ" | cut -d_ -f1)/$(echo "$VOZ" | cut -d- -f1)/$(echo "$VOZ" | cut -d- -f2)/$(echo "$VOZ" | cut -d- -f3)"
D="$HOME/.local/share/piper"
C="$HOME/.config/speech-dispatcher"

command -v spd-say >/dev/null || { echo "Instale antes: speech-dispatcher e espeak-ng (ex.: sudo pacman -S speech-dispatcher espeak-ng  ou  sudo apt install speech-dispatcher espeak-ng)"; exit 1; }
PLAYER="pw-play --rate \"\$RATE\" --channels 1 --format s16 -"
command -v pw-play >/dev/null || PLAYER="aplay -r \"\$RATE\" -f S16_LE -t raw -"

mkdir -p "$D/vozes" "$HOME/.local/bin"
if [ ! -x "$D/piper/piper" ]; then
  echo "Baixando o Piper…"
  curl -fL --progress-bar -o "$D/piper.tgz" https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_x86_64.tar.gz
  tar xzf "$D/piper.tgz" -C "$D" && rm "$D/piper.tgz"
fi
if [ ! -f "$D/vozes/$VOZ.onnx" ]; then
  echo "Baixando a voz $VOZ…"
  URL="https://huggingface.co/rhasspy/piper-voices/resolve/main/$FAMILIA/$VOZ.onnx"
  curl -fL --progress-bar -o "$D/vozes/$VOZ.onnx" "$URL"
  curl -fsL -o "$D/vozes/$VOZ.onnx.json" "$URL.json"
fi

cat > "$HOME/.local/bin/piper-falar" <<SCRIPT
#!/bin/sh
# Lê texto da entrada padrão e fala com o Piper (usado pelo speech-dispatcher).
D="\$HOME/.local/share/piper"
MODELO="\$D/vozes/\$1.onnx"
RATE=\$(sed -n 's/.*"sample_rate": *\([0-9]*\).*/\1/p' "\$MODELO.json")
"\$D/piper/piper" --model "\$MODELO" --length_scale "\${2:-1.0}" --output_raw --quiet 2>/dev/null | $PLAYER
SCRIPT
chmod +x "$HOME/.local/bin/piper-falar"

[ -d "$C" ] || { mkdir -p "$(dirname "$C")" && cp -r /etc/speech-dispatcher "$C"; }
cat > "$C/modules/piper-generic.conf" <<CONF
# Piper (voz neural, offline) via sd_generic
Debug 0
GenericExecuteSynth "printf %s \\'\$DATA\\' | $HOME/.local/bin/piper-falar \\'\$VOICE\\'"
GenericCmdDependency "$HOME/.local/bin/piper-falar"
GenericLanguage "$LANG_CODE" "$LANG_CODE" "utf-8"
AddVoice "$LANG_CODE" "MALE1" "$VOZ"
DefaultVoice "$VOZ"
CONF
if ! grep -q 'AddModule "piper"' "$C/speechd.conf"; then
  cat >> "$C/speechd.conf" <<CONF

# --- Voz natural (Piper) — scripts/instalar-piper.sh do Poliglota ---
AddModule "espeak-ng" "sd_espeak-ng" "espeak-ng.conf"
AddModule "piper"     "sd_generic"   "piper-generic.conf"
DefaultModule espeak-ng
LanguageDefaultModule "$LANG_CODE" "piper"
CONF
fi

pkill -x speech-dispatch 2>/dev/null || true
sleep 1
spd-say -o piper -L | grep -q "$VOZ" && echo "✅ Pronto! Feche e abra o navegador. Teste: spd-say -l $LANG_CODE \"Bună ziua\"" || echo "⚠️ O módulo não carregou; veja ~/.cache/speech-dispatcher/log"
