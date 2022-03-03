
async function callApi(url = '', method="GET",data = {}) {
   
    const response = await fetch(url, {
      method,
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
       
      },
     
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }
