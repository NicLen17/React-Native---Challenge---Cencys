/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { obtenerCiudad } from '../Api';
import { obtenerClima } from '../Api';
import { obtenerPronostico } from '../Api';
import DatosActualesClima from '../Components/DatosActualesClima';

const InicioScreen = () => {
    const [ciudad, setCiudad] = useState([])
    const [clima, setClima] = useState([])
    const [pronostico, setPronostico] = useState([])

    // Ubicacion atual

    const cargarCiudad = async () => {
        const data = await obtenerCiudad();
        setCiudad({
            city: data.location.city,
            country: data.location.country,
            countryCode: data.location.countryCode,
            regionName: data.location.regionName,
        });
    };

    useEffect(() => {
        cargarCiudad();
    }, [])

    // Clima de la ubicacion atual

    const cargarClima = async () => {
        const data = await obtenerClima();
        setClima({
            temp: data.current.main.temp,
            feels_like: data.current.main.feels_like,
            description: data.current.weather[0].description,
            humidity: data.current.main.humidity,
            wind: data.current.wind.speed,
            pressure: data.current.main.pressure
        });
    };

    useEffect(() => {
        cargarClima();
    }, [])

    // Pronostico de los proximos 5 dias

    const cargarPronostico = async () => {
        const data = await obtenerPronostico();
        console.log("🚀 ~ file: InicioScreen.js ~ line 53 ~ cargarPronostico ~ data", data)
        setPronostico({
            temp_max1: data.current.list[0].main.temp_max,
            temp_min1: data.current.list[0].main.temp_min,
            dt_txt1: data.current.list[0].dt_txt,

            temp_max2: data.current.list[8].main.temp_max,
            temp_min2: data.current.list[8].main.temp_min,
            dt_txt2: data.current.list[8].dt_txt,

            temp_max3: data.current.list[16].main.temp_max,
            temp_min3: data.current.list[16].main.temp_min,
            dt_txt3: data.current.list[16].dt_txt,

            temp_max4: data.current.list[24].main.temp_max,
            temp_min4: data.current.list[24].main.temp_min,
            dt_txt4: data.current.list[24].dt_txt,

            temp_max5: data.current.list[32].main.temp_max,
            temp_min5: data.current.list[32].main.temp_min,
            dt_txt5: data.current.list[32].dt_txt,
        });
    };

    useEffect(() => {
        cargarPronostico();
    }, [])

    // Fehca

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    return (
        <View>
            <DatosActualesClima pronostico={pronostico} ciudad={ciudad} date={date} clima={clima} />
        </View>
    );
};

export default InicioScreen;
