import React from 'react';
import styles from './styles.module.scss';
import { TextField } from '@material-ui/core';

function Annotate(props) {
	const { handleFilterListCountry } = props;

	const handleTextChanged = (e) => {
		handleFilterListCountry && handleFilterListCountry(e.target.value);
	};

	return (
		<div className={styles.annotate}>
			<TextField
				id='standard-basic'
				label='Country'
				onChange={handleTextChanged}
			/>
		</div>
	);
}

export default Annotate;
