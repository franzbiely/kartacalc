import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  const [arabic, setArabic] = useState(true);

  const switchType = () => {
    setArabic(!arabic);
  };

  const handleButtonPress = (text: string) => {
    if (text === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (text === 'C') {
      setDisplay('');
      setResult('');
    } else if (text === 'CE') {
      setDisplay(display.slice(0, -1)); // Remove last character
    } else {
      setDisplay(display + text);
    }
  };

  const buttons = [
    'C', // Clear all
    'CE', // Clear last character
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={switchType} style={styles.buttonSwitch}>
          <Text style={styles.buttonText}>{arabic ? 'arabic' : 'roman'}</Text>
        </TouchableOpacity>
        {buttons.map(button => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleButtonPress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
        <Button
          title={arabic ? '1' : 'I'}
          onPress={() => handleButtonPress('I')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f2f2f2',
  },
  display: {
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
    color: '#000',
  },
  result: {
    fontSize: 48,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#666',
  },
  buttonSwitch: {
    width: '50%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#666',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});