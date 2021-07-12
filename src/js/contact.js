
export default class Contact{
    constructor(){
        this.page = this.createContact();
        // this.scroll = 
    }
    createContact(){
        //creating element
        let contact = document.createElement("div");;
        let div_formwrapper = document.createElement("div");
        let div_content_heading = document.createElement("div");
        let h1$div_conetnt_headng = document.createElement("h1");
        let form = document.createElement("form");
        let div_formgroup_name = document.createElement("div");
        let div_formgroup_email = document.createElement("div");
        let div_formgroup_message = document.createElement("div");
        let div_formgroup_submit = document.createElement("div");

        //adding ClassList
        contact.classList.add("contact");
        div_formwrapper.classList.add("formwrapper");
        div_content_heading.classList.add("content_heading");
        h1$div_conetnt_headng.textContent = "Contact Us";
        div_formgroup_name.classList.add("form-group");
        div_formgroup_email.classList.add("form-group");
        div_formgroup_message.classList.add("form-group");
        div_formgroup_submit.classList.add("form-group");

        //content adding
        div_formgroup_name.innerHTML = `<label for="name">Name*</label>
            <input autocomplete="nickname" type="text" name="name" id="name" placeholder="Enter Your Name" required>`;
        div_formgroup_email.innerHTML = `<label for="email">Email*</label>
            <input autocomplete="email" type="email" name="email" id="email" placeholder="Enter Your Email" required>`;
        div_formgroup_message.innerHTML = `<label for="message">Message*</label>
            <textarea name="message" id="message" cols="10" rows="3" required
            placeholder="Message"></textarea>`;
        div_formgroup_submit.innerHTML =  `<input type="submit" value="Send">`;
        

        //appending children
        contact.append(div_formwrapper);
        div_formwrapper.append(div_content_heading,form);
        div_content_heading.append(h1$div_conetnt_headng);
        form.append(div_formgroup_name,div_formgroup_email,div_formgroup_message,div_formgroup_submit);

        return contact;
    }
}