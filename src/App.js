// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Auth from './Components/Auth/Auth';
import Footer from './Components/Footer/Footer';

// Firebase
import firebase from 'firebase';
import config from './Firebase/config';
import Modal from './Components/Default/Modal';

// Store
import { useStoreContext } from './Context/StoreContext';

firebase.initializeApp(config);

function App() {
	const { modal } = useStoreContext();
	if (modal) {
		console.log('Shown');
	} else {
		console.log('disabled');
	}

	return (
		<div className='app'>
			<Router>
				<Header />

				<Switch>
					<Route path='/' exact component={Homepage} />

					<Route path='/products' component={Products} />

					<Route path='/cart' component={Cart} />

					<Route path='/auth' component={Auth} />
				</Switch>
				{modal && <Modal />}
				<Footer />
			</Router>
		</div>
	);
}

export default App;
