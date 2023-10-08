import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useRef } from 'react';
import {Video} from 'expo-av';
import styles from '../styles';
import { useIsFocused } from '@react-navigation/native';

const SearchScreen = ({ route, navigation }) => {
  const { url } = route.params;
  const screenIsFocused = useIsFocused();
  const video = useRef(null);
  const handleLoad = () => {
    console.log(url)
    fetch('http://192.168.68.57:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        media: url,
      })
    })
    .then((response) => response.json()).then((json) => {
      console.log(json);
      navigation.navigate('Result', {json})
    }).catch((error) => {
      console.error(error);
      console.log("woop woop");
    });
  }
  return (
    <View style={styles.flexContainer}>
      <Video 
        source={{uri: url}} 
        ref={video}                            
        onBuffer={this.onBuffer}                  // Callback when remote video is buffering
        onError={this.videoError}
        shouldPlay = {screenIsFocused}       // Callback when video cannot be loaded
        useNativeControls
        volume={1.0}
        onLoad={handleLoad}
        style={styles.video}
        isMuted={false}
        isLooping
      />
      <Text style={styles.title}>
        Shazaming your song...
      </Text>
      <ActivityIndicator animating={true} size="large" color="#0000ff" />
    </View>
  );
};

export default SearchScreen;