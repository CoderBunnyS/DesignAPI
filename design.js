const urlPerson = "https://api.harvardartmuseums.org/person?apikey=69722951-0855-4881-85a9-5f645f0a3b6f"
const urlColor = "https://api.harvardartmuseums.org/color?apikey=69722951-0855-4881-85a9-5f645f0a3b6f"
const urlVideo = "https://api.harvardartmuseums.org/video?apikey=69722951-0855-4881-85a9-5f645f0a3b6f"
let personImage = document.querySelector(".personImage")

fetch(urlPerson)
    .then(resPerson => {
        console.log(resPerson)
        .then(resPerson => personImage.src = resPerson[0].url) 
    })
    .catch(errPerson => {
        console.log(errPerson)
    })

fetch(urlColor
        )
    .then(resColor => {
        console.log(resColor)
        return resColor.json() 
    })
    .catch(errColor => {
        console.log(errColor)
        return errColor.json()
    })

fetch(urlVideo)
    .then(resVideo => {
        console.log(resVideo)
        return resVideo.json() 
    })
    .catch(errVideo => {
        console.log(errVideo)
        return errVideo.json()
    })

var accordion = document.querySelectorAll(".accordion");
console.log(accordion)
var i

for (i=0; i< accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}


