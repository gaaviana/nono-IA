import { View } from "react-native";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

export function Avatar(){
    return (
        <View>
            <Eyes/>
            <Mouth/>
        </View>
    )
}