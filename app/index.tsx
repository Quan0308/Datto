import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-pink-50 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View>
          <ImageBackground
            source={require('../assets/images/onboarding.jpg')}
            className="h-full w-full flex items-center justify-end bg-cover bg-center"
          >
            <View className="py-14 px-4 w-full">
              <Text className="text-3xl font-bevietnamproSemiBold">Date together, let memories last forever</Text>
              <Text className="mt-2 text-sm font-bevietnamproRegular text-neutral-300 mb-8">
                Lorem ipsum dolor sit amet consectetur. Et porttitor accumsan proin arcu condimentum ut quisque integer
                nunc.{' '}
              </Text>
              <CustomButton title="Get Started" href="/sign-up" />
              <StatusBar style="auto" />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
