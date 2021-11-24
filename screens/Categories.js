import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const Categories = (props) => {

    return(
        <View style={styles.container}>
            <Text>Categories</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('Proudect',{name:'ron',email:'rongmail@.com'})}}>
                <Text>Go to proudect</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{margin:30,width:130,backgroundColor:'#ff0000'}
  });

  export default Categories;
