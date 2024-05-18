import { View, Text, Image, ImageURISource } from 'react-native'
import { Tabs } from 'expo-router'


type TabIconProps = {
    icon: ImageURISource
    color: string
    name: string
    focused: boolean
};

const TabIcon = ( props : TabIconProps ) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image source={props.icon} resizeMode='contain' tintColor={props.color} className='w-6 h-6'/>
            <Text className={`${props.focused ? 'from-teal-500' : 'from-teal-950'} text-xs`} 
                style={{ color: props.color }}>
                {props.name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    const tabsInfo: { tabName: string, name: string, iconResource: ImageURISource } [] = [
        {
            tabName: 'home',
            name: 'Home',
            iconResource:  { uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }
        },
        {
            tabName: 'memory',
            name: 'Memory',
            iconResource:  { uri: 'https://cdn.iconscout.com/icon/free/png-256/free-instagram-reel-4560268-3789542.png' }
        },
        {
            tabName: 'createEvent',
            name: 'New Event',
            iconResource:  { uri: 'https://static.thenounproject.com/png/2318221-200.png' }
        },
        {
            tabName: 'notification',
            name: 'Notification',
            iconResource:  { uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png' }
        },
        {
            tabName: 'profile',
            name: 'Profile',
            iconResource:  { uri: 'https://cdn-icons-png.freepik.com/256/552/552848.png?semt=ais_hybrid' }
        }
    ]
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false, // Hide labels
                tabBarActiveTintColor: '#FFA001', // Active tab color
                tabBarInactiveTintColor: '#CDCDE0', // Inactive tab color
                tabBarStyle: {
                    backgroundColor: '#161622', // Tab bar background
                    borderTopWidth: 1,  // Top border
                    borderTopColor: '#232533', // Top border color
                    height: 84, // Tab bar height
                }
            }}
        >
            {tabsInfo.map((tab) => (
                <Tabs.Screen name={tab.tabName} options={{
                    title: tab.tabName,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={tab.iconResource} color={color} name={tab.name} focused={focused}/>
                    )
                }}/>
            ))}
        </Tabs>
    </>
  )
}

export default TabsLayout