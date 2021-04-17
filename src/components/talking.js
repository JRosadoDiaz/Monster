import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import * as Speech from 'expo-speech';

export default class Talking extends Component {
    speak() {
        let thingToSay = 'bing bing wahoo';
        Speech.speak(thingToSay);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Press to hear some words" onPress={this.speak} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingTop: 50,
        backgroundColor: '#007'
    }
})