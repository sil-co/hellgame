import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { func, shape, string } from 'prop-types';

export default function RankButton(props) {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.rankButton, style]} onPress={onPress}>
      <Text style={styles.rankText}>{children}</Text>
    </TouchableOpacity>
  );
}

RankButton.propTypes = {
  children: string.isRequired,
  style: shape(),
  onPress: func,
};

RankButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  rankButton: {
    backgroundColor: '#E07272',
    width: 90,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  rankText: {
    color: 'white',
  },
});
