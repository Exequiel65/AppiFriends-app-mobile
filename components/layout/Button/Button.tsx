import { useConfiguration } from '@/hooks/useConfiguration';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

export type CustomButtonProps = TouchableOpacityProps & {
    lighColor?: string;
    darkColor?:string;
    text : string;
}


const Button = ({style, text, lighColor, darkColor, ...otherProps }: CustomButtonProps) => {
    const { colorObject } = useConfiguration();
    const styleButton: StyleProp<ViewStyle>= !otherProps.disabled ? 
        {backgroundColor: colorObject.buttonBackground, ...styles.button} :
        {backgroundColor: colorObject.buttonDisabled, ...styles.button}
    return (
        <TouchableOpacity style={[styleButton ,style]} onPress={otherProps.onPress} disabled={otherProps.disabled}>
            <Text style={[styles.text, {color: '#FAFAFA'}]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
        textAlign: 'center'
    },
    button:{
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 12
    }
})

export default Button;
