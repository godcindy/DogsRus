// const quotedisplay = document.querySelector('.fact-container');
// const btn = document.querySelector('.btn');

// function getData() {

//     fetch('https://dogapi.dog/api/v1/facts')
//         .then((response) => response.json())
//         .then((data) => {

//             const fact = data.facts[0];
            
//             quotedisplay.innerHTML = `<p>${fact}</p>`;
//         })
//         .catch(error => {
//             console.error('Error fetching data', error);
//         })

// }
// document.addEventListener('click', getData)





<!-- js for toggle menu -->

const menuItems = document.getElementById("menuItems");

MenuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}







account page this allows indicator/line to move from left to right and give you correct window based on choice/
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const indicator = document.getElementById("indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}



