import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/parceria-logo.png')} />
              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fcd100',
    height: 115,
    paddingTop: 40,
    flexDirection: 'row', 
    justifyContent: 'center'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    
    color: '#FFFFFF'
  },

  logo: {
    width: 65,
    height: 65
  },
});