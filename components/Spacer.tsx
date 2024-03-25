import {View} from "react-native";

export function Spacer(props : {padding: number }){
  return <View style={{
    padding: props.padding
  }}></View>
}