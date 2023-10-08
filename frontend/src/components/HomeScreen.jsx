import { Formik } from 'formik';
import { useState } from 'react';
import { View, StyleSheet, Button, ActivityIndicator, Modal, Text } from 'react-native';
import FormikTextInput from './FormikTextInput';
import styles from '../styles';
import {Video} from 'expo-av';



const URLForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput style={styles.textInput} name="url" placeholder="Paste reel url here" />
      <Button style={styles.button} onPress={onSubmit} title="Search" />
    </View>
  );
};

const parseUrl = (url) => {
  const splitUrl = url.split('/');
  try {
    const restCall = "https://instagram.com/p/" + splitUrl[splitUrl.length - 2] + "/?__a=1&__d=dis";
    console.log(restCall)
    return fetch(restCall, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      })
      .then((response) => response.json()).then((json) => {
        console.log(json);
        return json["graphql"]["shortcode_media"]["video_url"];
      }).catch((error) => {
        console.error(error);
        return null;
      });  // console.log(media);
  }catch (error){
    console.error(error);
    return null;
  }

  // console.log(restCall);

};

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const onSubmit = (values, {resetForm}) => {
    console.log(values);
    setLoading(true);
    parseUrl(values.url).then((media) => {
      if(media == null) {
        alert("Invalid URL");
        setLoading(false)
        return;
      }
      console.log(media);
      resetForm();
      navigation.navigate('Search', { url: media });
      setLoading(false);
    })
    // setLoading(false);
  };
  return (
    <View style={styles.flexContainer}>
      <Modal
        transparent={true}
        visible={isLoading}
        animationType="fade"
        >
        <View style={styles.flexContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Loading Reel</Text>
            <ActivityIndicator animating={true} size="large" />
          </View>
        </View>
      </Modal>
      <View style={styles.flexContainer}>
        <Formik initialValues={{url: ''}} onSubmit={onSubmit}>
          {({ handleSubmit }) => <URLForm onSubmit={handleSubmit} />}
        </Formik>
      </View>
    </View>
  );
  
};

export default HomeScreen;
