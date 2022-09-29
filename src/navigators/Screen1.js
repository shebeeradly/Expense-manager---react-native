import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homes from '../assets/images/Home.svg';
import Icosettings from '../assets/images/icosettings.svg';
import Icoshare from '../assets/images/icoshare.svg';
import { SettingScreen, ShareScreen } from '../screens';
import Home from './Home';

const Tab = createBottomTabNavigator();

const Screen1 = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} backBehavior="initialRoute" >
            <Tab.Screen name="Setting" component={SettingScreen}
                options={{
                    tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
                        <Icosettings width={30} height={30} />
                    ), tabBarStyle: { display: 'none' },
                }} />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
                        <Homes width={30} height={30} />
                    )
                }} />
            <Tab.Screen name="Share" component={ShareScreen}
                options={{
                    tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
                        <Icoshare width={30} height={30} />
                    )
                }} />
        </Tab.Navigator>
    );
};

export default Screen1;