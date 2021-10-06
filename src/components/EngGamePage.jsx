import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EngGamePage() {
  return (
    <View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>Press the HELL button 1000 times</Text>
      </View>

      <View style={styles.hellButton}>
        <View style={styles.hellButtonCircle}>
          <Text style={styles.hellButtonText}>HELL</Text>
        </View>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>Achievement rate: 10%</Text>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>Count: 100</Text>
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
    // backgroundColor: 'red',
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 14,
  },
  hellButtonText: {
    fontSize: 100,
    color: 'white',
  },
});
