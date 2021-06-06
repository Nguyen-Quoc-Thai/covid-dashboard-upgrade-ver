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
							src='https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/94262218_112321463790130_9162205595116240896_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rssSp197I38AX-6Ge2J&_nc_ht=scontent.fsgn8-1.fna&oh=5c24607e8bdac4ce3f434302af281bb2&oe=60E15E8D'
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
