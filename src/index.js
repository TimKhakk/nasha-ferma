import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.scss';

import { StoreContextProvider } from './Context/StoreContext';

ReactDOM.render(
	<StoreContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</StoreContextProvider>,
	document.getElementById('root')
);
