import React, {useState} from 'react';
import {Button, TextInput, Text, View, StyleSheet} from 'react-native';

const Home = ({onSelect}) => {
  const [num, setnum] = useState('');
  return (
    <>
      <View style={styles.viewSection}>
        <Text style={styles.headline}>Guess My Number</Text>
        <View>
          <Text style={styles.inputMessage}>Enter a Number</Text>
          <TextInput
            style={styles.input}
            value={num}
            onChangeText={text => setnum(text)}
            placeholder="Enter Number here..."
            keyboardType="numeric"
          />
          <View style={styles.buttons}>
            <Button
              title="Reset"
              color="#841584"
            />
            <Button
              onPress={()=>{num==0?alert('Please enter greater than 1 value!') :onSelect(num)}}
              title="Confirm"
              color="#841584"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 20,
    borderWidth: 1,
    padding: 15,
    borderColor: 'yellow',
    marginBottom: 50,
    color:'yellow'
  },
  inputMessage: {
    textAlign: 'center',
    fontSize: 20,
    color:'white'
  },
  input: {
    margin: 23,
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 40,
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: 20,
    fontSize: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
