import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="bg-pink-50 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-3xl font-mono">Hello, world!</Text>
          <StatusBar style="auto" />
          <Link href="/home" style={{ color: 'blue' }}>
            Go to Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
