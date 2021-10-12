import React, { useEffect } from 'react';
import {
  Text, View, StyleSheet, TextInput, ScrollView,
} from 'react-native';

import RankButton from '../components/RankButton';
import LogOutButton from '../components/LogOutButton';

export default function MyPageScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>

      <ScrollView style={styles.myPageContainer}>

        <View style={styles.myPageInner}>
          <Text style={styles.myPageTitle}>名前</Text>
          <View style={styles.myPageName}>
            <TextInput value="silco" style={styles.myPageNameText} />
            <Text style={styles.myPageNameChange}>変更</Text>
          </View>
        </View>

        <View style={styles.myPageInner}>
          <Text style={styles.myPageTitle}>メールアドレス</Text>
          <View style={styles.myPageName}>
            <TextInput value="silco@gmail.com" style={styles.myPageNameText} />
            <Text style={styles.myPageNameChange}>変更</Text>
          </View>
        </View>

        <View style={styles.myPageInner}>
          <Text style={styles.myPageTitle}>パスワード</Text>
          <View style={styles.myPageName}>
            <TextInput value="・・・・・" style={styles.myPageNameText} />
            <Text style={styles.myPageNameChange}>変更</Text>
          </View>
        </View>

        <View style={styles.myPageGameInner}>
          <Text style={styles.myPageGameTitle}>1000000回</Text>
          <View style={styles.myPageGame}>
            <Text style={styles.myPageGameRate}>達成率：10%</Text>
            <Text style={styles.myPageGameCount}>カウント：100000</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              100000回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              10000回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              1000回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              100回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              10回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

        <View style={styles.myPageClearInner}>
          <View style={styles.myPageClearTitle}>
            <Text style={styles.myPageGameClearWord}>Clear!</Text>
            <Text style={styles.myPageGameTitle}>
              1回
            </Text>
          </View>
          <View style={styles.myPageGame}>
            <Text>達成日：21/10/8</Text>
            <Text>所要時間：10日13時間32分</Text>
          </View>
        </View>

      </ScrollView>

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
  myPageContainer: {
    marginHorizontal: 15,
  },
  myPageInner: {
    // backgroundColor: 'pink',
    paddingTop: 15,
    height: 70,
  },
  myPageTitle: {
    color: 'rgba(33, 150, 243, 0.7)',
  },
  myPageName: {
    marginTop: 7,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  myPageNameText: {
    fontSize: 15,
    textAlignVertical: 'top',
  },
  myPageNameChange: {
    // backgroundColor: 'blue',
    right: 15,
  },
  myPageGameInner: {
    paddingTop: 15,
    height: 90,
  },
  myPageGameTitle: {
    color: '#E07272',
  },
  myPageGame: {
    marginTop: 7,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  myPageGameCount: {

  },
  myPageGameRate: {
  },
  myPageClearInner: {
    paddingTop: 15,
    height: 90,
  },
  myPageClearTitle: {
    flexDirection: 'row',
  },
  myPageGameClearWord: {
    color: 'rgba(33, 150, 243, 0.7)',
  },

});
