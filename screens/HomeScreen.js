import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react'
import axios from 'axios'
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
import Debt from '../components/Debt'


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
      costSF: 0,
      totalCost: 0,
      debtRatio: 0,
      debtAmt: 0,
      equityAmt:0,
      libor: 0,
      bps: 0,
      totalInt:0,
    }
    this.onChecked=this.onChecked.bind(this)
    this.isChecked=this.isChecked.bind(this)
    this.changeDimensions=this.changeDimensions.bind(this)
    this.grossCalc=this.grossCalc.bind(this)
    this.costChange=this.costChange.bind(this)
    this.debtCalc = this.debtCalc.bind(this)
    this.intCalc = this.intCalc.bind(this)
  }

componentDidMount() {
  axios.get('https://api.stlouisfed.org/fred/series/observations?series_id=USDONTD156N&api_key=18bb0a3811be85b540fd34517d6ec1d3&file_type=json&limit=1&date=2019-01-02&sort_order=desc')
  .then((response) => {
    
    let libor = parseFloat(response.data.observations[0].value.replace(/,/g, ".")
    ).toFixed(2);
    libor = Number(libor)
    this.setState({libor})
  })
  .catch(function (error) {
    console.log(error);
  });
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
  setTimeout(() => {
    let totalCost = this.state.landCost + (this.state.grossSF * this.state.costSF)
    this.setState({totalCost})
  })
}

debtCalc(obj) {
  this.setState(obj)
  setTimeout(() => {
    let equityAmt = this.state.totalCost * (1-(this.state.debtRatio/100))
    let debtAmt = this.state.totalCost - equityAmt
    this.setState({equityAmt, debtAmt})
    // this.setState({totalCost})
  })
}

intCalc(obj) {
  this.setState(obj)
  setTimeout(() => {
    let totalInt = this.state.libor + (this.state.bps/100)
    this.setState({totalInt})
  })
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
          costChange={this.costChange}
          totalCost={this.state.totalCost}
          totalLandCost={this.state.landCost}
        />

        {/* DEBT */}
        <Debt
        libor={this.state.libor}
        debtCalc={this.debtCalc}
        intCalc={this.intCalc}
        debtAmt={this.state.debtAmt}
        equityAmt={this.state.equityAmt}
        totalInt={this.state.totalInt}
        />
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
