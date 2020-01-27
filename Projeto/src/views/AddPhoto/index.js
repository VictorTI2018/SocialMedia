import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Platform, ScrollView, Alert } from 'react-native'

import ImagePicker from 'react-native-image-picker'

import styles from './styles'

export default function AddPhoto(props) {

    const [image, setImage] = useState(null)
    const [comment, setComment] = useState()

    function pickImage() {
        ImagePicker.showImagePicker({
            title: 'Escolha a Imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                let imagem = { uri: res.uri, base64: res.data }
                setImage(imagem)
            }
        })
    }

    async function save() {
        Alert.alert("Imagem adicionada!", comment)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma Imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput placeholder="Algum comentario para a foto"
                    value={comment}
                    onChangeText={(value) => setComment(value)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}