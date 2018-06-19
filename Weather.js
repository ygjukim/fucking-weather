import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    "Rain" : {
        colors:["#00C6FB", "#005BEA"],
        icon: "weather-rainy",
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    "Clean" : {
        colors:["#FEF253", "#FF7300"],
        icon: "weather-sunny",
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    "Thunderstorm" : {
        colors:["#00ECBC", "#007ADF"],
        icon: "weather-lightning",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    "Clouds" : {
        colors:["#D7D2CC", "#304352"],
        icon: "weather-cloudy",
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    "Snow" : {
        colors:["#7DE2FC", "#B9B6E5"],
        icon: "weather-snowy",
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    "Drizzle" : {
        colors:["#89F7FE", "#66A6FF"],
        icon: "weather-hail",
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🇬🇲"
    },
    "Haze" : {
        colors:["#89F7FE", "#66A6FF"],
        icon: "weather-hail",
        title: "Haze",
        subtitle: "Is like rain, but gay 🇬🇲"
    },
    "Mist" : {
        colors:["#D7D2CC", "#304352"],
        icon: "weather-fog",
        title: "Mist",
        subtitle: "Don't know what that is 📬"
    },
    "Atmosphere" : {
        colors:["#89F7FE", "#66A6FF"],
        icon: "weather-fog",
        title: "Haze/Mist",
        subtitle: "Don't know what that is 📬"
    }
};

function Weather( {temp, weatherName} ) {
    weatherCase = Object.getOwnPropertyNames(weatherCases).includes(weatherName) ?
        weatherCases[weatherName] : weatherCases["Atmosphere"];
    return (
        <LinearGradient 
            colors={weatherCase.colors} 
            style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={136} name={weatherCase.icon} />
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
        color: "white"
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