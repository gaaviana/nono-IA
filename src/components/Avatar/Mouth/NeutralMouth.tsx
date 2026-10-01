import Svg, { Line } from "react-native-svg";

export function NeutralMouth() {
  return (
    <Svg width={220} height={60} viewBox="0 0 220 60">
      <Line
        x1="90"
        y1="30"
        x2="130"
        y2="30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Svg>
  );
}