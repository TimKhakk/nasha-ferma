import Breadcrumbs from "../Default/Breadcrumbs";
import {Component} from "react";
import firebase from "firebase";

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			hasAccount: false,
		}
	}
	componentDidMount() {
		const database = firebase.database();
		const product = database.ref('first product');
		product.on('value', (elem) => console.log(elem.val()));
		// console.log(product);
	}

	handleChange = ({ target: { value, id }}) => {
		this.setState({
			[id]: value,
		})
	}

	createAcc = () => {
		const { email, password } = this.state;
		// firebase.auth().createUserWithEmailAndPassword(email, password) // Это промис
		// 	.catch(err => console.log(err))

		firebase.auth().signInWithEmailAndPassword(email, password) // Это промис
			.then(() => {
				this.setState({
					hasAccount: true,
				});
			})
			.catch(err => console.log(err))
	}
	render() {
		const { email, hasAccount } = this.state;
		return (
			<>
				<Breadcrumbs
					name={"Авторизация"}
				/>
				<div className="container">
					Страница авторизации
				</div>
				<div className="container">

					{
						hasAccount ?
							<div>Hello, {email}</div> :
							<div>There is no such account</div>
					}


					<div className="login-block">

						<input
							type="text"
							placeholder="email"
							onChange={this.handleChange}
							id="email"
						/>

						<input
							type="password"
							placeholder="password"
							onChange={this.handleChange}
							id="password"
						/>

						<input
							type="submit"
							onClick={this.createAcc}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default Auth;