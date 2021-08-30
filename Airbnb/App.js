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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
