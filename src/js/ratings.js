function Box(name,position,desc,ratings) {
    //creating element
    let box = document.createElement("div");
    let div_customer_name = document.createElement("div");
    let div_desc = document.createElement("div");
    let div_customer_ratings = document.createElement("div");
    let h3_heading = document.createElement("h3");
    let p_position = document.createElement("p");
    let p$div_desc = document.createElement("p");
    let p$div_customer_ratings = document.createElement("p");
    //adding ClassList
    box.classList.add("box");
    div_customer_name.classList.add("customer_name");
    div_desc.classList.add("desc");
    div_customer_ratings.classList.add("customer_ratings");
    h3_heading.classList.add("heading");
    p_position.classList.add("position");

    //textContent appending
    h3_heading.textContent = name;
    p_position.textContent = position;
    p$div_desc.textContent = desc;
    p$div_customer_ratings.textContent = "Ratings: ";
    p$div_customer_ratings.setAttribute("title",`${ratings} out of 5`);
        let rate = parseInt(ratings);
        let temp = [];
        for (let i = 0; i < rate; i++) {
            let temp2 = document.createElement("i");
            temp2.classList.add("fa","fa-star");
            temp.push(temp2);
        }
        temp.forEach(i=>p$div_customer_ratings.append(i));
        if(typeof ratings === "string"){
            let i_fastarthalf = document.createElement("i");
            i_fastarthalf.classList.add("fa","fa-star-half");
            p$div_customer_ratings.append(i_fastarthalf);
        }
        
    //appending children
    box.append(div_customer_name,div_desc,div_customer_ratings);
    div_customer_name.append(h3_heading,p_position);
    div_desc.append(p$div_desc);
    div_customer_ratings.append(p$div_customer_ratings);
    
    return box;
}
export default class Ratings{
    constructor(){
        this.page = this.createRatings();
    }
    createRatings(){
        //creating elements
        let ratings = document.createElement("div");
        let div_content_heading = document.createElement("div");
        let h1$div_content_heading = document.createElement("h1");
        let div_ratingsWrapper = document.createElement("div");

        //adding classList
        ratings.classList.add("ratings");
        div_content_heading.classList.add("content_heading");
        div_ratingsWrapper.classList.add("ratingsWrapper");

        //adding content
        h1$div_content_heading.textContent = "Ratings from our Customers";
        
        //appending 
        div_content_heading.append(h1$div_content_heading,div_ratingsWrapper);
        
        let reviewers = [
            {
                name:"Vinay S Kanse",
                position:"Software Devloper",
                review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ullam? Accusantium harum sequi totam, dignissimos obcaecati, ipsum incidunt odio laborum eaque, pariatur labore voluptatum? Unde accusantium nobis asperiores. Rerum, maiores",
                rating: 5
            },
            {
                name:"Rahen Ruzaruyo",
                position:"Not Know",
                review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ullam? Accusantium harum sequi totam, dignissimos obcaecati, ipsum incidunt odio laborum eaque, pariatur labore voluptatum? Unde accusantium nobis asperiores. Rerum, maiores",
                rating: "4.5"
            },
            {
                name:"XYZ",
                position:"Lawyer",
                review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ullam? Accusantium harum sequi totam, dignissimos obcaecati, ipsum incidunt odio laborum eaque, pariatur labore voluptatum? Unde accusantium nobis asperiores. Rerum, maiores",
                rating: 3
            },
            {
                name:"XYZ",
                position:"Gawar",
                review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ullam? Accusantium harum sequi totam, dignissimos obcaecati, ipsum incidunt odio laborum eaque, pariatur labore voluptatum? Unde accusantium nobis asperiores. Rerum, maiores",
                rating: "2.5"
            }
        ];
        let tempArr = [];
        reviewers.forEach(review=>{
            let temp = Box(review.name,review.position,review.review,review.rating);
            tempArr.push(temp);
        });
        tempArr.forEach(elem=>div_ratingsWrapper.append(elem));
        ratings.append(div_content_heading,div_ratingsWrapper);
        return ratings;
    }
}