// app/onboarding/welcome.tsx

import { router } from 'expo-router';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Welcome() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-[#F7F5F2]`}>
      {/* Main Content */}
      <View style={tw`items-center justify-center px-6`}>
        {/* Title */}
        <Text
          style={[
            tw`text-center font-semibold text-[#4E5F4A]`,
            {
              fontSize: 44,
              lineHeight: 52,
            },
          ]}
        >
          Make better{'\n'}choices.
        </Text>

        {/* Subtitle */}
        <Text
          style={[
            tw`text-center text-[#6F776D] mt-4`,
            {
              fontSize: 18,
              lineHeight: 28,
            },
          ]}
        >
          Science-based methods to reduce{'\n'}
          distractions (for good).
        </Text>

        {/* Icon */}
        <Image
          source={require('@/assets/images/tiktok-paused.png')}
          resizeMode="contain"
          style={tw`w-40 h-40 mt-8`}
        />

        {/* Label */}
        <Text
          style={[
            tw`mt-5 font-semibold text-[#4E5F4A]`,
            {
              fontSize: 24,
            },
          ]}
        >
          TikTok is paused
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={tw`px-6 mt-6`}>
        <Pressable
          onPress={() => router.push('/onboarding/screen-time')}
          style={tw`h-17 rounded-full bg-[#4E5F4A] items-center justify-center`}
        >
          <Text style={tw`text-white text-[24px] font-bold`}>
            Get Started →
          </Text>
        </Pressable>

        <Text
          style={[
            tw`text-center text-[#7A8076] mt-6`,
            {
              fontSize: 16,
              lineHeight: 24,
            },
          ]}
        >
          By continuing, you agree to our{' '}
          <Text style={tw`underline`}>terms of use</Text> and our{' '}
          <Text style={tw`underline`}>privacy policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
