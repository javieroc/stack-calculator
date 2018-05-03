import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from './Button';
import { pressNum } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#70A649',
    backgroundColor: '#485058',
    textAlign: 'right',
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#70A649',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#70A649',
  },
});

const App = ({ currentNumber, pressNumDispatch }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>{currentNumber}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" />
        <Button text="pow" />
        <Button text="swap" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={pressNumDispatch} />
        <Button text="8" onPress={pressNumDispatch} />
        <Button text="9" onPress={pressNumDispatch} />
        <Button text="X" />
      </View>
      <View style={styles.row}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" />
        <Button text="." />
        <Button text="enter" special />
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  currentNumber: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    pressNumDispatch: pressNum,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
