import React, {useState} from 'react'
import { View, Text, Button, Pressable } from 'react-native'

const Counter = (props) => {

    let initialState = 0;
    const [numba, setNumba] = useState(initialState);

    return (
        <View>
            <Pressable>
                <Text style={{ fontSize: 18, alignItems: 'center', justifyContent: 'center', padding: 10}}>Number: {numba}</Text>
                <Button title="Reset" onPress={() => setNumba(initialState)} />
                <Button style={{backgroundColor: 'green'}} title="Increase" onPress={() => setNumba(prevCount => prevCount + 1)} />
                <Button title="Decrease" onPress={() => setNumba(Math.max( 0, numba - 1))} />
            </Pressable>
        </View>
    )
}

export default Counter;