import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './styles.module.scss';

function Header() {
	const { pathname } = useLocation('');

	return (
		<header className={styles.header}>
			<section className={styles.header__container}>
				<div className={styles.header__left}>
					<Link className={styles.header__left__link} to={ROUTES.home}>
						<img
							className={styles.header__left__logo}
							src='https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/94262218_112321463790130_9162205595116240896_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=COPBsuoF-xEAX9_Y6hw&_nc_ht=scontent-sin6-1.xx&oh=39914eda7756a0ecc60c29d2d7bfbecd&oe=60C9A38D'
							alt='Home page'
						/>
						<span className={styles.header__left__title}>Covid dashboard</span>
					</Link>
				</div>
				<div className={styles.header__menus}>
					<ul>
						<li
							className={
								`${pathname}` === ROUTES.home
									? styles['header__menus--active']
									: ''
							}>
							<Link to={ROUTES.home}>Home</Link>
						</li>
						<li
							className={
								`${pathname}` === ROUTES.articles
									? styles['header__menus--active']
									: ''
							}>
							<Link to={ROUTES.articles}>Articles</Link>
						</li>
					</ul>
				</div>
			</section>
		</header>
	);
}

export default Header;
