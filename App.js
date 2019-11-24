import React, { Component } from 'react';
import { StyleSheet, View,  Text, TextInput, Button  } from 'react-native';

//Components
import InputPlace from './src/components/InputPlace/InputPlace';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component{

	state = {
		placeName: "",
		places: []
	};
	
	placeNameChangedHandler = val => {
		this.setState({
			placeName: val,
		});
	};
	
	placeSubmitHandler = () => {
		if(this.state.placeName.trim() === "") {
			return;
		}
	
		this.setState( prevState => {
			return {
				places: prevState.places.concat(prevState.placeName)
			}
		});
	};

	render() {
		const placesOutput = this.state.places.map((place, i) => (
			<ListItem key={i} placeName={place}/>
		));
		return (
			<View style={styles.container}>
				<InputPlace placeName={this.state.placeName} placeNameChangedHandler={this.placeNameChangedHandler} placeSubmitHandler={this.placeSubmitHandler}/>
				<View style={styles.listContainer}>{placesOutput}</View>
			</View>
		);
	};	
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 20
	},
	listContainer: {
		width: "100%",
	}
});
