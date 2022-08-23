/* eslint-disable */

import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


const image = { uri: "https://fondosmil.com/fondo/43059.jpg" };
const image_2 = { uri: "https://fixthephoto.com/images/content/sky-night-png-21616514232.jpg" };

const DatosActualesClima = ({ clima, ciudad, date, pronostico }) => {
    return (

        <View style={styles.container_Data}>
            <ImageBackground source={image} resizeMode="cover">
                <Text style={styles.FechaN}> {date} - {ciudad.countryCode} / {ciudad.country} </Text>
                <Text style={{ fontSize: 40, top: -15, paddingLeft: 20, color: 'white' }}> Hoy </Text>
                <Text style={styles.UbcLocal}> {ciudad.regionName} / {ciudad.city} </Text>
                <Text style={styles.Temperatura}> {clima.temp}°C </Text>
                <Text style={styles.Datos}> Sensacion termica: {clima.feels_like}°C </Text>
                <Text style={styles.Datos}> Estado: {clima.description} </Text>
                <Text style={styles.Datos}> Humedad: {clima.humidity}% </Text>
                <Text style={styles.Datos}> Viento: {clima.wind} k/h </Text>
                <Text style={styles.Datos}> Viento: {clima.pressure} Pa </Text>
                <View style={styles.container_Pronostico}>
                    <ImageBackground source={image_2} resizeMode="cover">
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', padding: 10 }}>Pronostico</Text>
                        <Text style={styles.Datos_Pronostico}>
                            {pronostico.dt_txt1} /
                            Max: {pronostico.temp_max1} -
                            Min: {pronostico.temp_min1}
                        </Text>
                        <Text style={styles.Datos_Pronostico}>
                            {pronostico.dt_txt2} /
                            Max: {pronostico.temp_max2} -
                            Min: {pronostico.temp_min2}
                        </Text>
                        <Text style={styles.Datos_Pronostico}>
                            {pronostico.dt_txt3} /
                            Max: {pronostico.temp_max3} -
                            Min: {pronostico.temp_min3}
                        </Text>
                        <Text style={styles.Datos_Pronostico}>
                            {pronostico.dt_txt4} /
                            Max:{pronostico.temp_max4} -
                            Min:{pronostico.temp_min4}
                        </Text>
                        <Text style={styles.Datos_Pronostico}>
                            {pronostico.dt_txt5} /
                            Max:{pronostico.temp_max5} -
                            Min: {pronostico.temp_min5}
                        </Text>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container_Data: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden',
    },
    container_Pronostico: {
        top: -30,
        marginBottom: 40,
        marginRight: 25,
        marginLeft: 25,
        margin: 'auto',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'black',
    },
    Datos_Pronostico: {
        fontSize: 15,
        padding: 10,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    FechaN: {
        padding: 10,
        color: 'white'
    },
    Temperatura: {
        textAlign: 'center',
        padding: 40,
        fontSize: 55,
        top: -30,
        fontWeight: 'bold',
        color: 'white',
    },
    UbcLocal: {
        textAlign: 'center',
        color: 'white',
        top: 5,
        fontSize: 30
    },
    Datos: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        top: -60,
        color: 'white',
    },
});

export default DatosActualesClima