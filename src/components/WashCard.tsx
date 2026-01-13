import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { WashOption } from "../types/wash.types";

interface WashCardProps {
  washOption: WashOption;
  onSelect: (type: WashOption["type"]) => void;
}

export const WashCard: React.FC<WashCardProps> = ({ washOption, onSelect }) => {
  const getCardColor = () => {
    switch (washOption.type) {
      case "basico":
        return "bg-gray-100 border-gray-300";
      case "standard":
        return "bg-cyan-100 border-cyan-300";
      case "premium":
        return "bg-purple-100 border-purple-300";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  const getTitleColor = () => {
    switch (washOption.type) {
      case "basico":
        return "text-gray-800";
      case "standard":
        return "text-cyan-800";
      case "premium":
        return "text-purple-800";
      default:
        return "text-gray-800";
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onSelect(washOption.type)}
      className={`${getCardColor()} border-2 rounded-2xl p-6 mb-4 active:opacity-70`}
    >
      <Text className={`text-2xl font-bold ${getTitleColor()} mb-2`}>
        {washOption.name}
      </Text>
      <Text className="text-gray-600 mb-4 text-base">
        {washOption.description}
      </Text>
      <View className="flex-row justify-between items-center">
        <Text className={`text-xl font-bold ${getTitleColor()}`}>
          ${washOption.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
