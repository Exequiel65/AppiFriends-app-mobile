import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';


interface Option {
    label: string;
    value: string;
}

interface GenderSelectorProps {
    options: Option[];
    selectedValue?: string;
    onSelect: (value: string) => void;
    label: string;
    containStyle?: StyleProp<ViewStyle>;
    error?: string;
}

const TextSelector = ({ options, selectedValue, onSelect, label, containStyle, error }: GenderSelectorProps) => {
    return (
        <View style={[containStyle]}>
            <ThemedText style={styles.label}>{label}</ThemedText>
            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            styles.option,
                            selectedValue === option.value && styles.selectedOption,
                        ]}
                        onPress={() => onSelect(option.value)}
                    >
                        <ThemedText
                            style={[
                                styles.optionText,
                                selectedValue === option.value && styles.selectedOptionText,
                            ]}
                        >
                            {option.label}
                        </ThemedText>
                    </TouchableOpacity>
                ))}
            </View>
            {error && <ThemedText style={[styles.error]}>{error}</ThemedText>}
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    option: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f8f8f8',
    },
    selectedOption: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },
    optionText: {
        color: '#333',
    },
    selectedOptionText: {
        color: 'white',
    },
    error: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: 600,
        color: 'red',
        paddingHorizontal: 20
    }
});

export default TextSelector;
