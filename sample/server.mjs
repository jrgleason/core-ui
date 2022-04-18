import express from "express";

class SampleApp {
    constructor(config){
        this.app = express();
        this.app.use("/index.html", express.static("./index.html"));
        this.app.use("/dist", express.static("../dist"));
        this.port = config?.port || process.env.PORT || 3000;
    }
    listen(){
        return new Promise((res)=>{
            this.app.listen(this.port, ()=>{
                console.log("Started on port ", this.port);
                res();
            });
        })
    }
}
const sampleApp = new SampleApp();
sampleApp.listen();
