import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { WashOption } from "../types/wash.types";

interface WashCardProps {
  washOption: WashOption;
  onSelect: (type: WashOption["type"]) => void;
}

export const WashCard: React.FC<WashCardProps> = ({ washOption, onSelect }) => {
  const getCardStyles = () => {
    switch (washOption.type) {
      case "basico":
        return {
          bg: "bg-white",
          border: "border-gray-300",
          title: "text-gray-800",
          accent: "bg-gray-100",
          emoji: "💧",
        };
      case "standard":
        return {
          bg: "bg-white",
          border: "border-emerald-300",
          title: "text-emerald-700",
          accent: "bg-emerald-50",
          emoji: "✨",
        };
      case "premium":
        return {
          bg: "bg-white",
          border: "border-cyan-400",
          title: "text-cyan-700",
          accent: "bg-cyan-50",
          emoji: "👑",
        };
      default:
        return {
          bg: "bg-white",
          border: "border-gray-300",
          title: "text-gray-800",
          accent: "bg-gray-100",
          emoji: "💧",
        };
    }
  };

  const styles = getCardStyles();

  return (
    <TouchableOpacity
      onPress={() => onSelect(washOption.type)}
      className={`${styles.bg} border-2 ${styles.border} rounded-2xl p-6 mb-5 active:opacity-70 shadow-md`}
    >
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center flex-1">
          <View
            className={`${styles.accent} w-12 h-12 rounded-full items-center justify-center mr-3`}
          >
            <Text className="text-2xl">{styles.emoji}</Text>
          </View>
          <Text className={`text-2xl font-bold ${styles.title} flex-1`}>
            {washOption.name}
          </Text>
        </View>
        <View className={`${styles.accent} px-4 py-2 rounded-full`}>
          <Text className={`text-xl font-bold ${styles.title}`}>
            ${washOption.price}
          </Text>
        </View>
      </View>

      <Text className="text-gray-600 text-base leading-6 ml-15">
        {washOption.description}
      </Text>

      <View className={`${styles.accent} mt-4 py-2 rounded-lg`}>
        <Text className={`${styles.title} text-center font-semibold`}>
          Seleccionar →
        </Text>
      </View>
    </TouchableOpacity>
  );
};
