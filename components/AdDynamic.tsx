import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from "react-native";
import absoluteFill = StyleSheet.absoluteFill;


 function AdLabel() {
  return  <View style={styles.adText}>
    <Text style={{
      color: 'white', fontWeight: 'bold'
    }}>
      Ad
    </Text>
  </View>
}

function AdInfo(){
   return (
     <View style={addInfoStyles.container}>
       <Text style={addInfoStyles.title}>
         New T-Shirt Collection
       </Text>
       <Text style={addInfoStyles.description}>
         Only For 3.99 EUR
       </Text>
       <View style={addInfoStyles.advertiserBlock}>
         <Text style={addInfoStyles.advertiserName}>
           @H&M
         </Text>
       </View>
     </View>
   )
}

export default function AdDynamic(){
  return (
    <TouchableOpacity style={styles.container}>
       <AdLabel />
      <Image
        source={{
          uri: 'https://picsum.photos/500/500',
        }}
        style={styles.adImage}
      />
      <AdInfo />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: '#e5e5e5',
    marginVertical: 12
  },
  adText: {
    backgroundColor: '#6b726b',
    padding: 8,
    borderRadius: 8,
    flexGrow: 0,
    alignSelf: 'flex-end',
    margin: 8
  },
  adImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: -1,
    //@ts-ignore
    ...absoluteFill,
    transform: [{translateX: 0}, {translateY: 0}]
  }
})

const addInfoStyles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginHorizontal: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(227,227,227,0.7)',
    padding: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  description: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'black'
  },
  advertiserBlock: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 100,
    marginTop: 4
  },
  advertiserName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  }
})