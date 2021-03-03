import React from 'react';
import {View, Button, StyleSheet, SafeAreaView} from 'react-native';
import CircleButton from '../components/CircleButton';
import RoundedButton from '../components/RoundedButton';

export default function Buttons() {
  return (
    <SafeAreaView style={styles.buttonsView}>
      <View style={styles.container}>
        <Button title="Press me" />
      </View>
      <View style={styles.containerCustom}>
        <CircleButton />
      </View>
      <View style={styles.containerCustom}>
        <RoundedButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    flex: 1,
  },
  containerCustom: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
