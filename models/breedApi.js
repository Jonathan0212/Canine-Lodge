fetch("https://dog-breeds2.p.rapidapi.com/dog_breeds", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dog-breeds2.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});