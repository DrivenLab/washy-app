import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface WelcomeScreenProps {
  userName: string;
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  userName,
  onStart,
}) => {
  return (
    <View className="flex-1 bg-cyan-500 justify-center items-center px-6">
      <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg">
        <Text className="text-4xl font-bold text-gray-800 text-center mb-4">
          Bienvenido
        </Text>
        <Text className="text-2xl text-cyan-600 text-center mb-8 font-semibold">
          {userName && "Pablo"}
        </Text>
        <Text className="text-gray-600 text-center mb-8 text-base">
          Estamos listos para ofrecerte el mejor servicio de lavado
        </Text>
        <TouchableOpacity
          onPress={onStart}
          className="bg-cyan-500 py-4 px-8 rounded-xl active:bg-cyan-600"
        >
          <Text className="text-white text-center text-lg font-bold">
            Comenzar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
