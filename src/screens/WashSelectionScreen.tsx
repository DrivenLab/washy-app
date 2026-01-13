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
      <View className="bg-cyan-500 pt-16 pb-8 px-6">
        <Text className="text-2xl font-bold text-white text-center">
          Selecciona tu tipo de lavado
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        {washOptions.map((option) => (
          <WashCard
            key={option.type}
            washOption={option}
            onSelect={onSelectWash}
          />
        ))}
      </ScrollView>
    </View>
  );
};
