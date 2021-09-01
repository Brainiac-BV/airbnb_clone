import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const GuestScreen = (props) => {

    let initialState = 0;
    const [adults, setAdults] = useState(initialState);
    const [children, setChildren] = useState(initialState);
    const [infants, setInfants] = useState(initialState);
    
    const navigation = useNavigation();

    return (
        <View style={{justifyContent: 'space-between', height:'100%'}}>
          <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.category}>Adults</Text>
                    <Text style={styles.lightCategory}>Ages 13 or above</Text>
                </View>

                <View style={styles.row1}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setAdults(Math.max(0, adults - 1))}
                  >
                      <Text>-</Text>
                  </Pressable>

                  <Text>{adults}</Text>

                  <Pressable
                    style={styles.button}
                    onPress={() => setAdults(adults + 1)}
                  >
                      <Text>+</Text>
                  </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.category}>Children</Text>
                    <Text style={styles.lightCategory}>Ages 12 to 6</Text>
                </View>

                <View style={styles.row1}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setChildren(Math.max(0, children - 1))}
                  >
                      <Text>-</Text>
                  </Pressable>

                  <Text>{children}</Text>

                  <Pressable
                    style={styles.button}
                    onPress={() => setChildren(children + 1)}
                  >
                      <Text>+</Text>
                  </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.category}>Infants</Text>
                    <Text style={styles.lightCategory}>Ages 5 or under</Text>
                </View>

                <View style={styles.row1}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setInfants(Math.max(0, infants - 1))}
                  >
                      <Text>-</Text>
                  </Pressable>

                  <Text>{infants}</Text>

                  <Pressable
                    style={styles.button}
                    onPress={() => setInfants(infants + 1)}
                  >
                      <Text>+</Text>
                  </Pressable>
                </View>
            </View>
          </View>
          
          <Pressable style={{
              marginBottom: 20,
              backgroundColor: '#f15454',
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              height: 50
            }}
            onPress={() => navigation.navigate("Search Results")}
          >
              <Text style={{fontWeight: 'bold', fontSize: 20}}> Search</Text>
          </Pressable>
                
        </View>
    )
}

export default GuestScreen;