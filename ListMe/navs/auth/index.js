import LoginScreen from '../../screens/auth/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNav(){
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}
