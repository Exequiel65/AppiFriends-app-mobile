import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

export type ThemedInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    label?: string;
    error?: string;
    containStyle?: StyleProp<ViewStyle>
};

const Input = ({ style, containStyle, label, error, lightColor, darkColor, ...otherProps }: ThemedInputProps) => {

    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'inputBorderColor')

    return (
        <View style={[containStyle]}>
            {label && <ThemedText type='label'>{label}</ThemedText>}
            <TextInput
                onChangeText={otherProps.onChangeText}
                onBlur={otherProps.onBlur}
                value={otherProps.value}
                secureTextEntry={otherProps.secureTextEntry}
                style={[styles.input, { borderColor: borderColor }]}
                placeholder={otherProps.placeholder}
            />
            {error && <ThemedText style={[styles.error]}>{error}</ThemedText>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
    error: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: 600,
        color: 'red',
        paddingHorizontal: 20
    }
})

export default Input;
