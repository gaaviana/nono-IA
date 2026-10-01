import { useEffect } from "react";
import Animated, { useAnimatedProps, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export function Eyes() {
    const eyeHeight = useSharedValue(12)

    useEffect(() => {
        eyeHeight.value = withDelay(
            2000,
            withRepeat(
                withSequence(
                    withTiming(2, { duration: 100 }),
                    withTiming(12, { duration: 100 })
                ),
                -1,
                false
            )
        );
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        r: eyeHeight.value,
    }))

    return (
        <Svg width={220} height={220} viewBox="0 0 220 70">
            <Circle cx="70" cy="35" r="12" fill="white" />
            <Circle cx="150" cy="35" r="12" fill="white" />
        </Svg>
    )
}