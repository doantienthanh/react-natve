import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import NumberButton from './NumberButton';
import Calculator from './Calculator';
const App = () => {
  const [output, setOutput] = useState('0');
  const getOutput = (x) => {
    let data = output;
    if (data === '0') {
      data = '';
      data += x;
    } else {
      data += x;
    }
    setOutput(data);
  };
  const evil = (data) => {
    return new Function('return ' + data)();
  };
  const calculators = () => {
    let data = output;
    setOutput(evil(data));
  };
  const clear = () => {
    setOutput(0);
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.textResult}>{output}</Text>
      </View>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.btnClear} onPress={() => clear()}>
          <Text style={styles.text}>Clear</Text>
        </TouchableOpacity>
        <Calculator title="+" handle={() => getOutput('+')} />
      </View>
      <View style={styles.row2}>
        {/* Row2 */}
        <NumberButton title="9" handle={() => getOutput('9')} />
        <NumberButton title="8" handle={() => getOutput('8')} />
        <NumberButton title="7" handle={() => getOutput('7')} />
        <Calculator title="-" handle={() => getOutput('-')} />
      </View>
      <View style={styles.row2}>
        <NumberButton title="6" handle={() => getOutput('6')} />
        <NumberButton title="5" handle={() => getOutput('5')} />
        <NumberButton title="4" handle={() => getOutput('4')} />
        <Calculator title="X" handle={() => getOutput('*')} />
      </View>
      <View style={styles.row2}>
        {/* Row 4 */}
        <NumberButton title="3" handle={() => getOutput('3')} />
        <NumberButton title="2" handle={() => getOutput('2')} />
        <NumberButton title="1" handle={() => getOutput('1')} />
        <Calculator title="/" handle={() => getOutput('/')} />
      </View>
      <View style={styles.row2}>
        <NumberButton title="%" handle={() => getOutput('%')} />
        <NumberButton title="0" handle={() => getOutput('0')} />
        <NumberButton title="." handle={() => getOutput('.')} />
        <TouchableOpacity style={styles.btnPlus} onPress={() => calculators()}>
          <Text style={styles.text1}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 50,
    borderColor: 'black',
    height: 600,
  },
  text: {
    fontFamily: 'vincHand',
    fontSize: 30,
  },
  textResult: {
    fontFamily: 'vincHand',
    fontSize: 40,
    color: 'white',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 20,
  },
  text1: {
    fontFamily: 'vincHand',
    fontSize: 30,
    color: 'white',
    textAlign: 'right',
    marginRight: 10,
  },
  btnPlus: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    backgroundColor: '#BA6F6F',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  result: {
    backgroundColor: 'black',
    height: 100,
    fontSize: 30,
    color: '#ff00ff',
  },
  row1: {
    width: 500,
    height: 80,
    flexDirection: 'row',
  },
  btnClear: {
    textAlign: 'center',
    width: 210,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: '#BA6F6F',
    alignItems: 'center',
    fontFamily: 'vincHand',
    fontSize: 30,
  },
  row2: {
    flexDirection: 'row',
  },
});

export default App;
