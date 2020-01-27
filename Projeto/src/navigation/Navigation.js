import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../views/Login'
import MainStack from './MainStack'

export function Navigator() {
    const Screens = {
        Login,
        MainStack
    }

    const StackNavigator = createStackNavigator(Screens, {
        defaultNavigationOptions: {
            header: () => null
        }
    },{ initialRouteName: 'Login' })

    const AppContainer = createAppContainer(StackNavigator)
    return <AppContainer ref={ref => { navigator = ref }} />
}