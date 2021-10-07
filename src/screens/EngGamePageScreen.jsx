import React from 'react';
import { View, StyleSheet } from 'react-native';

import EngAppBar from '../components/EngAppBar';
import EngGamePage from '../components/EngGamePage';
import EngRankButton from '../components/EngRankButton';

export default function EngGamePageScreen() {
  return (
    <View style={styles.container}>
      <EngAppBar />

      <EngGamePage />

      <EngRankButton>Ranking</EngRankButton>

      <EngRankButton style={{
        right: 5,
        top: 35,
        botton: 'none',
        opacity: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }}
      >
        En/Ja
      </EngRankButton>

      <EngRankButton style={{ bottom: 90 }}>MyPage</EngRankButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
