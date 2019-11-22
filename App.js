import React, { Component } from 'react';
import { StyleSheet, View,  Text, TextInput, Button  } from 'react-native';

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
			<Text key={i}>{place}</Text>
		));
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput 
					style={styles.inputPlaceName}
					placeholder="An awsome place..."
					value={this.state.placeName}
					onChangeText={this.placeNameChangedHandler}
					/>
					<Button 
					title="+ Add" 
					style={styles.inputButton}
					onPress={this.placeSubmitHandler}
					/>
				</View>
				<View>{placesOutput}</View>
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
	inputContainer:{
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	inputPlaceName: {
		width: "70%",
		borderBottomColor: "#23ab85",
		borderBottomWidth: 2
	},
	inputButton: {
		width: "30%",
	}
});
