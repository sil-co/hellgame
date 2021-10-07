import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, string } from 'prop-types';

export default function RankButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.rankButton, style]}>
      <Text style={styles.rankText}>{children}</Text>
    </View>
  );
}

RankButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

RankButton.defaultProps = {
  style: null,
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
