import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';

import { ITabItemProp, ITabInfo } from '@/interfaces';
import { IconProps } from '@/types';

const TabItem = (props: ITabItemProp) => {
  return (
    <View className="items-center justify-center gap-2">
      <props.iconComponent color={props.color} size={props.size} />
      <Text style={{ color: props.color }}>{props.title}</Text>
    </View>
  );
};

export default function TabsLayout() {
  const tabsInfo: ITabInfo[] = [
    {
      tabName: 'home',
      title: 'Home',
      component: (props: Partial<IconProps> | undefined) => (
        <Entypo name="home" size={props?.size} color={props?.color as string} />
      ),
    },
    {
      tabName: 'memory',
      title: 'Memory',
      component: (props: Partial<IconProps> | undefined) => (
        <MaterialIcons name="view-carousel" size={props?.size} color={props?.color as string} />
      ),
    },
    {
      tabName: 'createEvent',
      title: 'New Event',
      component: (props: Partial<IconProps> | undefined) => (
        <Entypo name="squared-plus" size={props?.size} color={props?.color as string} />
      ),
    },
    {
      tabName: 'notification',
      title: 'Notification',
      component: (props: Partial<IconProps> | undefined) => (
        <FontAwesome name="bell" size={props?.size} color={props?.color as string} />
      ),
    },
    {
      tabName: 'profile',
      title: 'Profile',
      component: (props: Partial<IconProps> | undefined) => (
        <Ionicons name="person" size={props?.size} color={props?.color as string} />
      ),
    },
  ];
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false, // Hide labels
          tabBarActiveTintColor: '#E26894', // Active tab color
          tabBarInactiveTintColor: '#CCCCCC', // Inactive tab color
          tabBarStyle: {
            borderTopWidth: 1, // Top border
            height: 100, // Tab bar height
          },
        }}
      >
        {tabsInfo.map((tab) => (
          <Tabs.Screen
            name={tab.tabName}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabItem
                  key={tab.title}
                  iconComponent={tab.component}
                  title={tab.title}
                  color={color}
                  focused={focused}
                  size={24}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
