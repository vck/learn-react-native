import React, { useContext } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../utils/styles';
import AuthContext from '../../utils/authContext';



export default function ProfileScreen ({navigation}) {
    const {user, setAuthenticated} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>Welcome, {user.email} and {user.password}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => setAuthenticated(false)}>
                <Text style={styles.loginText}>Logout</Text> 
            </TouchableOpacity>
        </View>
    )

}
