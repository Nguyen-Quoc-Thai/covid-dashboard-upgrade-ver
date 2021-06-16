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
							src={require('./../../resources/logo.png').default}
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
