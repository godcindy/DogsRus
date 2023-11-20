const btn = document.getElementById("btn");

function fetchDogFact() {

fetch("https://dogapi.dog/api/v2/facts")
  .then((response) => response.json())
  .then((data) => {
   for (const fact of data) {
    const factElement = document.createElement("p");
    factElement.textContent = fact.fact;
    factsContainer.appendChild(factElement);
   }
  })
  .catch((error) => {
    console.error(error);
    btn.textContent = "An error occurred.";
  });
}
btn.addEventListener("click", fetchDogFact);



// // calling/fetching my dog facts api 
// fetch("https://dogapi.dog/api/v2/facts")

// // this tells it next steps. tellling it to pull response from the api and then parse out the info from response. my second then processes the data that was parsed out and console logs. The catch handles any errors that occur during the request or teh processing of the data. the error will be pulled and console logged if it exists.
// .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error){
//     console.log(error);
// });





// <!-- js for toggle menu -->

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

// account page this allows indicator/line to move from left to right and give you correct window based on choice/
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

