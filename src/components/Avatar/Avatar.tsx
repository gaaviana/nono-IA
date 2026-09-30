import Svg ,{Circle, Line} from "react-native-svg";

export function Avatar(){
    return (
        <Svg width={220} height={220} viewBox="0 0 220 120">
            <Circle cx="70" cy="50" r="12" fill="white"/>
            <Circle cx="150" cy="50" r="12" fill="white"/>

            <Line x1="90" y1="85" x2="130" y2="85" stroke="white" strokeWidth="5" strokeLinecap="round"/>
        </Svg>
    )
}