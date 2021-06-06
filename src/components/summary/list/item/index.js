import React from 'react';
import styles from './styles.module.scss';

function Country() {
	return (
		<div className={styles.country}>
			<div className={styles.country__left}>
				<img
					src='https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/94262218_112321463790130_9162205595116240896_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rssSp197I38AX-6Ge2J&_nc_ht=scontent.fsgn8-1.fna&oh=5c24607e8bdac4ce3f434302af281bb2&oe=60E15E8D'
					alt='National flag'
				/>
				<div>
					<h4>Title</h4>
					<div>
						<span>123</span>
						<span>456</span>
						<span>789</span>
					</div>
				</div>
			</div>
			<div>
				<h4>Today</h4>
				<div>
					<span>1</span>
					<span>2</span>
				</div>
			</div>
		</div>
	);
}

export default Country;
