//Adding eventlistenet. I want the DOM to be loaded first because all the added HTML does into a particular spot in DOM.
document. addEventListener("DOMContentLoaded", function(){
    //Create class profile through constructor
    class profile {
        constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl, codeLanguages) {
            this.name = name;
            this.jobTitle = jobTitle;
            this.company = company;
            this.experience = experience;
            this.school = school;
            this.major = major;
            this.email = email;
            this.linkedInUrl = linkedInUrl;
            this.codeLanguages = codeLanguages;
        }
    }
    
    //Creating the constant container.
    const container = document.querySelector('#template-hook');

    // Fetching the json file from the data folder. fetch api helps us to get requests and process the json file.
    fetch("/data/data.json")
    //get the response of the json file
    .then(response => response.json())
    //on sucess, run the map function for each element in the array of objects.
    .then(dataFile => { 
        //creating a constant newCard, where the innerHTML string is passed.
        const newCard = Object.values(dataFile).map(el => {
            //For each card a new profile is stored and this profile is called in innerHTML. 
            //This step is avoidable as I can call each element with el.name for example.
            //But this will also test the class and helped me practice a bit.
            const myProfile = new profile(el.name, el.jobTitle, el.company, el.experience, el.school, el.major, el.email, el.linkedInUrl, el.codeLanguages); 
            let myHTMLInsert = 
            `
            <div class="grid-container">
                <div class="grid-col">
                    <!---Grid Column left is for profile image, name and designation-->
                    <div class="grid-col_left">
                        <img src="img/headshot.jpg" class="grid-col_img" alt="Image of a person">
                        <h1 class="grid-col_name">${myProfile.name}</h1>
                        <p class="grid-col_designation">${myProfile.jobTitle}</p>
                    </div>
                    <!--Grid Column right is for the profile information-->
                    <div class="grid-col_right">
                        <div class="grid-col_info">
                            <p><span class="grid-col_title">Company: </span> ${myProfile.company}</p>
                            <p><span class="grid-col_title">Experience:</span> ${myProfile.experience}</p>
                            <p><span class="grid-col_title">School:</span> ${myProfile.school}</p>
                            <p><span class="grid-col_title">Major:</span> ${myProfile.major}</p>
                            <p><span class="grid-col_title">Email:</span> ${myProfile.email}</p>
                            <p><span class="grid-col_title">Languages:</span> ${myProfile.codeLanguages}</p>
                        </div>
                        <!--Used flexbox here to center linkedIn logo and text-->
                        <div class="grid-col_linkdin">
                            <img src="img/linkedin.svg" class="grid-col_img2" alt="linkdin logo"> 
                            <p class="grid-col_email">${myProfile.linkedInUrl}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            return myHTMLInsert;
        });

        //NewElement div class is created. For each card a new div is added.
        let newElement = document.createElement('div');

        //NewElements inner HTML is the function return value of NewCard.
        newElement.innerHTML = `${newCard}`

        //Appending to the container which is Template-hook
        container.append(newElement);
    });
});
