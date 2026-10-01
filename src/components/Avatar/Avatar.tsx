import { View } from "react-native";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import type { Emotion } from "../../types/avatar";

interface AvatarProps {
  emotion: Emotion;
}

export function Avatar({ emotion }: AvatarProps) {
  return (
    <View>
      <Eyes />
      <Mouth emotion={emotion}  />
    </View>
  );
}