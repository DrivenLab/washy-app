import React from "react";
import { View, Text, ScrollView } from "react-native";
import { WashCard } from "../components/WashCard";
import { WashOption, WashType } from "../types/wash.types";

interface WashSelectionScreenProps {
  onSelectWash: (type: WashType) => void;
}

const washOptions: WashOption[] = [
  {
    type: "basico",
    name: "Básico",
    description: "Lavado exterior completo y secado",
    price: 50,
  },
  {
    type: "standard",
    name: "Standard",
    description: "Lavado exterior e interior, aspirado y secado",
    price: 100,
  },
  {
    type: "premium",
    name: "Premium",
    description: "Lavado completo, pulido, encerado y limpieza profunda",
    price: 200,
  },
];

export const WashSelectionScreen: React.FC<WashSelectionScreenProps> = ({
  onSelectWash,
}) => {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-cyan-600 pt-16 pb-10 px-6 rounded-b-3xl">
        <Text className="text-3xl font-bold text-white text-center mb-2">
          Selecciona tu tipo de lavado
        </Text>
        <Text className="text-cyan-100 text-center text-base">
          Elige el servicio perfecto para tu auto
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-8 -mt-4">
        {washOptions.map((option) => (
          <WashCard
            key={option.type}
            washOption={option}
            onSelect={onSelectWash}
          />
        ))}
        <View className="h-6" />
      </ScrollView>
    </View>
  );
};
