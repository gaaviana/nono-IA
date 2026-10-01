import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

import type { Emotion } from "../../../types/avatar";
import { NeutralEyes } from "./NeutralEyes";
import { HappyEyes } from "./HappyEyes";

interface EyesProps {
  emotion: Emotion;
}

export function Eyes({ emotion }: EyesProps) {
  const happyOpacity = useSharedValue(0);

  useEffect(() => {
    happyOpacity.value = withTiming(
      emotion === "happy" ? 1 : 0,
      {
        duration: 300,
      }
    );
  }, [emotion]);

  const happyStyle = useAnimatedStyle(() => ({
    opacity: happyOpacity.value,
  }));

  const neutralStyle = useAnimatedStyle(() => ({
    opacity: 1 - happyOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.expression, neutralStyle]}>
        <NeutralEyes />
      </Animated.View>

      <Animated.View style={[styles.expression, happyStyle]}>
        <HappyEyes />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 70,
  },

  expression: {
    position: "absolute",
    width: 220,
    height: 70,
  },
});