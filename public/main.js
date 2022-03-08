var host="http://localhost:3000/"
host= "https://canine-lodge.herokuapp.com/"
async function callApi(path= '', method="GET",data ) {
   
    const response = await fetch(host + path, {
      method,
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
       
      },
     
      referrerPolicy: 'no-referrer', 
      body: data && JSON.stringify(data) 
    });
    return response.json(); 
  }
