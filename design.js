const weapon = "https://api.harvardartmuseums.org/object?page=1571&apikey=69722951-0855-4881-85a9-5f645f0a3b6f&size=1&hasimage=1&imagepermissionlevel=0&classification=Weapon"
const sculpture = "https://api.harvardartmuseums.org/object?page=1571&apikey=69722951-0855-4881-85a9-5f645f0a3b6f&size=1&hasimage=1&imagepermissionlevel=0&classification=Sculpture"
const jewelry = "https://api.harvardartmuseums.org/object?page=1571&apikey=69722951-0855-4881-85a9-5f645f0a3b6f&size=1&hasimage=1&imagepermissionlevel=0&classification=Jewelry"


fetch(sculpture) 
    .then(res => res.json())
    .then(response=> {
        console.log(response.records[0].url)
    })

    fetch(weapon)
    .then(response => response.json())
    .then(response => {
 //       console.log(response)
        weapons = response
        let randomImage = document.querySelector("#randomImage")
        for(i=0; i<weapons.records.length; i++){
            console.log(weapons.records[i].baseimageurl)
            let weaponElement = document.createElement("img")
            weaponElement.setAttribute("src", weapons.records[i].baseimageurl)
            weaponElement.setAttribute("width", 250)
            weaponElement.setAttribute("height", 200)
            randomImage.appendChild(imageElement)
        }
    })




    fetch(sculpture)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        sculptures = response
        let randomSculpture = document.querySelector("#randomSculpture")
        for(i=0; i<sculptures.records.length; i++){
            console.log(sculptures.records[0].url)
            let sculptureElement = document.createElement("img")
            sculptureElement.setAttribute("src", sculptures.records[i].baseimageurl)
            sculptureElement.setAttribute("width", 250)
            sculptureElement.setAttribute("height", 200)
            randomSculpture.appendChild(sculptureElement)
        }
    })



    fetch(jewelry)
    .then(response => response.json())
    .then(response => {
        jewels = response
        let randomJewelry = document.querySelector("#randomJewelery")
        for(i=0; i<jewels.records.length; i++){
            console.log(jewels.records[i].baseimageurl)
            let jewelElement = document.createElement("img")
            jewelElement.setAttribute("src", jewels.records[i].baseimageurl)
            jewelElement.setAttribute("width", 250)
            jewelElement.setAttribute("height", 200)
            randomJewelery.appendChild(imageElement)
        }
    })





var accordion = document.querySelectorAll(".accordion");
//console.log(accordion)
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
let personImage = document.querySelector(".personImage")

