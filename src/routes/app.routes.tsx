import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import { TabsRoutes } from './tabs.routes';
import { Dashboard } from '../screens/Dashboard';
import { AppointmentDetail } from '../screens/AppointmentDetail';
import { ProviderDetail } from '../screens/ProviderDetail';
import { AppointmentsCreated } from '../screens/AppointmentsCreated';
import { SplashScreen } from '../screens/SplashScreen';
import { Profile } from '@screens/Profile';

export function AppRoutes(){
  return(
      <Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Screen
          name="MainBottom"
          component={TabsRoutes}
        />
        <Screen
          name="Dashboard"
          component={Dashboard}
        />
        <Screen
          name="ProviderDetail"
          component={ProviderDetail}
        />
        <Screen
          name="AppointmentDetail"
          component={AppointmentDetail}
        />
        <Screen
          name="AppointmentsCreated"
          component={AppointmentsCreated}
        />
        <Screen
          name="Profile"
          component={Profile}
        />

      </Navigator>
  )
}