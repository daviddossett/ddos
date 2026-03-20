import '../public/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/theme-provider';
import { MotionProvider, useMotion } from '../components/motion-provider';
import { MotionConfig } from 'framer-motion';

function AppContent({ Component, pageProps }: AppProps) {
  const { motionEnabled } = useMotion();
  return (
    <MotionConfig reducedMotion={motionEnabled ? "never" : "always"}>
      <Component {...pageProps} />
    </MotionConfig>
  );
}

function MyApp(props: AppProps) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <AppContent {...props} />
      </MotionProvider>
    </ThemeProvider>
  );
}
export default MyApp;
