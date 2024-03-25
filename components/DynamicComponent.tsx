import {ComponentType} from "react";
import {Block} from "./Block";

type DynamicComponentProps = {
  props: any,
  component: ComponentType<any>
}
export function DynamicComponent({props, component: Component} : DynamicComponentProps) {
  const {hasBlock=false, ...rest} = props || {}

  if(hasBlock) {
    return <Block space="16" >{
      <Component {...props} />
    }</Block>
  }

  return <Component {...rest} />
}