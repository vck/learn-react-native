import HomeScreen from '../../screens/main/Home';
import ProfileScreen from '../../screens/main/Profile';
import { AntDesign } from '@expo/vector-icons'; 


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainNav(){
    return (
        <Tab.Navigator screenOptions={ ({ route }) => ({
            headerTitleAlign: 'center',
            tabBarIcon: ( {focuse, color, size} ) => {
                let iconName;
                if(route.name === 'Home'){
                    iconName = 'home'
                }else if(route.name === 'Profile'){
                    iconName = 'user'
                }

                return <AntDesign name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',

        })}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: 'Profile',
            }}            
            />
        </Tab.Navigator>
    )
}
