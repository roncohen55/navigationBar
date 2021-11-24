import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const proudect = (props) => {
console.log('props:'+JSON.stringify(props))

    return(
        <View style={styles.container}>

            <Text>proudect</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('Proudectdetails')}}>
                <Text >Go to productdetails</Text>
                <Text>{props.route.params.name}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{margin:30,width:130,backgroundColor:'#ff0000'}
  });

  export default proudect;
