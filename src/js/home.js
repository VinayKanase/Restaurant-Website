
import bgVideo from '../assets/video.mp4';
import posterBg from '../assets/posterbg.jpg';
export default class Home{
    constructor(){
        this.page = this.createHomePage();
    }
    createHomePage(){
        //creating elements
        let home = document.createElement("div");
        let div_bgWrapper = document.createElement("div");
        let div_center = document.createElement("div");
      
        let div_shadow = document.createElement("div");
        let h1$div_shadow = document.createElement("h1");
        let p$div_shadow = document.createElement("p");
        let button_btnmain = document.createElement("button");
        //add Class List
        home.classList.add("home");
        div_bgWrapper.classList.add("bgWrapper");
        div_center.classList.add("center");
        div_shadow.classList.add("shadow");
        button_btnmain.classList.add("btn-main");
        //text content
        h1$div_shadow.innerHTML = "Always Choose <span class='font-autm head-attract'>Good Food</span> ";
        p$div_shadow.textContent = "This is Dynamic Content from JS Website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam!";
        button_btnmain.textContent = "Book Now";
        div_bgWrapper.innerHTML =  `<video id="video" loop muted autoplay play poster="${posterBg}">
        <source src="${bgVideo}" type="video/mp4">
        Video is not Supported 
        </video>`
        //append child
        home.append(div_bgWrapper,div_center);
        div_center.append(div_shadow);
        div_shadow.append(h1$div_shadow,p$div_shadow,button_btnmain);
        return home;
    }
}