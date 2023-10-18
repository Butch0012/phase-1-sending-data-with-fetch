// Add your code here
/*const  configuaration= {
    method:"POST",
    headers :{
        "Content-type":"application/json",
        Accept:"application/json",

    },
    body:JSON.stringify({
        dogName:"kamasu",
        dogBreed:"mutina",

    })

};
  fetch("http://localhost:3000/dogs", configurationObject)*/
  function submitData(name, email) {
    // Create the data object with name and email
    const data = {
      name: name,
      email: email
    };
  
    // Create the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    };
  
    // Make the POST request to the specified URL
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        // Access the newly created ID and append it to the DOM
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        // Handle errors by displaying the error message on the DOM
        document.body.innerHTML = error.message;
      });
  }
  
  // Call the submitData function with name and email as arguments
  submitData("Elnathan", "elnathanmburu@gmail.com");
  