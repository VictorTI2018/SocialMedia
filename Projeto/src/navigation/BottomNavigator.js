import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from '../views/Feed'
import AddPhoto from '../views/AddPhoto'
import Perfil from '../views/Perfil'
import { createAppContainer } from 'react-navigation'


import { ToolBar } from '../components'

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => 
                <Icon name="home" size={30} color={tintColor} />
            
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => 
                <Icon name="camera" size={30} color={tintColor} />
            
        }
    },
    Profile: {
        name: 'Profile',
        screen: Perfil,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor }) => 
                <Icon name="user" size={30} color={tintColor} />
            
        }
    },
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator