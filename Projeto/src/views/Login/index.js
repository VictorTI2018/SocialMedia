import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogged } from '../../store/auth/actions'
import { Card, Button, Input } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

import { TextField } from '../../components'

import styles from './styles'

import { http } from '../../http'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const users = {
        username: "Victor Hugo",
        email: "victor@teste.com",
    }
    async function handleSubmit() {
        try {
            props.onLogin(users)
            props.navigation.replace('MainStack')
        } finally {

        }
    }

    return (
        <LinearGradient
            style={styles.container}
            locations={[0, 1.0]}
            colors={['#5ED2A0', '#339CB1']}
        >
            <Card title="Login" containerStyle={{ borderRadius: 20, padding: 10 }}>
                <TextField icon name_icon="user" color_icon="black" placeholder="E-mail" />
                <TextField icon name_icon="lock" color_icon="black" placeholder="Senha" secureTextEntry={true} />

                <Button
                    title="Entrar"
                    onPress={handleSubmit}
                    buttonStyle={{ borderRadius: 10, marginTop: 35 }}
                />
            </Card>
        </LinearGradient>
    )
}

const mapDispatchProps = dispatch => {
    return {
        onLogin: users => dispatch(userLogged(users))
    }
}
export default connect(null, mapDispatchProps)(Login)