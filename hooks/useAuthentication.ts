import { useAuthStore } from '../store/useAuthStore';
import * as SecureStore from 'expo-secure-store';


export const useAuth = () => {
    const loginValues: ILogin = { email: '', password: '' };
    const { setUser } = useAuthStore();

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync('user')
        await setUser(null);
    };

    const handleLogin = async (values: IUser) => {
        console.log(values);
        await setUser(values);
    };

    return {
        loginValues,
        handleLogin,
        handleLogout,
    };
};
