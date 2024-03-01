import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from 'screens/SignUpScreen';
import { SignInScreen } from 'screens/SignInScreen';
import { MAIN_STACK_ROUTE_NAMES } from 'navigation/routes';
import { RootStackParamList } from 'types';
import { DashboardScreen } from 'screens/DashboardScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_STACK_ROUTE_NAMES.SIGN_UP}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={MAIN_STACK_ROUTE_NAMES.SIGN_UP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={MAIN_STACK_ROUTE_NAMES.SIGN_IN}
        component={SignInScreen}
      />
      <Stack.Screen
        name={MAIN_STACK_ROUTE_NAMES.DASHBOARD}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
};
