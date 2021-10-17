import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';

import firebase from 'firebase';

import GameButton from './GameButton';
import RankButton from './RankButton';

export default function GamePage() {
  const [taskCount, setTaskCount] = useState(10);
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reflectPress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const refID = db.collection(`users/${currentUser.uid}/1000`).doc('countAndDate');
    let unsubscribe = () => {};

    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/1000`);

      unsubscribe = ref.onSnapshot((snapshot) => {
        const userCount = [];
        snapshot.forEach((doc) => {
          const initialValue = doc.data();
          // console.log(initialValue);
          userCount.push({
            countsUp: initialValue.countsUp,
          });
        });

        console.log(userCount[0]);
        if (userCount[0] !== undefined) {
          if (count < userCount[0].countsUp) {
            setCount(userCount[0].countsUp);
          } else if (count > userCount[0].countsUp) {
            refID.update({
              countsUp: count,
              updatedAt: new Date(),
            })
              .then(() => {
                Alert.alert('データを保存しました');
              })
              .catch(() => {
                Alert.alert('データの保存に失敗しました');
              });
          }
          if (taskCount < userCount[0].countsUp) {
            if (userCount[0].countsUp > 10 && userCount[0].countsUp < 100) {
              setTaskCount(100);
            } else if (userCount[0].countsUp > 100 && userCount[0].countsUp < 1000) {
              setTaskCount(1000);
            } else if (userCount[0].countsUp > 1000 && userCount[0].countsUp < 10000) {
              setTaskCount(10000);
            } else if (userCount[0].countsUp > 10000 && userCount[0].countsUp < 100000) {
              setTaskCount(100000);
            }
          }
        } else if (userCount[0] === undefined) {
          refID.set({
            countsUp: count,
            updatedAt: new Date(),
            createdAt: new Date(),
          })
            .then(() => {
              Alert.alert('新規データを作成しました');
            })
            .catch(() => {
              Alert.alert('新規データ作成に失敗しました');
            });
        }
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  };

  const rate = Math.floor((count / taskCount) * 1000) / 10;

  return (
    <View style={styles.container}>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`HELLボタンを${taskCount}回押してください`}</Text>
      </View>

      <GameButton
        name="HELL"
        onPress={handlePress}
      />

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`達成率: ${rate}%`}</Text>
      </View>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`カウント: ${count}`}</Text>
      </View>

      <RankButton
        style={{ bottom: 140 }}
        onPress={reflectPress}
      >
        反映&保存
      </RankButton>

    </View>
  );
}

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
