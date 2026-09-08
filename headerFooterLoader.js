//Loads header at the top of each page
fetch("/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("headerFillIn").innerHTML = data;
    });

//Loads footer at the bottom of each page
fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footerFillIn").innerHTML = data;
    });