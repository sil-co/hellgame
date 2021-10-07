import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import GamePage from '../components/GamePage';
import RankButton from '../components/RankButton';

export default function GamePageScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <GamePage />

      <RankButton>ランキング</RankButton>

      <RankButton style={{
        right: 15,
        top: 35,
        botton: 'none',
        opacity: 0.5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }}
      >
        En/Ja
      </RankButton>

      <RankButton style={{ bottom: 90 }}>マイページ</RankButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
