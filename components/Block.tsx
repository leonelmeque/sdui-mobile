import {View} from "react-native";
import {FC, ReactElement, ReactNode} from "react";

type Spacing = '4' | '8' | '16' | '24'

type BlockProps = {
  children: ReactElement | ReactNode,
  space: Spacing

}

export const Block: FC<BlockProps> = ({children}) => {
  return <View style={{
    marginHorizontal: 10,
  }}>{children}</View>
}

Block.displayName = "Block"