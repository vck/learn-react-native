import React from 'react';
import { View, Text, Button} from 'react-native';


export default function MainScreen ({navigation}) {
    
    return (
        <View>
            <Text>Main Screen</Text>
            <Button
            title="Login Screen"
            onPress={() => navigation.navigate('Login')}
      />
        </View>
    )

}
