import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Pressable, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import searchResults from "../../../assets/data/search";
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = (props) => {

    const navigator = useNavigation();
    let initialState = 0;
    const [inputText, setInputText] = useState('');
    const [numba, setNumba] = useState(initialState)

    return (
        <View>
            <TextInput
              style={styles.textInput}
              placeholder="Where you wanna go cuz?"
              value={inputText}
              onChangeText={setInputText}
             />

             <View>
                 <Pressable>
                     <Text>Number: {numba}</Text>
                     <Button title="Reset" onPress={() => setNumba(initialState)} />
                     <Button style={{backgroundColor: 'green'}} title="Increase" onPress={() => setNumba(prevCount => prevCount + 1)} />
                     <Button title="Decrease" onPress={() => setNumba(Math.max( 0, numba - 1))} />
                 </Pressable>
             </View>

            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <Pressable
                    onPress={() => navigator.navigate("Guests")}
                    >
                      <View style={styles.row}>
                          <View style={styles.iconContainer}>
                              <Entypo name={"location-pin"} size={30} />
                          </View>
                          <Text style={styles.locationText}>{item.description}</Text>
                      </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;