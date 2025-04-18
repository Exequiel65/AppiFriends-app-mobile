import Input from '@/components/layout/Input/Input';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useConfiguration } from '@/hooks/useConfiguration';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Button from '@/components/layout/Button/Button';
import DatePicker from '@/components/layout/DatePicker/DatePicker';
import TextSelector from '@/components/layout/TextSelector/TextSelector';
import { router } from 'expo-router';

const Step1 = () => {
    const { t } = useConfiguration();

    const genderOptions = [
        { label: 'Masculino', value: 'male' },
        { label: 'Femenino', value: 'female' },
        { label: 'Otro', value: 'other' },
        { label: 'Prefiero no decir', value: 'unspecified' },
    ];


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(t('login.errors.email.required')),
        lastName: Yup.string()
            .required('Apellido es requerido'),
        date: Yup.date()
            .required('Fecha es requerida')
            .max(new Date(), 'La fecha no puede ser futura'),
        gender: Yup.string()
            .required('Genero es requerido')
    });
    const initialValues = {
        name: "",
        lastName: "",
        date: new Date(),
        gender: ""
    }
    const handleStep1 = (values: typeof initialValues) => {
        router.push(`/step2?name=${values.name}&lastName=${values.lastName}&date=${values.date}&gender=${values.gender}`)
    }


    return (

        <ThemedView style={[styles.screenContain]}>
            <View>
                <ThemedText type='title' style={[styles.title]}>{t('createAccount.step1.title')}</ThemedText>
                <ThemedText type='subtitle' style={[styles.subTitle]}>{t('createAccount.step1.description')}</ThemedText>
            </View>
            <View style={[styles.formContainer]}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values => handleStep1(values)}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {({ handleChange, handleBlur, values, errors, touched, submitForm, handleSubmit, setFieldValue }) => (
                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                            <View>
                                <Input
                                    onChangeText={handleChange('name')}
                                    // onBlur={handleBlur('name')}
                                    value={values.name}
                                    placeholder={'Nombre'}
                                    label='Ingresa tu nombre*'
                                    error={errors.name}
                                />

                                <Input
                                    onChangeText={handleChange('lastName')}
                                    // onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    placeholder={'Apellido'}
                                    label='Ingresa tu apellido*'
                                    containStyle={styles.gapInputs}
                                    error={errors.lastName}
                                />
                                <DatePicker
                                    error={typeof errors.date === 'string' ? errors.date : undefined}
                                    setFieldValue={setFieldValue}
                                    touched={!!touched.date}
                                    value={values.date}
                                />
                                <TextSelector
                                    options={genderOptions}
                                    selectedValue={values.gender}
                                    onSelect={handleChange('gender')}
                                    containStyle={styles.gapInputs}
                                    label='Genero:'
                                    error={errors.gender}
                                />
                            </View>
                            <View>
                                <Button
                                    text='Siguiente'
                                    onPress={submitForm}
                                />

                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screenContain: {
        paddingTop: 20,
        flex: 1
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1
    },
    gapInputs: {
        marginTop: 15
    },
    title: {
        textAlign: 'center',
    },
    subTitle: {
        textAlign: 'center',
    }
})

export default Step1;
