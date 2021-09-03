/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import OnBoard from './screens/OnBoardScreen/OnBoard';
import createAccount from './screens/Account/createAccount';



const Stack = createStackNavigator();



const App = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OnBoard'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />


        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />


        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />


        <Stack.Screen
          name="createAccount"
          component={createAccount}
          options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;
