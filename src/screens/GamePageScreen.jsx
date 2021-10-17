import React from 'react';
import { View, StyleSheet } from 'react-native';

import GamePage from '../components/GamePage';
import RankButton from '../components/RankButton';

export default function GamePageScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>

      <GamePage name="HELL" />

      <RankButton
        onPress={() => { navigation.navigate('Ranking'); }}
      >
        ランキング
      </RankButton>

      <RankButton
        style={{ bottom: 90 }}
        onPress={() => { navigation.navigate('MyPage'); }}
      >
        マイページ
      </RankButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
