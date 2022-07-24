import {View, Text} from 'react-native';
import React from 'react';
import Phone from './components/Phone/Phone';
import styles from './App.style';

export default function App() {
  return (
    <View style={styles.container}>
      <Phone format="XXX-XXX-XX-XX" />
      <Phone format="(5XX) XXX-XX-XX" />
      <Phone format="(05XX) XXX-XX-XX" />
    </View>
  );
}
