import Svg ,{Line} from "react-native-svg";

export function Mouth(){
    return (
        <Svg width={220} height={50} viewBox="0 0 220 50">
            <Line x1="90" y1="25" x2="130" y2="25" stroke="white" strokeWidth="5" strokeLinecap="round"/>
        </Svg>
    )
}