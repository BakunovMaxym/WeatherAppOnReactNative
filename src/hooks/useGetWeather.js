import React, { useState, useEffect } from "react";
import { Alert, ActivityIndicator, StyleSheet, View, PermissionsAndroid, TouchableOpacity, Linking, Text } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
    const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null/*49.444431*/);
    const [lon, setLon] = useState(null/*32.059769*/);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        } catch (error) {
            console.warn("Can't fetch weather");
            setError(true);
        }finally{
            setLoading(false)
        }
    };

    const requestPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool Photo App Location Permission',
                    message: 'Cool Photo App needs access to your Location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the Location');
                await getCurrentLocation();
            } else {
                setError(error);
                console.log('Location permission denied');
            }
        } catch (error) {
            console.warn(error);
            setError(error);
            setLoading(false);
        }
    };

    const getCurrentLocation = async () => {
        try {
            Geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                    setLat(latitude); 
                    setLon(longitude);
                    console.log(latitude + longitude); 
                },
                error => Alert.alert("Error", error.message),
                { enableHighAccuracy: false, timeout: 2000, maximumAge: 3600000 }
            );
        } catch (error) {
            setError(error);
            setLoading(false);
            console.warn(error);
        }
    };

    useEffect(() => {
        requestPermission();
        if (lat !== null && lon !== null) {
            fetchWeatherData(lat, lon);
            console.log(weather);

        }
    }, [lat, lon]);
    return [error, weather, loading];
}