import React, {Fragment} from 'react';
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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RadioButton from './RadioButton'

const App = () => {
  const Questions = [
    {
      id: '01',
      question: 'who is prime minister of india ?',
      correctAnswerId: '1234',
      options: [
        {
          id: '1234',
          text: 'Most High Pay',
        },
        {
          id: '345',
          text: 'Most Perfomance',
        },
        {
          id: '987',
          text: 'A - Z',
        },
        {
          id: '2345',
          text: 'Z - A',
        },
      ],
    },
    {
      id: '02',
      question: 'who is chief minister of Manarashtra ?',
      correctAnswerId: '1234',
      options: [
        {
          id: '1234',
          text: 'Most High Pay',
        },
        {
          id: '345',
          text: 'Most Perfomance',
        },
        {
          id: '987',
          text: 'A - Z',
        },
        {
          id: '2345',
          text: 'Z - A',
        },
      ],
    },
    {
      id: '03',
      question: 'who is Goverener of india ?',
      correctAnswerId: '1234',
      options: [
        {
          id: '1234',
          text: 'Most High Pay',
        },
        {
          id: '345',
          text: 'Most Perfomance',
        },
        {
          id: '987',
          text: 'A - Z',
        },
        {
          id: '2345',
          text: 'Z - A',
        },
      ],
    },
  ];
  const options = [
    {
        key: 'pay',
        text: 'Most High Pay',
    },
    {
        key: 'performance',
        text: 'Most Perfomance',
    },
    {
        key: 'aToZ',
        text: 'A - Z',
    },
    {
        key: 'zToA',
        text: 'Z - A',
    },
];
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
                <View style={styles.questionNumber}><Text>01</Text></View>
                <View style={styles.question}>
                  <Text>
                    Step sdfjsfhsdfhsdhaf sdafhsadfh safsdhafhsdahfhksda
                    fsafsd fsdjfjsdaf sfsd fsda fsd fsdjfl saf sdfjs flsadfls
                    One
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionContainer}>
            <RadioButton options={options} />
            <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center",borderRadius:6,backgroundColor:"#fff2df",padding:6,paddingHorizontal:20,}}>
              <Image source={require('./assets/icons8-disappointed-face-96.png')} style={{ width: 50, height: 50 }} resizeMode="contain" />
              <Text>Ooops, I'm so much sad.</Text>
            </View>

              <View style={{backgroundColor:'#c9f3ff',paddingHorizontal:20,paddingVertical:15,borderRadius:5,}}>
                <View style={{display:'flex',flexDirection:'row',marginVertical:5,alignItems:'center'}}>
                  <Image source={require('./assets/icons8-information-100.png')} style={{ width: 30, height: 30 }} resizeMode="contain" />
                  <View style={{marginLeft:8}}><Text style={{fontSize:16,fontWeight:'600'}}>Explanation</Text></View>
                </View>
                <View>
                  <Text>
                    Step sdfjsfhsdfhsdhaf sdafhsadfh safsdhafhsdahfhksda
                    fsafsd fsdjfjsdaf sfsd fsda fsd fsdjfl saf sdfjs flsadfls
                    One
                  </Text>
                </View>
              </View>


            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity  onPress={() => { alert("sfsd"); }} style={styles.button} >
              <Text>{"Next"}</Text>
            </TouchableOpacity>
            </View>

            <View style={{display:"flex",justifyContent:"center"}}>
              <View style={{width:"100%",backgroundColor:"#fda",borderRadius:6,padding:20}}>
              <Text>heafasfhashfl;asfasjfjsd fafha fasfas fsa fasd fjds fdhf lsdf asdfhiie m af afafafa afafa</Text>
              </View>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <View style={styles.triangle}>
                  </View>
                </View>
            </View>

            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  triangle: {
    width:20,
    borderTopWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 0,
    borderLeftWidth: 20,
    borderTopColor: "#fda",
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  button: {
    backgroundColor: '#4e88e7',
    width:'100%',
    padding:6,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  questionSection: {
    display: "flex",
    flexDirection:'row',
    justifyContent:"flex-start",
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },
  questionNumber: {
    // display:"flex",
    // justifyContent: "center",
    // alignItems:"center",
    backgroundColor: '#090',
    borderRadius:2,
    paddingHorizontal:4,
    borderBottomRightRadius:8,
  },
  question: {
    // display: 'flex',
    // justifyContent : 'flex-start',
    
  }
});

export default App;
