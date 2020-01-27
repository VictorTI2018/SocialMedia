import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements'

export function TextField(props) {
    let leftIcon = null
    if (props.icon) {
        leftIcon = (
            <Icon
                name={props.name_icon}
                size={24}
                color={props.color_icon}
            />
        )
    }
    return (
        <Input
            {...props}
            leftIcon={leftIcon}
        />
    )
}