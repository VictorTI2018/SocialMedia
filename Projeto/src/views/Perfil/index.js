import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/auth/actions'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'

import styles from './styles'

function Perfil(props) {
    function logout() {
        props.onLogout()
    }
    const users = {
        email: props.usuario.email,
        username: props.usuario.username,

    }
    return (
        <View style={styles.container}>
            <Avatar rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} style={styles.avatar} />
            <Text style={styles.username}>{users.username}</Text>
            <Text style={styles.email}>{users.email}</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = ({ usuario }) => {
    return {
        usuario: usuario
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)