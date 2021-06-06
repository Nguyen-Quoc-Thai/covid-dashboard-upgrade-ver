import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, routes } from './configs/routes';
import Header from './components/header';
import Loading from './components/loading';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Header />
					<main className='App__main' style={{ marginTop: '6rem' }}>
						{renderRoutes(routes)}
					</main>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
