import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from './Button';
import { pressNum, enter, operation, clear, swap } from './actions';

const baseNumber = {
  backgroundColor: '#485058',
  textAlign: 'right',
  padding: 8,
  fontSize: 24,
  fontWeight: 'bold',
  borderBottomWidth: 1,
  borderColor: '#70A649',
};

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
  append: {
    color: '#fff',
    ...baseNumber,
  },
  replace: {
    color: '#70A649',
    ...baseNumber,
  },
  push: {
    color: '#2E71E5',
    ...baseNumber,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#70A649',
  },
});

const App = ({
  calculatorState: { stack, inputState },
  pressNumDispatch,
  enterAction,
  operationAction,
  clearAction,
  swapAction,
}) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.append}>{stack[3] || 0}</Text>
      <Text style={styles.append}>{stack[2] || 0}</Text>
      <Text style={styles.append}>{stack[1] || 0}</Text>
      <Text style={styles[inputState]}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" onPress={clearAction} />
        <Button text="pow" onPress={operationAction} />
        <Button text="swap" onPress={swapAction} />
        <Button text="/" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={pressNumDispatch} />
        <Button text="8" onPress={pressNumDispatch} />
        <Button text="9" onPress={pressNumDispatch} />
        <Button text="X" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={pressNumDispatch} />
        <Button text="5" onPress={pressNumDispatch} />
        <Button text="6" onPress={pressNumDispatch} />
        <Button text="-" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={pressNumDispatch} />
        <Button text="2" onPress={pressNumDispatch} />
        <Button text="3" onPress={pressNumDispatch} />
        <Button text="+" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumDispatch} />
        <Button text="." onPress={pressNumDispatch} />
        <Button text="enter" onPress={enterAction} special />
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  calculatorState: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    pressNumDispatch: pressNum,
    enterAction: enter,
    operationAction: operation,
    clearAction: clear,
    swapAction: swap,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
