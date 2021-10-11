import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />

        <Button
          label="Submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'GamePage' }],
            });
          }}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >

            <Text style={styles.footerLink}>Log In here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(227, 123, 123, 0.05)',

  },
  inner: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 30,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    fontSize: 20,
    // lineHeight: 32,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 15,
  },

  footerText: {
    fontSize: 15,
    lineHeight: 24,
    flexDirection: 'row',
    marginRight: 8,
  },
  footerLink: {
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(227, 123, 123, 1)',
  },
  footer: {
    flexDirection: 'row',
  },
});
