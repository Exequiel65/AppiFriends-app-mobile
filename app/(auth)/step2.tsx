import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Step2 = () => {
    const data = useLocalSearchParams<any>();
    console.log('Datos del formulario:', data);
    return (
        <View>
            <Text>Step2</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Step2;
