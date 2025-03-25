import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FormikErrors } from 'formik';
import { useConfiguration } from '@/hooks/useConfiguration';


interface IDatePickerProps{
    error: string | undefined;
    touched: boolean;
    value : Date;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>;
}

const DatePicker = ({error, touched, value, setFieldValue} : IDatePickerProps) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { deviceLocale } = useConfiguration();

    interface HandleDateChangeParams {
        event: any;
        selectedDate: Date | undefined;
        setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    }

    const handleDateChange = ({ event, selectedDate, setFieldValue }: HandleDateChangeParams) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
        if (selectedDate) {
            setFieldValue('date', selectedDate);
        }
    };

    
    return (
        <View>
            <View style={styles.gapInputs}>
                <ThemedText type='default' style={styles.label}>Fecha de nacimiento*</ThemedText>
                <Button
                    text={value.toLocaleDateString(deviceLocale)}
                    onPress={() => setShowDatePicker(true)}
                    style={styles.dateButton}
                />
                {touched && error && (
                    <ThemedText type='default' style={styles.errorText}>
                        {error}
                    </ThemedText>
                )}
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={value}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => handleDateChange({ event, selectedDate, setFieldValue })}
                    locale={deviceLocale}
                />)}
        </View>
    );
}

const styles = StyleSheet.create({
    dateButton: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
    },
    gapInputs: {
        marginTop: 15
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        fontSize: 14,
    },
})

export default DatePicker;
