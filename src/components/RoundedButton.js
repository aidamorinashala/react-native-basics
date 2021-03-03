import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function RoundedButton() {
  return (
    <TouchableOpacity style={styles.circleBtn}>
      <Text style={styles.btnText}>Press me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleBtn: {
    width: 180,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#239c4c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
