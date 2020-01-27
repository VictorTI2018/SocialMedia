import React from 'react'
import { View, Text, Alert } from 'react-native'

import styles from './styles'

export function Comments(props) {

    let view = null

    if (props.comments) {
        view = props.comments.map((item, index) => {
            return (
                <View style={styles.commentsContainer} key={index}>
                    <Text style={styles.username}>{item.username}:</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        })
    }
    return (
        <View style={styles.container}>
            {view}
        </View>
    )
}