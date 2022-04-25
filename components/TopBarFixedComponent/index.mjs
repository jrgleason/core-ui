import { Base } from "../../Base.mjs";
import template from "./component.html"
import style from "./style.css";

class TopBarFixed extends Base{
    constructor() {
        super();
        this.template = template;
        this.addStyle(style);
    }
    toggleMenu(){
        this.menu = !!this.menu;
    }
    postRender(){
        const sty = document.createElement("style");
        sty.innerHTML = style;
        this.shadowRoot.append(sty);
        return Promise.resolve();
    }
}

export {TopBarFixed}

Base.CREATE_ELEMENT('jrg-topbar', TopBarFixed);