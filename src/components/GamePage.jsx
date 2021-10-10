import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { number } from 'prop-types';

import GameButton from './GameButton';

export default function GamePage(props) {
  const { task } = props;
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const rate = Math.floor((count / task) * 1000) / 10;

  return (
    <View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`HELLボタンを${task}回押してください`}</Text>
      </View>

      <GameButton name="HELL" onPress={onPress} />

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`達成率: ${rate}`}</Text>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`カウント: ${count}`}</Text>
      </View>

    </View>
  );
}

GamePage.propTypes = {
  task: number.isRequired,
};

const styles = StyleSheet.create({
  hellText: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  hellTask: {
    color: '#E37B7B',
    fontSize: 16,
    lineHeight: 32,
  },

});
