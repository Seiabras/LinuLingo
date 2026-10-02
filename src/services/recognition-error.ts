/**
 * Traduz o código de erro do reconhecimento de voz (`SpeechRecognitionErrorEvent.error`) numa
 * mensagem que diz ao aluno o que fazer, em vez de um «falhou» genérico que parece o microfone
 * quebrado quando às vezes é só «fale logo depois de tocar» ou «este aparelho não tem microfone».
 * Sem import de react-native/expo: só texto, para dar para testar sem o ambiente do app.
 */
export function recognitionErrorMessage(code: string): string {
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'Permita o uso do microfone no navegador.';
    case 'audio-capture':
      return 'Não encontrei um microfone neste aparelho. Você pode digitar a resposta.';
    case 'network':
      return 'Sem conexão para reconhecer a fala agora. Você pode digitar a resposta.';
    case 'no-speech':
      return 'Não percebi nenhuma fala. Toque no microfone e fale logo em seguida.';
    case 'aborted':
      return 'A escuta foi interrompida. Toque no microfone e tente de novo.';
    default:
      return 'O reconhecimento de voz falhou. Você pode digitar a resposta.';
  }
}
