import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// importing wallet context
import { WalletProvider } from './contexts/WalletContext';

import { SnackbarProvider } from 'notistack';

// importing context providers
import { CreateNFTDataContextProvider } from 'src/contexts/CreateNFTDataContext';
import { SellerOrBuyerContextProvider } from './contexts/SellerOrBuyerContext';

// ----------------------------------------------------------------------

export default function App() {
	useScrollToTop();

	return (
		<ThemeProvider>
			<SnackbarProvider>
				<WalletProvider>
					<SellerOrBuyerContextProvider>
						<CreateNFTDataContextProvider>
							<Router />
						</CreateNFTDataContextProvider>
					</SellerOrBuyerContextProvider>
				</WalletProvider>
			</SnackbarProvider>
		</ThemeProvider>
	);
}
