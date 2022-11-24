import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Attends = ({info}) => {
  return (
    <>
      <View style={styles.attends}>
        {info.map((v, i) => {
          return (
            <View style={styles.msgView} key={i}>
              <Text>#{i + 1}</Text>
              <Text>Opponent's Guess {v}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  attends: {
    marginTop: 20,
  },
  msgView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    borderWidth: 0.5,
    borderColor: 'whtie',
    padding: 18,
    borderRadius: 12,
  },
});

export default Attends;
