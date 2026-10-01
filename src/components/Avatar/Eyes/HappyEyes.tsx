import { useEffect } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function HappyEyes() {
  const eyeHeight = useSharedValue(20);

  useEffect(() => {
    const blink = () => {
      eyeHeight.value = withSequence(
        withTiming(2, {
          duration: 120,
        }),
        withTiming(20, {
          duration: 120,
        })
      );
    };

    const interval = setInterval(blink, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const animatedPropsLeft = useAnimatedProps(() => ({
    d: `M 50 35 Q 70 ${35 - eyeHeight.value} 90 35`,
  }));

  const animatedPropsRight = useAnimatedProps(() => ({
    d: `M 130 35 Q 150 ${35 - eyeHeight.value} 170 35`,
  }));

  return (
    <Svg width={220} height={70} viewBox="0 0 220 70">
      <AnimatedPath
        animatedProps={animatedPropsLeft}
        fill="none"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <AnimatedPath
        animatedProps={animatedPropsRight}
        fill="none"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </Svg>
  );
}