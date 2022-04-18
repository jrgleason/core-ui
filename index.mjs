import { Base } from './Base.mjs';
import { ShadowElement, CREATE_ELEMENT } from './ShadowElement.mjs';
import { Viewport } from "./components/index.mjs";
import { TopBarFixed } from './components/index.mjs';


if(window){
    // Add Mustache Globally
    if(typeof Mustache === 'undefined'){
      console.error("Mustache not found, templates not supported");
      window.Mustache = {
         render: (template) => template
      }
    }
    window.Base = Base;
    window.ShadowElement = ShadowElement;
    window.CREATE_ELEMENT = CREATE_ELEMENT;
}
export {
  CREATE_ELEMENT, 
  ShadowElement, 
  Base, 
  Viewport,
  TopBarFixed
}
