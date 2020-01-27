import { StyleSheet, Platform } from 'react-native'


export default StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 30 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        backgroundColor: 'teal'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    title: {
        color: '#FFF',
        fontFamily: 'shelter',
        fontSize: 28,
        height: 28
    }
})