import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";

interface WelcomeScreenProps {
  userName: string;
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  userName,
  onStart,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, []);

  return (
    <View className="flex-1 bg-cyan-600 justify-center items-center px-6">
      {/* Decorative circles for background */}
      <View className="absolute top-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full" />
      <View className="absolute bottom-32 left-8 w-40 h-40 bg-white opacity-10 rounded-full" />
      <View className="absolute top-1/3 left-1/4 w-20 h-20 bg-cyan-300 opacity-20 rounded-full" />

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: slideAnim }],
        }}
        className="bg-white rounded-3xl p-8 w-full max-w-md"
      >
        {/* Emoji decorativo */}
        <View className="items-center mb-6">
          <View className="bg-cyan-100 w-24 h-24 rounded-full items-center justify-center">
            <Text className="text-5xl">🚗</Text>
          </View>
        </View>

        <Text className="text-4xl font-bold text-gray-800 text-center mb-3">
          ¡Bienvenido!
        </Text>

        <Text className="text-2xl text-cyan-600 text-center mb-6 font-semibold">
          {userName || "Pablo"}
        </Text>

        <View className="mb-8">
          <Text className="text-gray-600 text-center text-lg leading-6">
            Estamos listos para darle a tu auto el{" "}
            <Text className="font-bold text-cyan-600">mejor cuidado</Text>
          </Text>
        </View>

        {/* Features badges */}
        <View className="flex-row justify-center gap-2 mb-8 flex-wrap">
          <View className="bg-cyan-50 px-5 py-3 rounded-full">
            <Text className="text-cyan-700 text-sm font-semibold">
              ✨ Profesional
            </Text>
          </View>
          <View className="bg-pink-50 px-5 py-3 rounded-full">
            <Text className="text-pink-700 text-sm font-semibold">
              ⚡ Rápido
            </Text>
          </View>
          <View className="bg-cyan-50 px-5 py-3 rounded-full">
            <Text className="text-cyan-700 text-sm font-semibold">
              💎 Premium
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onStart}
          className="bg-cyan-600 py-5 px-8 rounded-xl active:bg-cyan-700"
        >
          <Text className="text-white text-center text-xl font-bold">
            Comenzar →
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
