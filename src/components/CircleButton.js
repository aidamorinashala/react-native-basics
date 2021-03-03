import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function CircleButton() {
  return (
    <TouchableOpacity style={styles.circleBtn}>
      <Text style={styles.btnText}>Press me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleBtn: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#eab8b2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000735',
  },
});
