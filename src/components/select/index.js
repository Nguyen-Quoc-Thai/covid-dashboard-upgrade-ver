import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles.module.scss';

function SelectTime(props) {
	const { listOption } = props;
	const defaultValue = listOption[0].value;

	const [selected, setSelected] = React.useState(defaultValue);

	const handleChange = (event) => {
		setSelected(event.target.value);
	};

	const renderListOption = (listOption) => {
		return listOption.map((option) => (
			<MenuItem value={option.value}>{option.name}</MenuItem>
		));
	};

	return (
		<FormControl className={styles['select-time']}>
			<Select
				value={selected}
				onChange={handleChange}
				displayEmpty
				inputProps={{ 'aria-label': 'Without label' }}>
				{renderListOption(listOption)}
			</Select>
		</FormControl>
	);
}

export default SelectTime;
