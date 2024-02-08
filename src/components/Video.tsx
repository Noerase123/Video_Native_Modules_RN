import React from "react";
import {
  NativeModules,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { PlayButtonIcon } from "../assets";

const { VideoPlayerBridge } = NativeModules;
const { width } = Dimensions.get('screen');

export const VideoPlayer = () => {

  const handlePlayVideo = () => {
    const videoURL = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
    VideoPlayerBridge.renderVideoFromUrl(videoURL);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePlayVideo}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/thumbnail.png')} resizeMode="contain" style={styles.image} />
          </View>
          <View style={styles.playBtn}>
            <PlayButtonIcon />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    height: 200
  },
  playBtn: {
    position: 'absolute',
    left: width - 85,
    top: 60
  }
});
