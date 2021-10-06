import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import GamePage from './src/components/GamePage';
import RankButton from './src/components/RankButton';
import EngAppBar from './src/components/EngAppBar';
import EngGamePage from './src/components/EngGamePage';
import EngRankButton from './src/components/EngRankButton';

export default function App() {
  return (
    <View style={styles.container}>
      <EngAppBar />

      <EngGamePage />

      <EngRankButton />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
