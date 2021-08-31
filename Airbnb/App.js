/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
