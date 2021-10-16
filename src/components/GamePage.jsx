import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';
import { number } from 'prop-types';

import firebase from 'firebase';

import GameButton from './GameButton';
import RankButton from './RankButton';

export default function GamePage(props) {
  const { task } = props;
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount((prevCount) => prevCount + 1);
    // const { currentUser } = firebase.auth();
    // const db = firebase.firestore();
    // const ref = db.collection(`users/${currentUser.uid}/1000`).doc('countAndDate');
    // ref.set({
    //   countsUp: count,
    //   updatedAt: new Date(),
    // })
    //   .then(() => {
    //     console.log('Created!', '------------------------------------');
    //   })
    //   .catch((error) => {
    //     console.log('Error!', error);
    //   });
  };

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const { currentUser } = firebase.auth();
  //   let unsubscribe = () => {};
  //   if (currentUser) {
  //     const ref = db.collection(`users/${currentUser.uid}/1000`).orderBy('updatedAt', 'desc');
  //     unsubscribe = ref.onSnapshot((snapshot) => {
  //       const userCount = [];
  //       snapshot.forEach((doc) => {
  //         const initialValue = doc.data();
  //         userCount.push({
  //           countsUp: initialValue.countsUp,
  //         });
  //         console.log(initialValue.countsUp);
  //       });
  //       console.log(userCount[0].countsUp);
  //       setCount(userCount[0].countsUp);
  //     }, (error) => {
  //       console.log(error);
  //       Alert.alert('データの読み込みに失敗しました');
  //     });
  //   }
  //   return unsubscribe;
  // }, []);

  // const [count, setCount] = useState(initialValue);

  const reflectPress = () => {
    // setCount((prevCount) => prevCount + 1);
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const refID = db.collection(`users/${currentUser.uid}/1000`).doc('countAndDate');
    // refID.set({
    //   countsUp: count,
    //   updatedAt: new Date(),
    // })
    //   .then(() => {
    //     console.log('Created!', '------------------------------------');
    //   })
    //   .catch((error) => {
    //     console.log('Error!', error);
    //   });
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/1000`).orderBy('updatedAt', 'desc');
      ref.onSnapshot((snapshot) => {
        const userCount = [];
        snapshot.forEach((doc) => {
          const initialValue = doc.data();
          userCount.push({
            countsUp: initialValue.countsUp,
          });
          // console.log(initialValue.countsUp);
        });
        console.log(userCount[0].countsUp);
        if (count < userCount[0].countsUp) {
          setCount(userCount[0].countsUp);
        } else if (count > userCount[0].countsUp) {
          refID.set({
            countsUp: count,
            updatedAt: new Date(),
          })
            .then(() => {
              console.log('Created!', '------------------------------------');
            })
            .catch((error) => {
              console.log('Error!', error);
            });
        }
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
  };

  const rate = Math.floor((count / task) * 1000) / 10;

  return (
    <View style={styles.container}>

      <View style={styles.hellText}>
        <Text style={styles.hellTask}>{`HELLボタンを${task}回押してください`}</Text>
      </View>

      <GameButton
        name="HELL"
        // eslint-disable-next-line
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
        データ反映
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
