import { router } from 'expo-router';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';

export default function ScreenTime() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-[#F5F5F7]`}>
      {/* Main Content */}
      <View style={tw`items-center justify-center px-8`}>
        <Image
          source={require('../../assets/images/screentime-logo.png')}
          resizeMode="contain"
          style={tw`w-40 h-40`}
        />

        <Text
          style={[
            tw`text-center text-black font-bold mt-4`,
            {
              fontSize: 24,
              lineHeight: 32,
            },
          ]}
        >
          Allow Sage to access {'\n'} screen time and block apps
        </Text>

        <View style={tw`flex-row mt-12 w-full`}>
          <Text
            style={{
              fontSize: 26,
              marginTop: 2,
              marginRight: 8,
            }}
          >
            🛡️
          </Text>

          <Text
            style={[
              tw`text-black flex-1`,
              {
                fontSize: 18,
                lineHeight: 32,
              },
            ]}
          >
            Apple secures your data so it stays private and never leaves your
            phone
          </Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={tw`px-8 mt-8 w-full`}>
        <Pressable
          onPress={() => router.replace('/(tabs)/home')}
          style={tw`h-18 rounded-full bg-black items-center justify-center`}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            Connect Sage to Screen Time
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
