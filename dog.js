// fetch("https://dog.ceo/api/breeds/list/all")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

    // <!-- js for toggle menu -->

        const menuItems = document.getElementById("menuItems");

        MenuItems.style.maxHeight = "0px";

        function menuToggle() {
            if (menuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "200px";
            }
            else{
                menuItems.style.maxHeight = "0px";
            }
        }
