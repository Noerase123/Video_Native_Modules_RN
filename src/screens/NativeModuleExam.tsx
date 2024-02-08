import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeLocation } from '../components';

export function NativeModuleExam() {
  const navigate: any = useNavigation();

  useEffect(() => {
    navigate.setOptions({
      headerTitle: 'Native Module Exam'
    })
  }, []);

  return (
    <View style={styles.mainContainer}>
      <NativeLocation />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  menuBtn: {
    marginLeft: 10,
  },
});
