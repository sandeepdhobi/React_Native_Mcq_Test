import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {nextQuestion} from '../reducer';
import RadioButton from './RadioButton';

class Question extends React.Component {
  static propTypes = {
    currentQuestionId: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps(prevProps, nextProps) {}

  render() {
    const {
      nextQuestion,
      Questions,
      currentQuestionId,
      correctAnswerId,
      Answered,
    } = this.props;
    const currentQuestion = Questions[currentQuestionId];
    const options = Questions[currentQuestionId].options;
    console.log(this.props, ' yo im props');

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.questionSection}>
                  <View style={styles.questionNumber}>
                    <Text>{currentQuestion.id}</Text>
                  </View>
                  <View style={styles.question}>
                    <Text>{currentQuestion.question}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <RadioButton options={options} />
                {Answered && (
                  <View
                    style={{
                      backgroundColor: '#c9f3ff',
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                      borderRadius: 5,
                      marginVertical: 20,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginVertical: 5,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../assets/icons8-information-100.png')}
                        style={{width: 30, height: 30}}
                        resizeMode="contain"
                      />
                      <View style={{marginLeft: 8}}>
                        <Text style={{fontSize: 16, fontWeight: '600'}}>
                          Explanation
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        This is Explanation Text.Lorem isum Dollar sit.Lorem
                        isum Dollar sit.Lorem isum Dollar sit.Lorem isum Dollar
                        sit
                      </Text>
                    </View>
                  </View>
                )}
                {Answered && (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      borderRadius: 6,
                      backgroundColor: '#fff2df',
                      padding: 6,
                      paddingHorizontal: 20,
                    }}>
                    {correctAnswerId != Answered && (
                      <Image
                        source={require('../assets/icons8-disappointed-face-96.png')}
                        style={{width: 50, height: 50}}
                        resizeMode="contain"
                      />
                    )}
                    {correctAnswerId == Answered && (
                      <Image
                        source={require('../assets/icons8-smiling-96.png')}
                        style={{width: 50, height: 50}}
                        resizeMode="contain"
                      />
                    )}
                    <Text style={{marginLeft:30}}>
                      {correctAnswerId != Answered
                        ? `Ooops, That's wrong. You can get next right.`
                        : `Waah paaji, tussi great ho.`}
                    </Text>
                  </View>
                )}
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    activeOpacity={!Answered ? 1 : 0.5}
                    onPress={() => {
                      if (currentQuestion.nextQuestionId && Answered) {
                        nextQuestion(currentQuestion.nextQuestionId);
                      } else if(Answered) {
                        this.props.navigation.navigate('Dashboard');
                      }
                    }}
                    style={{...styles.button, backgroundColor: Answered ? '#4e88e7' : '#afafaf'}}>
                    <Text>
                      {currentQuestion.nextQuestionId ? 'Next' : 'Finish'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
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
  button: {
    width: '100%',
    padding: 6,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  questionSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  questionNumber: {
    backgroundColor: '#090',
    borderRadius: 2,
    paddingHorizontal: 4,
    borderBottomRightRadius: 8,
    marginRight:8,
  },
  question: {},
});

const mapStateToProps = (state, _currentProps) => {
  console.log(state, 'hey im state');
  const Answered =
    state.Answered[state.currentQuestionId] &&
    state.Answered[state.currentQuestionId].answerId;
  return {
    currentQuestionId: state.currentQuestionId,
    Questions: state.Questions,
    correctAnswerId: state.Questions[state.currentQuestionId].correctAnswerId,
    Answered: Answered,
  };
};

export default connect(
  mapStateToProps,
  {nextQuestion},
)(Question);
