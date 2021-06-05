import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, routes } from './configs/routes';
import Header from './components/header';
// import MessageBubbleContainer from './container/message/bubbleContainer';
import Loading from './components/loading/circular';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Header />
					<main className='App__main'>{renderRoutes(routes)}</main>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
