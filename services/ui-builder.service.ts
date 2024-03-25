import * as uiComponents from '../components'
import {ReactComponent} from "expo-router/build/testing-library/context-stubs";

export type Element = {
  component: ReactComponent,
  props: any
  metadata?: any
}

type UIComponentNames = keyof typeof  uiComponents

type ServerComponentProps = {
  name : UIComponentNames,
  props: {[key: string]: unknown}
  metadata: {[key: string]: unknown}
}

export class UIBuilderService {
  private BASE_URL: string = 'http://localhost:3000/api/ui/'
  private readonly version: string
  private readonly platform: string

  constructor(version: string, platform: string) {
    this.version = version
    this.platform = platform
  }

   async buildPage(page: string) {
    const pageJson = await this.fetchPageResource({page, version: this.version, platform: this.platform})
    const elements = await Promise.all(pageJson.layout.components.map(this.buildComponent).filter((component:Element | null)=>component)) as Element []

    return {
      pageTitle: pageJson.layout.pageTitle,
      elements
    }
  }
  async fetchPageResource({page, version, platform} : any){
    const url = new URL(`${this.BASE_URL}${page}`)
    const search = new URLSearchParams({ version, platform, page })

    const res = await fetch(url + `?${search.toString()}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await res.json()
  }

  private buildComponent(component: ServerComponentProps): Element | null {
    if(!uiComponents[component?.name] || component.metadata?.hide) return null

    return {
      component: uiComponents[component.name] as ReactComponent,
      props: component.props,
      metadata: component.metadata
    }
  }

}