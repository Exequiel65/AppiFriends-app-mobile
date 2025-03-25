import Input from '@/components/layout/Input/Input';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useConfiguration } from '@/hooks/useConfiguration';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Button from '@/components/layout/Button/Button';

const Step1 = () => {
    const { t } = useConfiguration();


    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required(t('login.errors.email.required'))
      });
    const initialValues = {
        name: "",
        lastName: "",
        date: new Date(),
        gender: ""
    }
    const handleStep1= () =>{

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
                    onSubmit={values => handleStep1()}
                    validateOnBlur={false}
                    validateOnChange={false}
                    >
                    {({ handleChange, handleBlur, values, errors, touched, submitForm, handleSubmit }) => (
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
                            />
                            <Button 
                               text='Siguiente'
                               onPress={submitForm}
                            />
                        </View>

                    )}
                </Formik>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screenContain:{
        paddingTop: 20,
        flex: 1
    },
    formContainer:{
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    gapInputs: {
        marginTop: 15
    },
    title:{
        textAlign: 'center',
    },
    subTitle:{
        textAlign: 'center',
    }
})

export default Step1;
