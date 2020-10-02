import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

TaskManager.defineTask('demo-task', async () => {
  console.log('demo-task is running');
  return BackgroundFetch.Result.NewData;
});

BackgroundFetch.registerTaskAsync('demo-task', {
  minimumInterval: 60, // 1 min
  stopOnTerminate: false,
  startOnBoot: true,
})
  .then(() => alert('BackgroundFetch.registerTaskAsync success'))
  .catch(error => alert(`Error registerTaskAsync: ${error.message}`));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
