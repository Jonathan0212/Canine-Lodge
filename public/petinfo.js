
function handlePetSubmit(e) {
    e.preventDefault()
    console.log("adding")
    var petName=document.getElementById("petName").value
    console.log(petName)
    var breedType=document.getElementById("breedType").value
    console.log(breedType)
    var isMale=document.getElementById("maleInput").checked
   var gender=""
   if(isMale){
       gender="male"
   }else{gender="female"}
   console.log(gender)
   var allergies=document.getElementById("allergies").checked
   console.log(allergies)
}

window.addEventListener("DOMContentLoaded", function () {



    var petForm = document.getElementById("pet-form")
    petForm.addEventListener("submit", handlePetSubmit)
})