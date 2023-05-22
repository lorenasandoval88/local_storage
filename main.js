var box = document.querySelector('input')

var header = document.querySelector("h2");
header.innerHTML = localStorage.getItem('value')

box.addEventListener('keyup', display)

function display(){
        console.log(box.value)
        localStorage.setItem('value',box.value)
        //header.innerHTML = box.value;
        header.innerHTML = localStorage.getItem('user1')
        //header.innerHTML = localStorage.getItem('value')

}



  function giveUsers() {

    for (let i = 0; i < 3; i++) {
        console.log("i",i)
    fetch('https://randomuser.me/api/')
      .then(function (response) {
        console.log("response",response)
        return response.json();
    })
  
    .then(function (data) {
      showUsers(data.results);
      console.log("data",data)

    })
  
    .catch(function (error) {
      console.log("error", error);
    });
  
    let showUsers = (users) => {
        users.forEach(user => {       
      
          localStorage.setItem('user1', JSON.stringify(user));  
      
        });
      };  
      console.log("localStorage.getItem('user')",localStorage.getItem('user1'));  

    }}
  if(localStorage.getItem('user1')){
    console.log("line47 if(localStorage.getItem(user1",localStorage.getItem('user1'));
  }

  giveUsers()