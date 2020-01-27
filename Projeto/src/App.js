import React from 'react'
import { Provider } from 'react-redux'

import { Navigator } from '../src/navigation/Navigation'

import storeConfig from '../src/store'

const store = storeConfig()

export default function App() {



    return (
        <Provider store={store} >

            <Navigator />
        </Provider>
    )
}