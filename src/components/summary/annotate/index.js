import React from 'react';
import styles from './styles.module.scss';

function Annotate(props) {
	const { groupCard: listAnnotate } = props;

	const renderListAnnotate = (listAnnotate) => {
		return listAnnotate.map((annotate) => (
			<div className={styles.annotate__flex}>
				<div className={styles.annotate__title}>{annotate.name}</div>
				<div
					className={styles.annotate__block}
					style={{ backgroundColor: `${annotate.color}` }}></div>
			</div>
		));
	};

	return (
		<div className={styles.annotate}> {renderListAnnotate(listAnnotate)}</div>
	);
}

export default Annotate;
