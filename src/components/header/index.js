import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function Header() {
	return (
		<header>
			<section>
				<div>
					<ul>
						<li>
							<Link to={ROUTES.home}>Home</Link>
						</li>
						<li>
							<Link to={ROUTES.articles}>Articles</Link>
						</li>
					</ul>
				</div>
			</section>
		</header>
	);
}

export default Header;
