import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { number } from 'prop-types';

import firebase from 'firebase';

import GameButton from './GameButton';
import RankButton from './RankButton';

export default function GamePage(props) {
  const { task } = props;
  const [count, setCount] = useState(0);
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();

    /*  coutsUpの値を更新しようとした
    const getdb = db.collection(`users/${currentUser.uid}/${task}`).get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          console.log(data.countsUp);
        });
      }); */

    const refe = db.collection(`users/${currentUser.uid}/${task}`);
    refe.add({
      countsUp: count,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Count Up!', docRef.id);
      })
      .catch((error) => {
        console.log('Error!', error);
      });

    setCount((prevCount) => prevCount + 1);
  };
  const rate = Math.floor((count / task) * 1000) / 10;

  return (
    <View style={styles.container}>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`HELLボタンを${task}回押してください`}</Text>
      </View>

      <GameButton name="HELL" onPress={handlePress} />

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`達成率: ${rate}`}</Text>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`カウント: ${count}`}</Text>
      </View>

      <RankButton
        style={{ bottom: 140 }}
      >
        English
      </RankButton>

    </View>
  );
}

GamePage.propTypes = {
  task: number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hellText: {
    // backgroundColor: 'white',
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
