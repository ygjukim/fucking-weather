import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
    render () {
        return (
            <LinearGradient 
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={120} name="ios-rainy" />
                    <Text style={styles.temp}>35°</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white",
        marginTop: 5,
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 38,
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 100
    }
});