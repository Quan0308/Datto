import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-mono">Hello, world!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }}>
        Go to Home
      </Link>
    </View>
  );
}
