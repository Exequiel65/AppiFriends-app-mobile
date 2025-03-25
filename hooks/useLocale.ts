import { useEffect, useState } from 'react';
import * as Localization from 'expo-localization';


export const UseLocale = () => {
    const [deviceLocale, setDeviceLocale] = useState('es-AR');
    const getDeviceLocale = async () => {
        try {
            const locale = await Localization.getLocales();
            if (locale && locale.length > 0) {
                setDeviceLocale(locale[0].languageTag);
            }
        } catch (error) {
            console.warn('Error obteniendo locale del dispositivo:', error);
        }
    };

    useEffect(() => {
        getDeviceLocale();
    }, [])
    
    return {deviceLocale}
}




