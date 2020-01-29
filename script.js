alert("Hello!");
const a = document.getElementById('hello');

 a.addEventListener( "click" , greeting);

 function greeting(eve) {
      console.log("test");
      console.log(eve);
      a.textContent = "changed!";
 }
