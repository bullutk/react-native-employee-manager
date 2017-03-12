import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './router'

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return(
			<Provider store={store} >
				<Router />
			</Provider>
		)
	}
}

export default App;