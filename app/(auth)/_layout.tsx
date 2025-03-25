import { useAuthStore } from '@/store/useAuthStore';
import { router, Stack } from 'expo-router';
import React, { useEffect } from 'react';

const AuthLayout = () => {

    const {User} = useAuthStore();
    console.log(User)
    useEffect(() => {
        if (User) {
            if (User.isCompleted) {
                console.log("User exists, redirecting to app");
                router.replace('/(iapp)');
            }else{
                router.replace('/(auth)/step1')
            }
        }
    }, [User]);
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='index'/>
            <Stack.Screen name='step1' />
        </Stack>
    );
}


export default AuthLayout;
