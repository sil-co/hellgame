import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';

import RankButton from '../components/RankButton';
import LogOutButton from '../components/LogOutButton';
import MyPage from '../components/MyPage';

export default function MyPageScreen(props) {
  const { navigation } = props;

  const [myPageCount, setMyPageCount] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/1000`);
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userNumber = [];
        snapshot.forEach((doc) => {
          // console.log(doc.id, doc.data());
          const data = doc.data();
          userNumber.push({
            id: doc.id,
            countsUp: data.countsUp,
            updatedAt: data.updatedAt.toDate(),
            createdAt: data.createdAt.toDate(),
          });
        });
        setMyPageCount(userNumber);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>

      <MyPage myPageCount={myPageCount} />

      <RankButton
        style={{ bottom: 90 }}
        onPress={() => { navigation.navigate('GamePage'); }}
      >
        暇を潰す
      </RankButton>
      <RankButton onPress={() => { navigation.navigate('Ranking'); }}>ランキング</RankButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});
