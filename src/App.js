import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, routes } from './configs/routes';
import Header from './components/header';
import Loading from './components/loading';
import moment from 'moment';
import 'moment/locale/vi';
import '@fontsource/roboto';

moment.locale('vi');

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
