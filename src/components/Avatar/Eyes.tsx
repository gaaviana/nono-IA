import { useEffect } from "react";
import Animated, { useAnimatedProps, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import Svg, { Rect } from "react-native-svg";

const AnimatedRect = Animated.createAnimatedComponent(Rect)

export function Eyes() {
    const eyeHeight = useSharedValue(24)

    useEffect(() => {
        const blink = () => {
            eyeHeight.value = withSequence(
                withTiming(4, {
                    duration: 120,
                }),
                withTiming(24 , {
                    duration: 120
                })
            );
        };

        const interval = setInterval(() => {
            blink();
        }, 3500)

        return () => {
            clearInterval(interval);
        };
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        height: eyeHeight.value,
        y: 23 - eyeHeight.value / 2,
        ry: eyeHeight.value / 2,
    }))

    return (
        <Svg width={220} height={220} viewBox="0 0 220 10">
            <AnimatedRect x="55" width="30" fill="white" animatedProps={animatedProps} />
            <AnimatedRect x="135" width="30" fill="white" animatedProps={animatedProps} />
        </Svg>
    )
}