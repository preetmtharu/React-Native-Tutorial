// Import a library to create a component
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );

// Render it to the device
AppRegistry.registerComponent('Albums', () => App);