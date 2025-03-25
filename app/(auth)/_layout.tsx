import { useAuthStore } from '@/store/useAuthStore';
import { router, Stack } from 'expo-router';
import React, { useEffect } from 'react';

const AuthLayout = () => {

    const {User} = useAuthStore();
    console.log(User)
    useEffect(() => {
        if (User) {
            console.log("User exists, redirecting to app");
            router.replace('/(iapp)');
        }
    }, [User]);
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='index'/>
        </Stack>
    );
}


export default AuthLayout;
