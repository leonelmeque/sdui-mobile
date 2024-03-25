import {ScrollView, StyleSheet} from 'react-native';
import { Text, View } from '../../components/Themed';
import {useUiDynamicContent} from "../../hooks/use-ui-dynamic-content";
import React from "react";
import {DynamicComponent} from "../../components/DynamicComponent";
import {Block} from "../../components/Block";
import {ProductCard} from "../../components";

export default function TabOneScreen() {
const {pageTitle, dynamicContent} = useUiDynamicContent("home-page")

  const modStylesBeforeRender = (componentName: string, props: any, metadata: any) => {
      switch (componentName) {
        case 'ProductCard':
          if(metadata?.modStyles || metadata?.modStyles === undefined){
            return{
            ...props,
              extraStyles: {
              height: 200
            }
            }
          }
          return props
        default:
          return props
      }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Block space="16" >
          <Text style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold'
          }}>
            {pageTitle}
          </Text>
        </Block>

        {dynamicContent.map(({component, props, metadata}, index)=> <DynamicComponent key={index} props={modStylesBeforeRender(component.name, props, metadata)} component={component} /> )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
