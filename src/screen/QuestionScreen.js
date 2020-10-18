import React,{Component} from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import Question from '../component/Question';

export class QuestionScreen extends Component {
  render() {
    console.log(this.props,"yo im props in screen");
    return (
      <View>
        <Question navigation={this.props.navigation} />
      </View>
    );
  }
}

export default QuestionScreen;
