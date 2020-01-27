import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'

import styles from './styles'

export function Author(props) {

    const { avatar, username } = props

    return (
        <View style={styles.container}>
            <Avatar
                style={styles.avatar}
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />
            <Text style={styles.username}>{username}</Text>
        </View>
    )
}