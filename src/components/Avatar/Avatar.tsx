import { View } from "react-native";
import { Eyes } from "./Eyes/Eyes";
import { Mouth } from "./Mouth/Mouth";
import { Emotion } from "../../types/avatar";

interface AvatarProps {
  emotion: Emotion;
}

export function Avatar({ emotion }: AvatarProps) {
  return (
    <View>
      <Eyes emotion={emotion} />
      <Mouth emotion={emotion}  />
    </View>
  );
}