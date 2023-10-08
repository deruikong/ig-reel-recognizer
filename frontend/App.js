// react native template
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Main from './src/components/Main';

const App = () => {
  return (
    <>
      {/* <NavigationContainer> */}
        <Main />
      {/* </NavigationCrontainer> */}
      <StatusBar style="auto" />
    </>
  );
}

export default App;