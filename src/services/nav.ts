import { router } from 'expo-router';

/** Volta uma tela; se a página foi aberta direto (web), vai para a trilha. */
export function goBack() {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}
