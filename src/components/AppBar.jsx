import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>御暇潰死</Text>

        <View style={styles.appbarRight}>
          <Text style={styles.appbarLang}>En/Ja</Text>
          <Text style={styles.appbarMypage}>マイページ</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    justifyContent: 'flex-end',
    backgroundColor: '#E07272',
  },
  appbarInner: {
    alignItems: 'center',
    bottom: 8,
  },
  appbarRight: {
    position: 'absolute',
    right: 15,
    bottom: 1,
  },
  appbarLang: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    color: 'rgba(255,255,255,0.5)',
  },
  appbarMypage: {
    color: 'white',
  },
  appbarTitle: {
    marginBottom: 6,
    paddingTop: 8,
    fontSize: 32,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
