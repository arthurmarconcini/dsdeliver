import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Home() {

    const handleOnPress = () => {
        
    }
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/amico.png")} />
        <Text style={styles.title}>
          Acompanhe os pedidos {"\n"}e entregue no prazo!
        </Text>
        <Text style={styles.subTitle}>
          Receba todos os pedidos do seu {"\n"}restaurante na palma da sua mão
        </Text>
      </View>
      <View style ={styles.footer}>
        <RectButton style={styles.button}>
            <Text style={styles.buttonText}>VER PEDIDOS</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

    container: {
        marginTop: '20%',
        alignItems: 'center'
      },
      title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
      },
      subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
      },
      footer: {
        marginTop: '5%',
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#fcd100',
        flexDirection: 'row',
        borderRadius: 10, 
        marginTop: '5%'   
      },

      buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        letterSpacing: -0.24
    }

});