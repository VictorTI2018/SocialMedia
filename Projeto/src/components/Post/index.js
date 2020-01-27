import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

import { Author } from '../Author'
import { Comments } from '../Comments'
import { AddComment } from '../AddComment'

export function Post(props) {

    const { image, comments } = props
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Author username={props.username} />
            <Comments comments={comments} />
            <AddComment />
        </View>
    )
}