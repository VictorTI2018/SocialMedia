import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    container: {
        flex: 1,
        margin: 10
    },

    username: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555',
        marginLeft: 10,
    }
})