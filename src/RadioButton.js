import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class RadioButtons extends Component {
  state = {
    value: null,
  };

  render() {
    const {options} = this.props;
    const {value} = this.state;

    return (
      <View>
        {options.map((item,index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  value: item.key,
                });
              }}>
              <View key={item.key} style={styles.buttonContainer}>
                <View style={[styles.circle, value === item.key ? styles.answered : styles.unanswered]}>
                   <Text>{String.fromCharCode(97 + index).toUpperCase()}</Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.textStyle}>{item.text}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  textBox:{
    paddingLeft:30
  },
  textStyle: {
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 20,
    borderWidth: 1,
    padding:4,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answered: {
    backgroundColor: '#d5fbca',
  },
});
