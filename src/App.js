import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import Header   from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products/Products';
import Cart     from './Components/Cart/Cart';
import Auth     from './Components/Auth/Auth';


function App() {
	return (
		<div className="app">
			<Router>

				<Header/>
				<Route path="/" exact   component={Homepage}/>
				<Route path="/products" component={Products}/>
				<Route path="/cart"     component={Cart}/>
				<Route path="/auth"     component={Auth}/>

			</Router>
		</div>
	);
}

export default App;
