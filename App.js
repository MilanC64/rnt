import React, { Component } from 'react';
import { StyleSheet, View,  Text, TextInput, Button  } from 'react-native';

//Components
import ListItem from './src/components/ListItem/ListItem';
import InputPlace from './src/components/InputPlace/InputPlace';

export default class App extends Component{

	state = {
		placeName: "",
		places: []
	};

	render() {
		const placesOutput = this.state.places.map((place, i) => (
			<ListItem key={i} placeName={place}/>
		));
		return (
			<View style={styles.container}>
				<InputPlace state={this.state}/>
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
