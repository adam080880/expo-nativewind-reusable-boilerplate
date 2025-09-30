import { Text } from "@/components/ui/text";
import { View } from "react-native";

const AppTest = () => {
  return <View className={'flex-1 justify-center items-center flex flex-col gap-2 px-4'}>
    <Text className="text-sm font-bold text-center text-primary">Hi there! 👋</Text>
    <Text className="text-sm text-white text-center">Expo + React Native Reusables + Nativewind</Text>
  </View>;
};

export default AppTest;
