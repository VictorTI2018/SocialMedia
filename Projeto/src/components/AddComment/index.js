import React, { useState } from 'react'

import { View, Text, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'


export function AddComment() {

    const [comment, setComment] = useState('')
    const [editMode, setEditMode] = useState(false)

    function handleAddComment() {
        Alert.alert('adicionado', comment)
    }

    let commentArea = null
    if (editMode) {
        commentArea = (
            <View syle={styles.container}>
                <TextInput placeholder="Pode comentar..."
                    style={styles.input}
                    value={comment}
                    autoFocus={true}
                    onChangeText={(value) => setComment(value)}
                    onSubmitEditing={handleAddComment}
                />
                <TWF onPress={() => setEditMode(false)}>
                    <Icon name="times" size={15} color="#555" />
                </TWF>
            </View>
        )
    } else {
        commentArea = (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container} >
                    <Icon name="comment-o" size={25} color="#555" />
                    <Text style={styles.caption}>Adicionar um comentário...</Text>
                </View>
            </TWF>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {commentArea}
        </View>
    )
}