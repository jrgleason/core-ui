import { Base } from "../../Base.mjs";
import template from "./template.html"
import style from "./style.css";

class MainViewArea extends Base{
    constructor() {
        super();
        this.template = template;
        this.addStyle(style);
    }
}
export {MainViewArea};
Base.CREATE_ELEMENT("jrg-main", MainViewArea);