import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {Spacer} from "./Spacer";
import ProductCard from "./ProductCard";
import {Block} from "./Block";

interface CarouselProps {
  productCategory: string
  carouselName: string
}
export function Carousel({carouselName= "", productCategory = ""}: CarouselProps) {
  const products = Array.from(['food', 'blaket', 'toys', 'cleaning'])

  return (
   <View style={style.container}>
     <Block space="16" >
       <Text style={{
         color: 'black',
         fontSize: 18,
         fontWeight: 'bold'
       }}>
         {carouselName}
       </Text>
      </Block>
     <Spacer padding={8} />
     <FlatList
       data={products}
       style={style.carousel}
       horizontal
       scrollEnabled={true}
       renderItem={({item}) => <ProductCard name={item} />}
       ItemSeparatorComponent={() => <Spacer padding={4} />}
       showsHorizontalScrollIndicator={false}
     />
   </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginVertical:12,
  },
  carousel: {
    padding: 8,
    width: '100%',
    height: 200,
    backgroundColor: "#f2f3e6",
    borderRadius: 24,
  },
  productsContainer:{
    flexDirection: 'row',
    gap: 8
  }
})