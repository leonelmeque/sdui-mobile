import { useEffect, useState} from "react";
import {UIBuilderService, Element} from "../services/ui-builder.service";
import io from 'socket.io-client'
import {UiPathNames} from "../interfaces/server-driven-ui.interface";

const socket = io(`http://localhost:3000`);
const uiService = new UIBuilderService('1', 'react-native')

export function useUiDynamicContent(page: string){
  const [dynamicContent, setDynamicContent] = useState<Element[] | []>([])
  const [pageTitle, setPageTitle] = useState("Page Title")

  useEffect(()=>{
    const contentLoader = async () => {
      try{
        const {pageTitle: title, elements} = await uiService.buildPage(UiPathNames.HOME_PAGE)

        setPageTitle(title)
        setDynamicContent(elements)

      }catch(e) {
        console.log(e)
      }
    }

    socket.on('connect', function() {
      console.log('CONNECTED');
      contentLoader()
    });


    socket.on("ui-updates", (data)=>{
      console.log(data)
      contentLoader()
    })

    if(!dynamicContent.length){
      socket.emit('ui-updates', 'home-page')
    }

    socket.on('exception', function(data) {
      console.log('EVENT_EXCEPTION', data);
    });


    return () => {
      socket.disconnect()
    }
  },[])

  return {
    dynamicContent,
    pageTitle
  }
}