import Svg, { Path } from "react-native-svg";

export function HappyMouth() {
  return (
    <Svg width={220} height={60} viewBox="0 0 220 60">
      <Path
        d="M 80 20 Q 110 50 140 20"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
}