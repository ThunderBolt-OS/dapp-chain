import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// importing wallet context
import { WalletProvider } from './contexts/WalletContext';

import { SnackbarProvider } from 'notistack';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <SnackbarProvider>
        <WalletProvider>
          <Router />
        </WalletProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
