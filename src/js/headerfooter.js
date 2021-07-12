
/**
 * Header and Navbar for Webpage
 */
export class Header {
    constructor(){
        this.page = this.createHeader();
    }
    /**
     * creates all elements for header append them and returns main header
     * @returns Main DOM Element of header
     */
    createHeader(){
        //creating Elements
        let header = document.createElement("header");
        let nav = document.createElement("nav");
        let div_nav_heading = document.createElement("div");
        let div_hamburger = document.createElement("div");
        let ul_navlists = document.createElement("ul");
        let h1_fontatum = document.createElement("h1");
        let div_line1 = document.createElement("div");
        let div_line2 = document.createElement("div");
        let div_line3 = document.createElement("div");

        //adding classLists
        nav.classList.add("navbar");
        div_nav_heading.classList.add("nav_heading");
        div_hamburger.classList.add("hamburger");
        ul_navlists.classList.add("nav-lists");
        h1_fontatum.classList.add("font-autm");
        div_line1.classList.add("line1");
        div_line2.classList.add("line2");
        div_line3.classList.add("line3");
        let liList = [];
        for (let i = 1; i <= 5; i++) {
            liList.push(document.createElement("li"));
        }
        //addContent
        h1_fontatum.textContent = "Good Food";
        liList[0].textContent = "Home";
        liList[1].textContent = "Menu";
        liList[2].textContent = "About";
        liList[3].textContent = "Ratings";
        liList[4].textContent = "Contact";

        //appending children
        header.append(nav);        
        nav.append(div_nav_heading,div_hamburger,ul_navlists);
        div_nav_heading.append(h1_fontatum);
        liList.forEach((li)=>{
            ul_navlists.append(li);
        });
        div_hamburger.append(div_line1,div_line2,div_line3);

        //Some Events Addition
        div_hamburger.addEventListener("click",()=>{
            ul_navlists.style = "";
            if(ul_navlists.classList.contains("active")){
                ul_navlists.style.animation = "actin 1s 1 ease-in-out reverse";
                div_hamburger.classList.remove("active");
                ul_navlists.classList.remove("active");
            }
            else{
                ul_navlists.style.animation = "actin 1s 1 ease-in-out";
                div_hamburger.classList.add("active");
                ul_navlists.classList.add("active");
            }
        });


        return header;
    }
}

/**
 * Creates Footer of Webpage
 */
export class Footer{
    constructor(){
        this.page = this.createFooter();
    }
    /**
     * used for Creating footer of webpage
     * @returns Main Footer Element 
     */
    createFooter(){
        //creating Elements
        let footer = document.createElement("footer");
        let div_footerWrapper = document.createElement("div");
        let div_myNameFooter = document.createElement("div");
        let div_info = document.createElement("div");
        let div_timings = document.createElement("div");
        let div_social = document.createElement("div");
        let p_tel = document.createElement("p");
        let div_address = document.createElement("div");
        let p_headhighlight = document.createElement("p");
        let p$address = document.createElement("p");
        let pTime1 = document.createElement("p");
        let pTime2 = document.createElement("p");
        let p_headhighlight$social = document.createElement("p");
        let a_github = document.createElement("a");
        a_github.setAttribute("href","https://github.com/VinayKanase");
        let a_linkedIn = document.createElement("a");
        a_linkedIn.setAttribute("href","https://www.linkedin.com/in/vinay-kanse-438664215");

        //adding classLists
        div_footerWrapper.classList.add("footerWrapper");
        div_myNameFooter.classList.add("myNameFooter");
        div_info.classList.add("info");
        div_timings.classList.add("timings");
        div_social.classList.add("social");
        p_tel.classList.add("tel");
        div_address.classList.add("address");
        p_headhighlight$social.classList.add("headhighlight");

        //addContent
        div_myNameFooter.innerHTML = "<a href='#'>Vinay S Kanse</a> | &copy;2021";
        p_tel.innerHTML = "Telephone: <span>+911234567890</span>";
        p_headhighlight.textContent = "Address: ";
        p$address.innerHTML = "Good Food,<br>Shop no. 1,2,3<br>XYZ Road - 400703<br>";
        pTime1.innerHTML = "<span class='headhighlight'>Mon-Thurs:</span> 8:00am to 9:00pm";
        pTime2.innerHTML = "<span class='headhighlight'>Fri-Sun:</span> 7:00am to 11:00pm";
        p_headhighlight$social.textContent = "Social Links";
        a_github.innerHTML = "<i class='fa fa-github' title='Github'></i>";
        a_linkedIn.innerHTML = '<i title="Linked In" class="fa fa-linkedin"></i>';

        //appendingChildern
        footer.append(div_footerWrapper,div_myNameFooter);
        div_footerWrapper.append(div_info,div_timings,div_social);
        div_info.append(p_tel,div_address);
        div_address.append(p_headhighlight,p$address);
        div_timings.append(pTime1,pTime2);
        div_social.append(p_headhighlight$social,a_github,a_linkedIn);


        return footer;
    }
}