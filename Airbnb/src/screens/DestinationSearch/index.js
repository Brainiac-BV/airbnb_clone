import React, {useState} from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import searchResults from "../../../assets/data/search";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');

    return (
        <View>
            <TextInput
              style={styles.textInput}
              placeholder="Where you wanna go cuz?"
              value={inputText}
              onChangeText={setInputText}
             />

            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;