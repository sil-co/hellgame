import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(227, 123, 123, 1)',
    borderRadius: 4,
    // height: 48,
    // width: 99,
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  buttonLabel: {
    fontSize: 20,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: 'white',
  },
});
