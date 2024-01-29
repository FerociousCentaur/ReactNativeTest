// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {StyleSheet,View,Text,TextInput,StatusBar,SafeAreaView} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,  },
    input:{
      height:40,
      margin:12,
      padding:10,
      borderWidth:1
    }
});