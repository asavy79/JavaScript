var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");

}





function swap() {
    let form = document.getElementById("form");
    let thanks = document.getElementById("thanks");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message2").value;

    let warning = document.getElementById("warning");

    if((name && email && message)) {

        thanks.classList.remove("hidden");

        form.style.display = "none";
    }


    
}