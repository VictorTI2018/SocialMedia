import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import {  Post } from '../../components'

import styles from './styles'

export default function Feed(props) {

    const posts = [{
        id: Math.random(),
        username: 'Victor Hugo da Silva',
        email: 'victor@teste.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [{
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        },]
    },
    {
        id: Math.random(),
        username: 'Victor Hugo da Silva',
        email: 'victor@teste.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [{
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        }, {
            username: "Bryan O'Conner",
            comment: 'Comentario Teste'
        },]
    }]

    return (
        <View style={styles.container}>
            <FlatList data={posts}
                renderItem={({ item }) => <Post {...item} key={item.id} />}
                keyExtractor={item => String(item.id)}
            />
        </View>
    )
}