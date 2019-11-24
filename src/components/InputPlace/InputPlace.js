import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const InputPlace = (props) => (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputPlaceName}
        placeholder="An awsome place..."
        value={props.placeName}
        onChangeText={props.placeNameChangedHandler}
        />
        <Button 
        title="+ Add" 
        style={styles.inputButton}
        onPress={props.placeSubmitHandler}
        />
    </View>
);


const styles = StyleSheet.create({
    inputContainer:{
		width: "100%",
		flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
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