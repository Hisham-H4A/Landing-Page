//the constants we will be using down there
const navB = document.getElementById('navbar__list'); //gets the list of links in the navBar
const secAddB = document.getElementById('secAdder'); //gets the button of adding random sections
const mainstuff = document.getElementById('mainblock'); //gets the main nameTag by it's id
const topBtn = document.getElementById('topButton'); //gets the back to top button

let counter = document.getElementsByTagName('section').length; //the counter which gets it's value from sections no. and increases while they increase

// the function that adds  the first 4 links for starting the sectors of the page
function addStartingLinks() {
    for (let i = 1; i <= 4; i++) {
        let idd = "section" + i; //id of the section which it will point to
        let nameofsec = "Section " + i; ///the text to be in the link

        let astrt = document.createElement('a'); //creats a new link
        let listrt = document.createElement('li'); //creats a new list item to be added to

        const startingfrag = document.createDocumentFragment(); //creats a new document feragment to contain our link
        const strt = startingfrag
            .appendChild(astrt)
            .appendChild(listrt);

        //adding the attributes of the new link
        astrt.id = 'a' + nameofsec;
        astrt.href = '#' + idd;
        listrt.className = 'menu__link';
        listrt.textContent = nameofsec;
        astrt.className = 'aScroll';

        navB.appendChild(startingfrag); //appends the starting links to the navBar
    }
}

addStartingLinks();


//function that detectc that you are down by 120px to show the back to top button
function toTopFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

//got to top button function for smooth scrolling up
topBtn.onclick = function(e) {
    e.preventDefault();
    let destination = document.documentElement.scrollIntoView({
        behavior: "smooth"
    });
}


//the function to add a link in the navBar
function addli() {

    counter += 1;
    let idd = "section" + counter; //id of the section which it will point to
    let nameofsec = "Section " + counter; ///the text to be in the link


    let atoadd = document.createElement('a'); //creats a new link
    let litoadd = document.createElement('li'); //creats a new list item to be added to

    const lifrag = document.createDocumentFragment(); //creats a new document feragment to contain our link

    const li = lifrag
        .appendChild(atoadd)
        .appendChild(litoadd);

    //adding the attributes of the new link
    atoadd.id = 'a' + nameofsec;
    atoadd.href = '#' + idd;
    litoadd.className = 'menu__link';
    litoadd.textContent = nameofsec;
    atoadd.className = 'aScroll';

    //function that adds the smooth scrolling for the new links 
    atoadd.onclick = function(e) {
        e.preventDefault();
        let destination = document.querySelector(atoadd.getAttribute('href'));
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }

    navB.appendChild(lifrag); //appends the new link to the navBar

    addsec(); //calls the add section function
}

//funciton to add section
function addsec() {

    //the variables which creat the section's elements (section,div,h2,p)
    let ptoadd = document.createElement('p');
    let h2toadd = document.createElement('h2');
    let sectiontoadd = document.createElement('section');
    let divtoadd = document.createElement('div');

    let idd = "section" + counter; //id of the section
    let nameofsec = "Section " + counter; ///the text to be in the section header


    const secfrag = document.createDocumentFragment(); //creats a new document feragment to contain our link

    //adds the section's parts to the fragment
    const sec = secfrag
        .appendChild(sectiontoadd)
        .appendChild(divtoadd);
    divtoadd.appendChild(h2toadd);
    divtoadd.appendChild(ptoadd);
    //addss the section's attributes
    sectiontoadd.id = idd;
    sectiontoadd.dataset.nav = nameofsec;
    divtoadd.className = 'landing__container';
    //adds the section's content
    h2toadd.textContent = nameofsec;
    ptoadd.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    //appends the section the the page
    mainstuff.appendChild(secfrag);
}


//the function which detects weather the section is in  viewPort
window.onscroll = function() {


    document.querySelectorAll("section").forEach(function(active) { //selects all the sections in the page 

        let idd = 'a' + active.dataset.nav; //gets id of the link
        let activelink = document.getElementById(idd); //get the active link

        if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) { //if the section is active on screeen

            active.classList.add("active-class"); //adds the active-class to the section
            activelink.classList.add('activelnk'); //adds the active-class to the link
        } else { // if section is not active 
            active.classList.remove("active-class"); //removes the active-class from section
            activelink.classList.remove('activelnk'); //removes the active-class to the link
        }

    });

    toTopFunction();
};


secAddB.addEventListener('click', addli); //the add a random section button onClick function

//getting a links list to deal with
let anchorSelector = 'a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);

//function that adds the smooth scrolling for the existing starting links 
anchorList.forEach(link => {
    link.onclick = function(e) {

        e.preventDefault();
        let destination = document.querySelector(link.getAttribute('href'));

        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
