import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon, TabBarMaterialIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tables/weight"
        options={{
          title: 'Weight',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'scale' : 'scale-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tables/height"
        options={{
          title: 'Height',
          tabBarIcon: ({ color }) => (
            <TabBarMaterialIcon name='human-male-height' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
