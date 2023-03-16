import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../utils/styles';


/*
    Mock login mechanism here
*/


const user = {
    email: 'vickydasta@gmail.com',
    password: '12345'
}



export default function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthSuccess, setAuthSuccess] = useState(false);

    const checkCredentials = () => {
        console.log('triggered', email === user.email && password == user.password)
        if(email === user.email && password == user.password){
            setAuthSuccess(true);
            navigation.navigate('Profile')
        }
    }

    useEffect( () => {
        if(isAuthSuccess === true){
            console.log('triggered', isAuthSuccess)
            navigation.navigate('Profile')
        }
    }, [isAuthSuccess])



    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="email@user.com"
                onChangeText={newText => {
                    console.log(newText)
                    setEmail(newText)
                }}
                defaultValue={email}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder=""
                onChangeText={newText => {
                    console.log(newText)
                    setPassword(newText);

                }}
                defaultValue={password}
                />
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={checkCredentials}>
                <Text style={styles.loginText}>LOGIN</Text> 
            </TouchableOpacity>

        </View>
    )

}
