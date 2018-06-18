import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    "Rain" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-rainy",
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    "Clean" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-sunny",
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    "Thunderstorm" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-thunderstorm",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    "Clouds" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-clouds",
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    "Snow" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-snow",
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    "Drizzle" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-rainy-outside",
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🇬🇲"
    },
    "Atmosphere" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-rmenu",
        title: "Haze/Mist",
        subtitle: "Is like rain, but gay 🇬🇲"
    }
};

function Weather( {temp, weatherName} ) {
    weatherCase = Object.getOwnPropertyNames({weatherCases}).includes({weatherName}) ?
        {weatherCases[weatherName]} : {weatherCases["Atmosphere"]};

    return (
        <LinearGradient 
            colors={weatherCase.colors} 
            style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={120} name={weathercase.icon} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCase.title}</Text>
                <Text style={styles.subtitle}>{weatherCase.subtitle}</Text>
            </View>
        </LinearGradient>
    );
} 

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

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