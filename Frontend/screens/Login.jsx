import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TextInput, SafeAreaView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header, Text, Divider, Button, Label } from 'react-native-elements';
import _ from 'lodash';
import { connect } from "react-redux";
import {onUserLogin, onFetchProduct} from '../redux';
//import { onFetchProduct } from '../redux';



class Login extends React.Component {
	state = {
		username: '',
		password: '',
		signup: false,
		loginLink: 'Login',


	}

	handleUsernameChange = (tu) => {
		this.setState({ username: tu.value })
	}
	handlePasswordChange = (tp) => {
		this.setState({ password: tp.value })
	}
	handleLoginPress = () =>{
		console.log('loggin in');
		//grab information from the username and password state. check the states against what is in database
		//store the username in redux to remember the username
		let usernameFinal = this.state.username;
		let passwordFinal = this.state.password;
		//once you login we want redux to remember your username and take you to the home page

	}
	handleSignUpPress = () =>{
		console.log('you sign up');
		//fetch call to database through redux to post
	}
	render() {

		return (
			<SafeAreaView>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Image style={{ width: 150, height: 150 }} source={require('../assets/eaglelogo.png')} />
					<br />
					<Text h5><b>{this.state.loginLink}</b> or <b><a href='#' onClick={()=>{this.setState({signup: true}), this.setState({loginLink: <a href='#'>login</a>})}}>Sign-up</a></b></Text>
					{this.state.signup ?

					//signup
					<View>
					<br />
					<Text h4>Sign-up</Text>
					<br />
					<Text style={{ alignSelf: 'baseline' }}>Username</Text>
					<TextInput
						style={{ height: 40, borderColor: 'black', borderWidth: 2, borderRadius: 2 }}
						onChangeText={text => this.handleUsernameChange(text)}
					/>
					<br />
					<Text style={{ alignSelf: 'baseline' }}>Password</Text>
					<TextInput
						style={{ height: 40, borderColor: 'black', borderWidth: 2, borderRadius: 2 }}
						label='password'
						onChangeText={text => this.handlePasswordChange(text)}
					/>
					<br />
					<br />
					<Button
					style={{ float: 'left', width: '10em' }}
						onPress = {this.handleSignUpPress()}
						title="Signup"
					/>
					<br/>
					<a href='#' style={{ textDecoration: 'none' }}>Forgot your password?</a>
					</View>

					:



					<View>
					<br />
					<Text h4>Login</Text>
					<br />
					<Text style={{ alignSelf: 'baseline' }}>Username</Text>
					<TextInput
						style={{ height: 40, borderColor: 'black', borderWidth: 2, borderRadius: 2 }}
						onChangeText={text => this.handleUsernameChange(text)}
					/>
					<br />
					<Text style={{ alignSelf: 'baseline' }}>Password</Text>
					<TextInput
						style={{ height: 40, borderColor: 'black', borderWidth: 2, borderRadius: 2 }}
						label='password'
						onChangeText={text => this.handlePasswordChange(text)}
					/>
					<br />
					<br />
					<Button
					style={{ float: 'left', width: '10em' }}
						onPress = {this.handleLoginPress()}
						title="Login"
					/>
					<br/>
					<a href='www.google.com' style={{ textDecoration: 'none' }}>Forgot your password?</a>
					</View>}

				</View>
			</SafeAreaView>
		);
	}
}


const mapStateToProps = state => ({
	//myReducer: state.myReducer,
	// reviews: state.reviews.items,
	// reviewsError: state.reviews.error,
	// reviewsLoading: state.reviews.loading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchCompanies: () => dispatch(fetchProducts()),

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

//https://www.youtube.com/watch?v=qdAzeYAfQlY&ab_channel=JGogoi
