import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const baseContainer = {
  backgroundColor: '#333A42',
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#70A649',
};

const baseText = {
  fontSize: 26,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
    ...baseContainer,
    backgroundColor: '#70A649',
  },
  text: {
    ...baseText,
    color: '#70A649',
  },
  specialText: {
    ...baseText,
    color: '#fff',
  },
});

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
