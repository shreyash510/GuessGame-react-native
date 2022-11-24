import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Attends from './Attends';

let minNum = 1;
let maxNum = 100;
const info = [];

const PlaySection = ({number, goHome}) => {
  const [isWin, setIsWin] = useState(false);
  const initialGuess = generateRandomNumber(minNum, maxNum);
  const [random, setRandom] = useState(initialGuess);

  function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      setIsWin(true);      
      return generateRandomNumber(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const nextGuess = higher => {
    if (higher) {
      if (random > number) {
        alert('Wrong Choise!');
      } else {
        minNum = random;
        setRandom(generateRandomNumber(minNum, maxNum, number));
      }
    } else {
      if (random < number) {
        alert('Wrong Choise!');
      } else {
        maxNum = random;
        setRandom(generateRandomNumber(minNum, maxNum, number));
      }
    }
    info.push(random);
  };

  return (
    <>
      {isWin ? (
        <View style={styles.winTemplete}>
          <Text style={styles.winTxt}> Your Value is {number}</Text>
          <Text style={styles.winTxt}>You Win in {info.length} rounds</Text>
          <Button title='Play Again' onPress={()=> goHome(0)}/>
        </View>
      ) : (
        <View style={styles.viewSection}>
          <Text style={styles.headline}>Opponent's Guess</Text>
          <Text style={styles.input}>{random}</Text>
          <View style={styles.operations}>
            <Text style={styles.inputMessage}>Higher or Lower?</Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => nextGuess(true)}>
                <Text style={styles.btn}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => nextGuess(false)}>
                <Text style={styles.btn}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Attends info={info} />
        </View>
      )}
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
    padding: 15,
    color: 'yellow',
  },
  input: {
    color: 'white',
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 40,
    textAlign: 'center',
    borderColor: 'yellow',
    borderRadius: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputMessage: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button1: {
    paddingHorizontal: 30,
    // backgroundColor: 'purple',
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 20,
  },
  btn: {
    fontSize: 50,
    color: 'yellow',
  },
  operations: {
    marginVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 20,
  },
  winTemplete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winTxt: {
    fontSize: 20,
    color: 'white',
  },
});

export default PlaySection;
