import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                  name={"Home"}
                  component={HomeTabNavigator}
                  options={{
                      headerShown: false,
                  }}
                />

                <Stack.Screen
                  name={"Destination Search"}
                  component={DestinationSearchScreen}
                />

                <Stack.Screen
                  name={"Guests"}
                  component={GuestScreen}
                  options={{
                      title: 'How many people ?'
                  }}
                />
                <Stack.Screen
                  name={"Search Results"}
                  component={SearchResultsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;