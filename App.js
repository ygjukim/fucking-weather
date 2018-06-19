import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

const API_KEY = "af53d2e8ab335f27df995c54d9632309";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weather: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weather: json.weather[0].main,
        isLoaded: true
      });
    })
    .catch(error => {
      this.setState({
        error: error
      });
    })
  };

  render() {
    const { isLoaded, error, temperature, weather } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
            <Weather 
              temp={Math.floor(temperature - 273.15)} 
              weatherName={weather}
            />
          ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Getting the fucking weather...</Text>
            {error ? <Text style={styles.error}>{error.message}</Text> : null}  
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor:"#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 30
  },
  error: {
    fontSize: 24,
    color: 'red',
    marginBottom: 50
  }
});
