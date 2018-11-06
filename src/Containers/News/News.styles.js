import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: 75,
        flexDirection: 'row',
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    listItemImage: {
        width: '100%',
        height: '100%',
    },
    listItemLeft: {
        flex: 1
    },
    listItemRight: {
        paddingLeft: 10,
        flex: 3,
        justifyContent: 'center'
    },
    listItemCenter: {
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default styles;