/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UIExamScreen, NativeModuleExam } from './src/screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='UIExamScreen'>
        <Drawer.Screen name="UIExamScreen" component={UIExamScreen} />
        <Drawer.Screen name="NativeModuleExam" component={NativeModuleExam} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
