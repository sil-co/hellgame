import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GamePage() {
  return (
    <View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>HELLボタンを1000回押してください</Text>
      </View>

      <View style={styles.hellButton}>
        <View style={styles.hellButtonCircle}>
          <Text style={styles.hellButtonText}>HELL</Text>
        </View>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>達成率: 10%</Text>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>カウント: 100</Text>
      </View>

    </View>
  );
}

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
  hellButton: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
  },
  hellButtonCircle: {
    backgroundColor: '#E37B7B',
    height: 250,
    width: 250,
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hellButtonText: {
    fontSize: 100,
    color: 'white',
  },
});
