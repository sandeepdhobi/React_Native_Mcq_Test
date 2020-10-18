import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { selectAnswer } from '../reducer';

export class RadioButtons extends Component {
  state = {
    value: null,
  };

  render() {
    const {options, correctAnswerId, selectAnswer, Answered} = this.props;
    const {value} = this.state;
    console.log(Answered,correctAnswerId,"me is answer");

    return (
      <View>
        {options.map((item,index) => {
          return (
            <TouchableOpacity
              activeOpacity={this.state.value ? 1 : 0.5}
              onPress={() => {
                if(!Answered){
                  selectAnswer(item.id);
                  this.setState({
                  value: item.id,
                });
                }
              }}>
              <View key={item.id} style={styles.buttonContainer}>
                <View style={{...styles.circle, backgroundColor: Answered && item.id == correctAnswerId ? '#00bd7d': Answered == item.id ? '#f27150' : '#fff'}}>
                   <Text>{String.fromCharCode(97 + index).toUpperCase()}</Text>
                </View>
                <View style={{...styles.textBox}}>
                  <Text style={{...styles.textStyle,color: Answered && item.id == correctAnswerId ? '#00bd7d': Answered == item.id ? '#f27150' : '#000'}}>{item.text}</Text>
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

const mapStateToProps = (state, _currentProps) => {
  console.log(state,"hey im state");
  const Answered = state.Answered[state.currentQuestionId] && state.Answered[state.currentQuestionId].answerId
  return {
    correctAnswerId: state.Questions[state.currentQuestionId].correctAnswerId,
    Answered: Answered,
  };
};

export default connect(mapStateToProps, { selectAnswer })(RadioButtons);
