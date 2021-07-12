
import '../css/style.css';  

import {Header,Footer} from './headerfooter';
import Home from './home';
import Menu from './menu';
import About from './about';
import Ratings from './ratings';
import Contact from './contact';

let main = (function(){
    let current = 80;
    let header = new Header;
    let footer = new Footer;
    let home = new Home;
    let menu = new Menu;
    let about = new About;
    let ratings = new Ratings;
    let contact = new Contact;
    let content = document.getElementById("content");
    function requestPage(name){
        content.innerHTML = "";
        document.documentElement.scrollTop = 0;
        let hr = document.createElement("hr");
        if(name === "Home"){
            content.append(header.page, home.page, hr, footer.page);
            document.getElementById("video").play();
        }
        else if(name === "Menu"){
            content.append(header.page, menu.page, hr, footer.page);
        }
        else if(name === "About"){
            content.append(header.page,about.page, hr, footer.page);
        }
        else if(name === "Ratings"){
            content.append(header.page,ratings.page, hr, footer.page);
        }
        else if(name === "Contact"){
            content.append(header.page,contact.page, hr, footer.page);
            current = 0;
        }
    }
    function getScrollLimit(){
        return current;
    }
    return {requestPage,getScrollLimit};
})();

main.requestPage("Home");
    window.addEventListener("scroll",(e)=>{
        let temp = main.getScrollLimit();
        if(document.body.scrollTop > temp || document.documentElement.scrollTop > temp){
            document.querySelector("header").classList.add("fixed");
        }else{
            document.querySelector("header").classList.remove("fixed");
        }
    });

document.querySelector(".nav-lists").addEventListener("click",(event)=>{
    let temp = event.target.textContent;
    if(temp === "Menu" || temp === "Home" || temp === "About" || temp === "Ratings" || temp === "Contact"){
        main.requestPage(temp);
    }
});