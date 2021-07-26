import { useState, useEffect } from 'react';

const useLocalStorage = (initialValue, key) => {
	const getValue = () => JSON.parse(localStorage.getItem(key)) || initialValue;

	const [value, setValue] = useState(getValue);

	useEffect(() => localStorage.setItem(key, JSON.stringify(value), [value]));

	return [value, setValue];
};

export default useLocalStorage;
