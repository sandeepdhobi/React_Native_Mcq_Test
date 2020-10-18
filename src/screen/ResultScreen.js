import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {reset} from '../reducer';

class ResultScreen extends React.Component {
  render() {
    const {Questions, Answered, correctAnswers,inCorrectAnswer} = this.props;

    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          vertical
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <View
                  style={{
                    width: '100%',
                    marginVertical: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontStyle: '600'}}>
                    Chapter Name Practice Test
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: '#fda',
                    borderRadius: 6,
                    padding: 20,
                  }}>
                  <View
                    style={{
                      marginVertical: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text>Total no. of Questions</Text>
                    </View>
                    <View
                      style={{
                        
                        height: 20,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        backgroundColor: '#e7e7f6',
                      }}>
                      <Text>{Object.keys(Questions).length}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text>Correct</Text>
                    </View>
                    <View
                      style={{
                        
                        height: 20,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        backgroundColor: '#e7e',
                      }}>
                      <Text>{correctAnswers}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text>Incorrect</Text>
                    </View>
                    <View
                      style={{
                        
                        height: 20,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        backgroundColor: '#fa09',
                      }}>
                      <Text>{inCorrectAnswer}</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.triangle} />
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={
                  Object.keys(Questions).length != Object.keys(Answered).length
                    ? 1
                    : 0.5
                }
                onPress={() => {
                  if (
                    Object.keys(Questions).length ==
                    Object.keys(Answered).length
                  ) {
                    this.props.reset();
                    this.props.navigation.navigate('Home');
                  }
                }}
                style={{
                  ...styles.button,
                  backgroundColor:
                    Object.keys(Questions).length ==
                    Object.keys(Answered).length
                      ? '#4e88e7'
                      : '#afafaf',
                }}>
                <Text>{'Retake'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
                style={{...styles.button, backgroundColor: '#4e88e7'}}>
                <Text>{'Practice Test'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  triangle: {
    width:20,
    borderTopWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 0,
    borderLeftWidth: 20,
    borderTopColor: '#fda',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  button: {
    width: '100%',
    backgroundColor: '#4e88e7',
    padding: 6,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
  },
});

const mapStateToProps = (state, _currentProps) => {
    let counter = 0;
    let inCorrectAnswer = 0;
    Object.keys(state.Answered).map(item => {
        if(state.Answered[item].answerId == state.Questions[item].correctAnswerId){
            counter = counter + 1;
        }
        else{
            inCorrectAnswer = inCorrectAnswer + 1;
        }
    })
  return {
    Questions: state.Questions,
    Answered: state.Answered,
    correctAnswers: counter,
    inCorrectAnswer: inCorrectAnswer,
  };
};

export default connect(
  mapStateToProps,
  {reset},
)(ResultScreen);
