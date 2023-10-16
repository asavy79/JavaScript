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



const scriptURL = 'https://script.google.com/macros/s/AKfycbwPAumC0XSM29JHNZxyfXA4z5uI07nTZbmNVfjK92kF2GgAVmcP-JCM5jdR3DvxDG4d/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })



function swap() {
    let form = document.getElementById("form");
    let thanks = document.getElementById("thanks");


    thanks.classList.remove("hidden");

    form.style.display = "none";

    
}