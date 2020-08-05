let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';
const newAnimal =  document.getElementById('animal').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
getAnimal(baseURL,newAnimal, apiKey)
}

// TODO-Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

