import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const placeNameChangedHandler = val => {
    state.setState({
        placeName: val,
    });
};

const placeSubmitHandler = () => {
    if(state.placeName.trim() === "") {
        return;
    }

    state.setState( prevState => {
        return {
            places: prevState.places.concat(prevState.placeName)
        }
    });
};

const InputPlace = (state) => (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputPlaceName}
        placeholder="An awsome place..."
        value={state.placeName}
        onChangeText={placeNameChangedHandler}
        />
        <Button 
        title="+ Add" 
        style={styles.inputButton}
        onPress={placeSubmitHandler}
        />
    </View>
);


const styles = StyleSheet.create({
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

export default InputPlace;