import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' />
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
