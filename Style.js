import { StyleSheet } from 'react-native';

const style = StyleSheet.create ({
    textInput: {
        color: '#0EC',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 20,
    },
    title: {
        color: '#075',
        textAlign: 'center',
        fontWeight: 900,
    },
    subtitle: {
        color: '#097',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
    },
    button: {
        marginVertical: 30,
        marginHorizontal: 10,
    },
    accordionTitle: {
        fontWeight: '700',
        color: '#075',
    },
    accordion: {
        borderRadius: 10,
        backgroundColor: '#D3EADE',
    }
});

export default style;