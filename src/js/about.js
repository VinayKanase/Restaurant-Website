import owner from '../assets/owner.jpg';
import chef1 from '../assets/chef1.jpg';
import chef2 from '../assets/chef2.jpg';

function creatingAboutPeoplePannel(name,position,paraArray,imgname,Bool = true) {
    let main = document.createElement("div");
    let div_description = document.createElement("div");
    let div_img = document.createElement("div");
    let h1_heading = document.createElement("h1");
    let p_position = document.createElement("p");
    let div_info = document.createElement("div");
    let img$div_img = document.createElement("img");
    //adding classlist
    main.classList.add("main");
    div_description.classList.add("description");
    div_img.classList.add("img");
    h1_heading.classList.add("heading");
    p_position.classList.add("position");
    div_info.classList.add("info");

    //text Content
    h1_heading.textContent = name;
    p_position.textContent = position;
    paraArray.forEach(para => {
        let p = document.createElement("p");
        let br = document.createElement("br");
        p.textContent = para;
        div_info.append(p,br);
    });

    //adding attribute
    img$div_img.setAttribute("src",imgname);

    //appending children
    div_description.append(h1_heading,p_position,div_info);
    div_img.append(img$div_img);
    if(Bool)
        main.append(div_description,div_img);
    else 
        main.append(div_img,div_description);

    return main;
}

export default class About{
    constructor(){
        this.page = this.createAbout();
    }
    createAbout() {
        //creating element
        let about = document.createElement("div");
        let div_content_heading = document.createElement("div");
        let h2$div_content_heading = document.createElement("h2");

        //adding textContent
        h2$div_content_heading.textContent = "About Us";

        //ClassList
        about.classList.add("about");
        div_content_heading.classList.add("content_heading");

        // appending
        div_content_heading.append(h2$div_content_heading);

        let people = [
            {
                name:"Mr. King S Kanse",
                position:"Owner, Founder, Chef",
                paraArray: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos modi totam molestias adipisci in veniam eum sapiente laborum laudantium harum?",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae? Sit dolorem eius mollitia eaque aliquam id repudiandae fuga odit repellat hic numquam ducimus non, voluptatibus perferendis quidem placeat et ipsa labore, voluptatum minima necessitatibus commodi dolores. Consequatur optio reiciendis quos saepe, tempora vero explicabo cum. Facere error odio aliquid!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa assumenda quasi aspernatur recusandae omnis beatae eius doloremque ducimus dolorum iusto, hic aut modi perferendis harum cum saepe quae magnam."
                ],
                imgname: owner,
                Bool:true
            },
            {
                name:"Mr. Dimitri Marko",
                position:"Chef",
                paraArray: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos modi totam molestias adipisci in veniam eum sapiente laborum laudantium harum?",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae? Sit dolorem eius mollitia eaque aliquam id repudiandae fuga odit repellat hic numquam ducimus non, voluptatibus perferendis quidem placeat et ipsa labore, voluptatum minima necessitatibus commodi dolores. Consequatur optio reiciendis quos saepe, tempora vero explicabo cum. Facere error odio aliquid!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa assumenda quasi aspernatur recusandae omnis beatae eius doloremque ducimus dolorum iusto, hic aut modi perferendis harum cum saepe quae magnam."
                ],
                imgname: chef1,
                Bool:false
            },
            {
                name:"Ms. Jenifer Roy",
                position:"Chef",
                paraArray: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos modi totam molestias adipisci in veniam eum sapiente laborum laudantium harum?",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae? Sit dolorem eius mollitia eaque aliquam id repudiandae fuga odit repellat hic numquam ducimus non, voluptatibus perferendis quidem placeat et ipsa labore, voluptatum minima necessitatibus commodi dolores. Consequatur optio reiciendis quos saepe, tempora vero explicabo cum. Facere error odio aliquid!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa assumenda quasi aspernatur recusandae omnis beatae eius doloremque ducimus dolorum iusto, hic aut modi perferendis harum cum saepe quae magnam."
                ],
                imgname: chef2,
                Bool:true
            }
        ];
        let mainArray = [];
        people.forEach(person=>{
            let temp = creatingAboutPeoplePannel(person.name,person.position,person.paraArray,person.imgname,person.Bool);
            mainArray.push(temp);
        });
        about.append(div_content_heading);
        mainArray.forEach(main=>{
            about.append(main);
        })
        return about;
    }
}