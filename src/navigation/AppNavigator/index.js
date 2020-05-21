import React from 'react';
import {AppRoutes} from 'enums';
import * as Screens from 'screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default (AppNavigator = props => (
  <Tab.Navigator {...props} initialRouteName={AppRoutes.HOME}>
    <Tab.Screen name={AppRoutes.HOME} component={Screens.HomeScreen} />
    <Tab.Screen name={AppRoutes.CAREERS} component={Screens.CareersScreen} />
    <Tab.Screen name={AppRoutes.ABOUT_US} component={Screens.AboutUsScreen} />
  </Tab.Navigator>
));
