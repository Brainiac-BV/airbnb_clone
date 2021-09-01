import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginVertical: 15,
        marginHorizontal: 20,
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        fontWeight: 'bold'
    },
    category: {
        fontWeight: 'bold'
    },
    lightCategory: {
        color:'#8d8d8d'
    },
    button: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;