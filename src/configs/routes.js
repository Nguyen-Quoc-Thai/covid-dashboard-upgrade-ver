import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Home from '../pages/home';
import Article from '../pages/article/articles';

// const BlogView = lazy(() => import('../pages/blog/blog'));

const routes = [
	{
		path: ROUTES.home,
		exact: true,
		main: () => <Home />,
	},
	{
		path: ROUTES.blog,
		exact: true,
		main: () => <Article />,
	},
];

const renderRoutes = (routes) => {
	return (
		<Switch>
			{routes.map((route, index) => {
				const { path, exact, main: Component } = route;
				return (
					<Route key={index} path={path} exact={exact} render={Component} />
				);
			})}
		</Switch>
	);
};

export { routes, renderRoutes };
