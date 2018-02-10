import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Background from '../easy-masjid/assets/Malaysia.jpg';

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground style={styles.container} source={Background}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.textLogo}>EasyMasjid</Text>
              <View style={styles.buttonView}>
                <Button style={styles.button} block dark>
                  <Text style={styles.buttonText}>LOGIN</Text>
                </Button>
                <Button style={styles.signup} block>
                  <Text style={styles.buttonText}>SIGNUP</Text>
                </Button>
                <Button style={styles.button} full danger>
                  <Text style={styles.buttonText}>ABOUT</Text>
                </Button>
              </View>
            </View>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,89,0.6)',
    alignItems: 'center'
  },
  textLogo: {
    color: 'white',
    fontSize: 50,
    marginBottom: 15
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginTop: 15,
  },
  signup: {
    backgroundColor: '#CB92CB',
    marginTop: 15,
  },
  buttonText: {
    color: 'white'
  },
  buttonView: {
    width: '90%'
  }
});
