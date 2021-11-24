import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/Categories';
import proudectScreen from './screens/Products';
import proudectdetailsScreen from './screens/productdetails';

const RonStackNavigator= createStackNavigator();

export const RonNav = () =>{
    return (
        <RonStackNavigator.Navigator>
            <RonStackNavigator.Screen name='Categories' component={CategoriesScreen}/>
            <RonStackNavigator.Screen name='Proudect' component={proudectScreen} />
            <RonStackNavigator.Screen name='Proudectdetails' component={proudectdetailsScreen} />
        </RonStackNavigator.Navigator>
    )
}