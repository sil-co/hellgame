import React from 'react';
import {
  View, StyleSheet, Text, ScrollView,
} from 'react-native';

import AppBar from '../components/AppBar';
import RankButton from '../components/RankButton';

export default function RankScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <View style={styles.rankMainPage}>

        <View style={styles.rankBar}>
          <View style={styles.rankBarRank}>
            <Text>ランク</Text>
          </View>
          <Text style={styles.rankBarName}>ニックネーム</Text>
          <Text style={styles.rankBarTime}>時間</Text>
          <Text style={styles.randBarDate}>Achived Date</Text>
        </View>

        <ScrollView>
          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>1</Text>
            </View>
            <Text style={styles.rankItemName}>Tesla</Text>
            <Text style={styles.rankItemTime}>33年335日25時間24分</Text>
            <Text style={styles.randItemDate}>21/10/6</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>2</Text>
            </View>
            <Text style={styles.rankItemName}>Toyoda</Text>
            <Text style={styles.rankItemTime}>33年336日25時間24分</Text>
            <Text style={styles.randItemDate}>21/1/6</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>3</Text>
            </View>
            <Text style={styles.rankItemName}>tin</Text>
            <Text style={styles.rankItemTime}>34年335日25時間24分</Text>
            <Text style={styles.randItemDate}>20/10/6</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>4</Text>
            </View>
            <Text style={styles.rankItemName}>Testtesttestmanman</Text>
            <Text style={styles.rankItemTime}>35年335日25時間24分</Text>
            <Text style={styles.randItemDate}>21/6/6</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>5</Text>
            </View>
            <Text style={styles.rankItemName}>日本人ですか？</Text>
            <Text style={styles.rankItemTime}>36年0日1時間2分</Text>
            <Text style={styles.randItemDate}>21/10/5</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>6</Text>
            </View>
            <Text style={styles.rankItemName}>ReactNativeDjangoReactPythonJavaScript</Text>
            <Text style={styles.rankItemTime}>37年</Text>
            <Text style={styles.randItemDate}>2/12/31</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>7</Text>
            </View>
            <Text style={styles.rankItemName}>Colorfffffffinvaliderror</Text>
            <Text style={styles.rankItemTime}>40年44日4時間44分</Text>
            <Text style={styles.randItemDate}>4/4/4</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>8</Text>
            </View>
            <Text style={styles.rankItemName}>Colorfffffffinvaliderror</Text>
            <Text style={styles.rankItemTime}>40年44日4時間44分</Text>
            <Text style={styles.randItemDate}>4/4/4</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>9</Text>
            </View>
            <Text style={styles.rankItemName}>Colorfffffffinvaliderror</Text>
            <Text style={styles.rankItemTime}>40年44日4時間44分</Text>
            <Text style={styles.randItemDate}>4/4/4</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>10</Text>
            </View>
            <Text style={styles.rankItemName}>Colorfffffffinvaliderror</Text>
            <Text style={styles.rankItemTime}>40年44日4時間44分</Text>
            <Text style={styles.randItemDate}>4/4/4</Text>
          </View>

          <View style={styles.rankItem}>
            <View style={styles.rankItemRank}>
              <Text style={styles.ranItemRankTitle}>11</Text>
            </View>
            <Text style={styles.rankItemName}>Colorfffffffinvaliderror</Text>
            <Text style={styles.rankItemTime}>40年44日4時間44分</Text>
            <Text style={styles.randItemDate}>4/4/4</Text>
          </View>

        </ScrollView>

      </View>

      <RankButton>ランキング</RankButton>

      <RankButton style={{
        right: 15,
        top: 35,
        botton: 'none',
        opacity: 0.5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }}
      >
        En/Ja
      </RankButton>

      <RankButton style={{ bottom: 90 }}>マイページ</RankButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rankMainPage: {
    marginHorizontal: 15,
  },
  rankBar: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 3,
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  rankBarRank: {
    width: 40,
    marginRight: 10,
  },
  rankBarName: {
    width: 80,
    marginRight: 10,
  },
  rankBarTime: {
    width: 100,
    marginRight: 10,
  },
  randBarDate: {
    width: 90,
    position: 'absolute',
    right: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  rankItem: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  rankItemRank: {
    width: 40,
    marginRight: 10,
    alignItems: 'center',
  },
  ranItemRankTitle: {
  },
  rankItemName: {
    width: 80,
    marginRight: 10,
  },
  rankItemTime: {
    width: 100,
    marginRight: 10,
  },
  randItemDate: {
    width: 90,
    position: 'absolute',
    right: 5,
  },

});
