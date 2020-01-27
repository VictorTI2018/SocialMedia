import React from 'react'
import {
    Text,
    View,
    Image
} from 'react-native'
import { Avatar } from 'react-native-elements'

import styles from './styles'

import icon from '../../assets/imgs/icon.png'

export function ToolBar(props) {

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>
            </View>
        </View>
    )
}