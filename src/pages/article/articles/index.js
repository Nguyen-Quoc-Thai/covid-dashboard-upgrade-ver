import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import Article from './../article';

function Articles() {
	return (
		<>
			<Article />
			<Article />
			<Article />
		</>
	);
}

export default Articles;
