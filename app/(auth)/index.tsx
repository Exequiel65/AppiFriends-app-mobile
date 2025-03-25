import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useConfiguration';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const Index = () => {
    const {t} = useConfiguration();
    const { handleLogin } = useAuth();
    const userMock: IUser ={
        email: "marcos97britos@gmail.com",
        name: "Marcos",
        familyName: "Britos",
        givenName: "Marcos",
        id: "oaikjbaiu123",
        photo: null,
        isCompleted: false
    } 
    return (
        <ThemedView style={[styles.container]}>
            <View>
                <Image source={require('../../assets/images/ImageLogin.png')} />
            </View>
            <View style={[styles.titleContainer]}>
                <ThemedText style={[styles.title]}>{t('welcome')}</ThemedText>
                <ThemedText>{t('login.description')}</ThemedText>
            </View>
            <View style={[styles.OAuthContainer]}>
                <View style={[styles.iconsContainer]}>
                    <TouchableOpacity onPress={() => handleLogin(userMock)}>
                        <ThemedText>Iniciar sesion</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
    titleContainer: {
      width: '90%',
      flex: 1,
    },
    formContain: {
      flex: 3,
      width: '90%',
    },
    title: {
      fontSize: 24,
      fontWeight: '500',
      paddingBottom: 10,
    },
    // text: {
    //   color: '#252525',
    // },
    OAuthContainer:{
      flex: 1,
      alignItems: 'center'
    },
    iconsContainer:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20
    }
  });

export default Index;
