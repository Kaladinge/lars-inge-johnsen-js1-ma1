// JavaScript 1 - MA1

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

console.log(cat.complain);


//question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//question 3

heading.style.fontSize = "2em";


//question 4

heading.classList.add("Subheading");


//question 5

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


//question 7

function catName(list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catName(cats);


//question 8

function createCats(cats) {
    let html = "";

    for (i = 0; i < cats.length; i++) {

         let age = "Age unknown";
    if ((cats[i].age) && (cats[i].age !== true)) {
        age = cats[i].age;
    }

        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${age}</p>
                </div>
                `;
    }
    return html;
}

const container = document.querySelector(".cat-container");

let result = createCats(cats);

container.innerHTML = result;