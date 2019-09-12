import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import TypeBuild from '../components/Type'
import Dimensions from '../components/Dimensions'
import Cost from '../components/Cost'
// import Debt from '../components/Debt'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      type: '',
      width: 0,
      length: 0,
      floors: 1,
      grossSF: 0,
      netSF: 0,
      landCost:0,
      buildSF: 0,
      totalCost: 0,

    }
    this.onChecked=this.onChecked.bind(this)
    this.isChecked=this.isChecked.bind(this)
    this.changeDimensions=this.changeDimensions.bind(this)
    this.grossCalc=this.grossCalc.bind(this)
    this.costChange=this.costChange.bind(this)
  }

onChecked(value) { 
  this.setState({type:value})
}

isChecked(title) {
  if(title === this.state.type) {
    return true
  } else {
    return false
  }
}

changeDimensions(obj) {
  this.setState(obj)
  setTimeout(() => {
    let gross = this.grossCalc()
  this.setState({grossSF:gross})
  });
  console.log(this.state.grossSF)
}

grossCalc() {
  let gross = this.state.width * this.state.length * this.state.floors
  return gross
}

costChange(obj) {
this.setState(obj)
}




render () {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {/* IMAGE OF APPP */}
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        {/* TYPE OF BUILD */}
        <TypeBuild 
        onChecked={this.onChecked} 
        isChecked={this.isChecked}
        />

        {/* DIMENSIONS */}
        <Dimensions  
        changeDimensions={this.changeDimensions}
        grossSF={this.state.grossSF}

        />

        {/* COST */}
        <Cost 
        costChange={this.costChange}/>

        {/* DEBT */}
        {/* <Debt /> */}

        {/* RENT/SALES INFO */}





      </ScrollView>

    </View>
  );
}
}

export default Home;

Home.navigationOptions = {
  header: null,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
