/* eslint-disable */
const API_UBICACION = 'http://10.0.2.2:4000/v1/location'
const API_CLIMA = 'http://10.0.2.2:4000/v1/current'
const API_PRONOSTICO = 'http://10.0.2.2:4000/v1/forecast'

export const obtenerCiudad = async () => {
    const res = await fetch(API_UBICACION);
    return await res.json();
}

export const obtenerClima = async () => {
    const res = await fetch(API_CLIMA);
    return await res.json();
}

export const obtenerPronostico = async () => {
    const res = await fetch(API_PRONOSTICO);
    return await res.json();
}