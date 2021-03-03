import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.homeView}>
      <View>
        <Text>Cygnianer redo att lära sig React Native - Basics!</Text>
      </View>
    </SafeAreaView>
  );
}

// TODO: ge Text componenten en stil och du kan byta ut texten till vad du vill att den ska vara.
// Just nu syns den knappt.
//Cygnis färgkoder om du vill använda några:
// mörkblå: #000735
// orange: #dd5928
// rosa: #eab8b2
// grön: #239c4c
// blå: #00b3b0

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: '#000735',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
