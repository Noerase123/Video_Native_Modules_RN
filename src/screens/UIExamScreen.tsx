import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VideoPlayer } from "../components";

export function UIExamScreen() {
  const navigate: any = useNavigation();

  useEffect(() => {
    navigate.setOptions({
      headerTitle: "UI Exam"
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <VideoPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  menuBtn: {
    marginLeft: 10,
  },
});
