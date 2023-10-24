import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ConnectPage = lazy(() => import('src/pages/connect-wallet'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const MintNFT = lazy(() => import('src/pages/mint-nft'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
	const routes = useRoutes([
		{
			path: '/connect',
			element: <ConnectPage />
		},
		{
			element: (
				<DashboardLayout>
					<Suspense>
						<Outlet />
					</Suspense>
				</DashboardLayout>
			),
			children: [
				{ element: <PrivateRoute element={<IndexPage />} />, index: true },
				{ path: 'user', element: <PrivateRoute element={<UserPage />} /> },
				{ path: 'products', element: <ProductsPage /> },
				{ path: 'blog', element: <BlogPage /> },
				{
					path: 'create-nft',
					element: <MintNFT />
				}
			]
		},

		{
			path: 'login',
			element: <LoginPage />
		},
		{
			path: '404',
			element: <Page404 />
		},
		{
			path: '*',
			element: (
				<Navigate
					to='/404'
					replace
				/>
			)
		}
	]);

	return routes;
}
