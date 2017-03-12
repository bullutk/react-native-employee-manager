import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component{
	componentWillMount() {
		const config = {
		    apiKey: "AIzaSyBHdtr6e5qlcgzSmWNIZ3VOXY1DEj30gdg",
		    authDomain: "manager-5b2c6.firebaseapp.com",
		    databaseURL: "https://manager-5b2c6.firebaseio.com",
		    storageBucket: "manager-5b2c6.appspot.com",
		    messagingSenderId: "525468228078"
		};

		firebase.initializeApp(config);
	}

	render(){
		return(
			<Provider store={createStore(reducers)} >
				<LoginForm />
			</Provider>
		)
	}
}

export default App;