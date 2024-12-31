import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'autocareplus',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Tempo de exibição em milissegundos (3 segundos)
      launchAutoHide: true, // Oculta automaticamente após o tempo definido
      backgroundColor: '#ffffff', // Cor de fundo da splash
      androidSplashResourceName: 'splash', // Recurso para Android
      iosSplashResourceName: 'Default', // Recurso para iOS
      showSpinner: false, // Oculta o spinner, caso não queira
    },
  },
};

export default config;
