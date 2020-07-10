let bars = document.querySelector(".bars");

bars.addEventListener("click", function(){
	let aside = document.querySelector("aside");
	aside.classList.toggle("active");
});



let dropDown = document.querySelector(".angle");

dropDown.addEventListener("click", function(){
  let list = document.querySelector(".list");

  if (list.style.display === "none") {
  	list.style.display="block";
  }else{
  	list.style.display="none";
  }
});