import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  string, bool, shape, number,
} from 'prop-types';

function Hello(props) {
  const {
    children, bang, style, foo, bar,
  } = props;
  return (
    <View>
      <Text style={[styles.text, style, foo, bar]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
  foo: shape({
    fontSize: number,
  }),
  bar: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
  foo: null,
  bar: null,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
