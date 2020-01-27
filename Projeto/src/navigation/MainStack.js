import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'

import BottomNavigator from './BottomNavigator'
import { ToolBar } from '../components'

export default createStackNavigator({
    BottomNavigator
}, {
    defaultNavigationOptions: {
        header: () => <ToolBar title="Social Media" />
    }
})