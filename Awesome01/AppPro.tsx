import React from 'react';

import {View, StyleSheet, Text, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Mayank Sahu
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // color: "#1a1a1a",
    // backgroundColor: "#fff"
  },
  whiteText: {
    color: 'red',
  },

  darkText: {
    color: '#000000',
  },
});

export default AppPro;
