import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Profile from './Screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Login') {
                            iconName = focused
                                ? 'ios-log-in'
                                : 'ios-log-in-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused
                                ? 'ios-person'
                                : 'ios-person-outline';
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
//Adding a comment
