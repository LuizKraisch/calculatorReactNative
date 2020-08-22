import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create ({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    tripleButton: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.doubleButton) 
    //Se a prorpiedade double estiver presente, defina mais esse estilo no array stylesButton
    if (props.triple) stylesButton.push(styles.tripleButton)
    if (props.operation) stylesButton.push(styles.operationButton)  
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}