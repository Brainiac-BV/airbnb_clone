import React from 'react';
import { 
    View, 
    Text, 
    ImageBackground,
    Pressable
} from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto"
import { useNavigation } from '@react-navigation/native';
import Counter from '../../components/Counter';

const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <Pressable 
                style={styles.searchButton} 
                onPress={() => navigation.navigate("Destination Search")}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Go Places</Text>
                <Pressable style={styles.button} onPress={() => console.warn("Other Button Clicked")}>
                    <Text style={styles.buttonText}>Press This</Text>
                </Pressable>
            </ImageBackground>

            <Counter />
        </View>
    );
};

export default HomeScreen;