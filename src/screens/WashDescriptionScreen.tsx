import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { WashType } from "../types/wash.types";

interface WashDescriptionScreenProps {
  washType: WashType;
  onBack: () => void;
}

const getWashDetails = (washType: WashType) => {
  switch (washType) {
    case "basico":
      return {
        title: "Lavado Básico",
        price: 50,
        duration: "30 minutos",
        includes: [
          "Lavado exterior completo con shampoo premium",
          "Enjuague a alta presión",
          "Secado con toallas de microfibra",
          "Limpieza de llantas y rines",
          "Aplicación de brillo en neumáticos",
        ],
        process:
          "Nuestro lavado básico está diseñado para mantener tu vehículo limpio y brillante. Utilizamos productos de alta calidad que cuidan la pintura de tu auto mientras eliminan la suciedad acumulada del día a día.",
        bgColor: "bg-gray-500",
        lightBg: "bg-gray-100",
        textColor: "text-gray-800",
      };
    case "standard":
      return {
        title: "Lavado Standard",
        price: 100,
        duration: "60 minutos",
        includes: [
          "Todo lo incluido en el lavado básico",
          "Limpieza interior completa",
          "Aspirado de asientos y alfombras",
          "Limpieza de tablero y consola",
          "Limpieza de vidrios interiores y exteriores",
          "Aromatización del interior",
          "Limpieza de puertas y vestiduras",
        ],
        process:
          "El lavado standard combina la limpieza exterior con un cuidado profundo del interior. Tu vehículo quedará impecable tanto por fuera como por dentro, con especial atención a cada detalle.",
        bgColor: "bg-cyan-500",
        lightBg: "bg-cyan-100",
        textColor: "text-cyan-800",
      };
    case "premium":
      return {
        title: "Lavado Premium",
        price: 200,
        duration: "120 minutos",
        includes: [
          "Todo lo incluido en el lavado standard",
          "Pulido de carrocería para eliminar micro rayones",
          "Aplicación de cera protectora premium",
          "Limpieza profunda de motor",
          "Tratamiento de plásticos y gomas",
          "Limpieza detallada de rines con productos especializados",
          "Hidratación de asientos de cuero o tela",
          "Limpieza profunda de cajuela",
          "Desinfección completa del habitáculo",
        ],
        process:
          "Nuestro servicio premium es la máxima expresión del cuidado automotriz. Cada rincón de tu vehículo recibe atención especializada con productos de grado profesional. El resultado es un auto que luce como recién salido de la agencia.",
        bgColor: "bg-purple-500",
        lightBg: "bg-purple-100",
        textColor: "text-purple-800",
      };
  }
};

export const WashDescriptionScreen: React.FC<WashDescriptionScreenProps> = ({
  washType,
  onBack,
}) => {
  const details = getWashDetails(washType);

  return (
    <View className="flex-1 bg-white">
      <View className={`${details.bgColor} pt-16 pb-8 px-6`}>
        <Text className="text-3xl font-bold text-white text-center mb-2">
          {details.title}
        </Text>
        <Text className="text-white text-center text-lg">
          ${details.price} - {details.duration}
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6 pb-6">
        <View className={`${details.lightBg} rounded-2xl p-6 mb-6`}>
          <Text className={`text-lg ${details.textColor} font-semibold mb-3`}>
            Descripción del servicio
          </Text>
          <Text className="text-gray-700 text-base leading-6">
            {details.process}
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            Incluye:
          </Text>
          {details.includes.map((item, index) => (
            <View key={index} className="flex-row mb-3">
              <View
                className={`${details.bgColor} w-2 h-2 rounded-full mt-2 mr-3`}
              />
              <Text className="text-gray-700 text-base flex-1 leading-6">
                {item}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={onBack}
          className="bg-gray-200 py-4 px-8 rounded-xl active:bg-gray-300 mb-6"
        >
          <Text className="text-gray-800 text-center text-lg font-bold">
            Volver
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
