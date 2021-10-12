import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
// import { getAnalytics } from 'firebase/analytics';

// import CountUpExample from './src/components/CountUpExample';

import GamePageScreen from './src/screens/GamePageScreen';
import RankScreen from './src/screens/RankScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import EngGamePageScreen from './src/screens/EngGamePageScreen';

import { firebaseConfig } from './env';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#E07272' },
          headerTitleStyle: { color: 'white' },
          headerTitle: '御暇潰死',
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="GamePage" component={GamePageScreen} />
        <Stack.Screen name="Ranking" component={RankScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="EngGamePage" component={EngGamePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
