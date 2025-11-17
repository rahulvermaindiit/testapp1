import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/app/DashboardScreen';
import PlanScreen from '../screens/app/PlanScreen';
import StatsScreen from '../screens/app/StatsScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import ExploreScreen from '../screens/app/ExploreScreen';
import { useTheme } from '../theme';

export type AppStackParamList = {
  Dashboard: undefined;
  Plan: undefined;
  Stats: undefined;
  Profile: undefined;
  Explore: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen
        name="Plan"
        component={PlanScreen}
        options={{ title: 'Plan' }}
      />
      <Stack.Screen
        name="Stats"
        component={StatsScreen}
        options={{ title: 'Stats' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: 'Explore Classes' }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

