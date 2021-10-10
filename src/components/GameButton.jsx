import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { func, string } from 'prop-types';

export default function GameButton(props) {
  const { name, onPress } = props;
  return (
    <View style={styles.hellButton}>
      <TouchableOpacity style={styles.hellButtonCircle} onPress={onPress}>
        <Text style={styles.hellButtonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

GameButton.propTypes = {
  name: string.isRequired,
  onPress: func,
};

GameButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
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
