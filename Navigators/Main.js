import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"

//Stack
import HomeNavigator from './HomeNavigator';
import UserNavigator from './UserNavigator';
import AdminNavigator from './AdminNavigator';


import AuthGlobal from '../Context/store/AuthGlobal';

const Tab = createBottomTabNavigator();


const Main = () => {

    const context = useContext(AuthGlobal)

    return (

        <Tab.Navigator
            initialRouteName = "User"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#e91e63'
            }} >
                {context.stateUser.isAuthenticated === true ? (
                    <Tab.Screen 
                        name="Home"
                        component= {HomeNavigator}
                        options={{
                            tabBarIcon : ({color}) => (
                                <Icon 
                                    name="home"
                                    style={{position: "relative"}}
                                    color= {color}
                                    size={30}
                                />
                            )
                        }}
                    />
                    ): null}
                {context.stateUser.user.role == "Admin" ? (
                    <Tab.Screen 
                    name="Admin"
                    component= {AdminNavigator}
                    options={{
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="cog"
                                color= {color}
                                size={30}
                            />
                        )
                    }}
                />
                ): null}
                

                <Tab.Screen 
                    name="User"
                    component= {UserNavigator}
                    options={{
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="user"
                                color= {color}
                                size={30}
                            />
                        )
                    }}
                />

        </Tab.Navigator>
            
        

    );


};

export default Main;