
import chefLogo from '../assets/chef.png';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.png';

import _menu1 from '../assets/1_menu1.png';
import _menu2 from '../assets/1_menu2.png';
import _menu3 from '../assets/1_menu3.png';
function Card(item) {
    let card = document.createElement("div");
    let div_content = document.createElement("div");
    let div_imgWrapper = document.createElement("div");
    let p_name = document.createElement("p");
    let p_special = document.createElement("p");
    let div_desc = document.createElement("div");
    let img$div_imgWrapper = document.createElement("img");
    let p$div_desc = document.createElement("p");
    //adding attributes
    img$div_imgWrapper.setAttribute("src",item.imgSrc);

    //adding classList
    div_content.classList.add("content");
    card.classList.add("card");
    div_imgWrapper.classList.add("imgWrapper");
    p_name.classList.add("name");
    p_special.classList.add("special");
    div_desc.classList.add("desc");

    //adding textContent
    p_name.textContent = item.name;
    p_special.textContent = item.description;
    p$div_desc.textContent = item.information;


    //append 
    card.append(div_content);
    div_content.append(div_imgWrapper,p_name,p_special,div_desc);
    div_imgWrapper.append(img$div_imgWrapper);
    div_desc.append(p$div_desc);

    return card;
}
class AddnewListofItems{
    constructor(HeadingClass,subHeading,MenuItems){
        this.createContainer(HeadingClass,subHeading);
        // MenuItems = [
        //     {
        //         name: "",
        //         imgSrc: "",
        //         description:"",
        //         information:""
        //     }
        // ];
        this.cards = [];
        MenuItems.forEach(item => {
            let temp = Card(item);
            this.cards.push(temp);
        });

        this.cards.forEach(card=>this.list.append(card));
    }
     createContainer(HeadingClass,subHeading) {
        this.mainDiv = document.createElement("div");
        this.mainDiv.classList.add(HeadingClass);
        this.subHeading = document.createElement("div");
        this.subHeading.classList.add("subHeading");
        this.h3_subHeading = document.createElement("h3");
        this.h3_subHeading.textContent = subHeading;
        this.hr = document.createElement("hr");
        this.hr.setAttribute("width",`${Math.round(subHeading.length * 16.6)}px`);

        this.subHeading.append(this.h3_subHeading,this.hr);

        this.list = document.createElement("div");
        this.list.classList.add("list");    

        this.mainDiv.append(this.subHeading,this.list);
    }
}



export default class Menu{
    constructor(){
        this.page = this.createMenu();
    }
    createMenu() {
        //creating Elements
        let menu = document.createElement("div");
        let div_menu_bg = document.createElement("div");
        let div_content_heading = document.createElement("div");
        let img_chef1  = document.createElement("img");
        let h1$content_heading = document.createElement("h1");
        let img_chef2  = document.createElement("img");

        //adding classList
        menu.classList.add("menu");
        div_menu_bg.classList.add("menu_bg");   
        div_content_heading.classList.add("content_heading");
        img_chef1.classList.add("chef");
        img_chef2.classList.add("chef");

        //textContent
        h1$content_heading.textContent = "Menu";

        //Adding atributes
        img_chef1.setAttribute("alt","Chef logo");
        img_chef2.setAttribute("alt","Chef logo");
        img_chef1.setAttribute("src",chefLogo);
        img_chef2.setAttribute("src",chefLogo);
        //appending childern
        div_content_heading.append(img_chef1,h1$content_heading,img_chef2);
        let listOne = [
            {
                name:"Chana chole Masala",
                imgSrc: menu1,
                description:"Spicy,Served With Puri,Bhature,Kulcha",
                information:"Chana or Chole is the Hindi name for chickpeas. Chana masala is simply         chickpeas cooked in an onion, ginger, and garlic-based sauce with garam masala added to it. This is a popular North Indian curry; it’s spicy and packs a punch.",
            },
            {
                name:"Tikka Masala",
                imgSrc:menu2,
                description:"Spicy,World Famous",
                information:"Tikka is the Hindi term for “small chunks,” and masala means a spice blend. So when small chunks of anything, like chicken, are cooked in a sauce with a particular spice blend, it is called Chicken Tikka Masala. The same way when paneer comes to the play, it is called Paneer Tikka Masala.",
            },
            {
                name:"Dal",
                imgSrc: menu3,
                description:"Dal Makhani,Dal Thadka",
                information:"Dal is the hindi name for lentils, and it broadly refers to all lentil soups in an Indian cuisine. Typically, the lentils are mixed with water, turmeric, and salt, then cooked to perfection.",
            },
            {
                name:"Birayni",
                imgSrc: menu4,
                description:"Chicken Birayni,Veg Birayni",
                information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur expedita provident dolorem quas amet libero ratione itaque sequi ab assumenda, sint, blanditiis ut animi rem fuga ipsam dicta numquam unde quae minima! Adipisci rerum doloremque sunt veritatis harum a.",
            }
        ];
        let indian_meals = new AddnewListofItems("indian_meals","Indian Meals",listOne);
        let listTwo = [
            {
                name: "Gulab Jamun",
                imgSrc: _menu1,
                description: "Sweet,King of Desserts",
                information: "Gulab Jamun is definitely the king of deserts. Milk solids are crushed into powder and then mixed with milk in order to knead into a smooth dough. The dough is then rolled into small balls, deep fried, and dunked into a sugar syrup until the balls absorb the syrup and become soft and juicy."
            },
            {
                name: "Halwa",
                imgSrc: _menu2,
                description: "Sweet,Gajar Halwa,Besan Halwa",
                information: "Halwa is a pudding made with any variety of flour — like chickpea flour, wheat flour, semolina or root vegetables — that’s cooked with sugar, ghee and water/milk."
            },
            {
                name: "Barfi",
                imgSrc: _menu3,
                description: "Kaju Barfi,Almond Barfi,Doodh Peda",
                information: "Barfi is essentially a more solidified form of a milk-based pudding. In this dish, a sweet batter is thickened and then set to cool and cut into smaller pieces."
            }
        ];
        let indian_desserts = new AddnewListofItems("indian_desserts","Indian Desserts",listTwo);

        menu.append(div_menu_bg,div_content_heading,indian_meals.mainDiv,indian_desserts.mainDiv);

        return menu;
    }
}

