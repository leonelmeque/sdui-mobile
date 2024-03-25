import {View, Text, StyleSheet, ViewStyle, StyleProp} from 'react-native'
import absoluteFill = StyleSheet.absoluteFill;


type ProductCardProps = {
  fullWidth?: boolean
  name: string
  extraStyles?: ViewStyle
}
export default function ProductCard({fullWidth = false, name, extraStyles}: ProductCardProps) {
  return (
    <View style={{...styles.container, ...extraStyles}}>
      <View style={styles.productImage}/>
       <View style={styles.productInfo}>
         <Text style={{
           color: 'black'

         }}>{name}</Text>
         <Text style={{
           color: 'blue'
         }}>$2.99</Text>
         <Text style={{
           color: 'blue'
         }}>description</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: 'rgba(201,238,232,0.75)',
    padding: 12,
    // flex: 1
  },
  productImage: {
    //@ts-ignore
    ...absoluteFill,
  },
  productInfo: {
    marginTop: 'auto',
  }
})