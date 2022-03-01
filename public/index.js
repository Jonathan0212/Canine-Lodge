function handleSubmit(e) {
    e.preventDefault()
  var email=document.getElementById("inputEmail").value

  var password=document.getElementById("inputPassword").value



  
  var body={email,password}
  console.log(body)
}

window.addEventListener("DOMContentLoaded", function () {
    var signInForm = document.getElementById("sign-in")
    signInForm.addEventListener("submit", handleSubmit)


})

