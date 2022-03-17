
const commercial = document.getElementById("commercial");
const nonComercial = document.getElementById("noncommercial");
const individual = document.getElementById("individual")
const nonprofit = document.getElementById("nonprofit")

const community = document.getElementById("community")
const education = document.getElementById("edu")

const question =document.getElementById("question");

const more = document.getElementById("morethanten");
const less = document.getElementById("lessthanten");

const studio= document.getElementById("studio");
// const userselection = document.getElementById("subtitle")

const indie= document.getElementById("indie");

const pricingBox = document.getElementById("pricingBox")


const selection = document.getElementById("title-breadcrumb")

const customization  = document.getElementById('customization')
const subs =document.getElementById('subscription')

const demo = document.getElementById("demo")

const dis = document.getElementById('disclaimer')
const reset = document.getElementById('breadcrumbs');

let selectionElements = [];
selectionElements  =[commercial,nonComercial, individual,nonprofit, more ,less]
//mouse over only for some elements
for(var i = 0; i<selectionElements.length; i++){
  selectionElements[i].onmouseenter =(event) =>{
    event.target.style.cursor = "pointer";
    event.target.style.opacity = '0.5'
  }
}
//mouse leave only for  some  elements
for(var i = 0; i<selectionElements.length; i++){
  selectionElements[i].onmouseleave =(event) =>{
    event.target.style.cursor = "pointer";  
    event.target.style.opacity = '1'
  }
}

commercial.addEventListener("click", function (){
  pricingBox.style.marginTop = `-10px`;
  pricingBox.style.transform = `translateY(${10+"px"}) `;
  
  commercial.classList.add("hide");
  nonComercial.classList.add("hide");
  more.classList.remove("hide");
  less.classList.remove("hide")
  selection.innerText = 'Commercial Use'
 
  question.innerText = 'How many employees does your company have?'
  reset.classList.remove("hide")

})

nonComercial.addEventListener("click",function(){
  pricingBox.style.marginTop = `-10px`;
  pricingBox.style.transform = `translateY(${10+"px"})`;
  console.log("click noncommercial")
  commercial.classList.add("hide");
  nonComercial.classList.add("hide");
  individual.classList.remove("hide");
  nonprofit.classList.remove("hide")
  selection.innerText = 'Non-Commercial Use'
  subs.classList.add('hide')
  question.innerText = 'Choose what applies to you'
  reset.classList.remove("hide")
  
})

nonprofit.addEventListener("click",function(){
  console.log("click nonprofit")
  individual.classList.add("hide");
  nonprofit.classList.add("hide");
  education.classList.remove("hide")
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  // userselection.classList.remove('hide');
  // userselection.innerText = '/ Non-profit'
  selection.insertAdjacentHTML('beforeend', "  / Non-profit")
  question.classList.add('hide')
})

individual.addEventListener("click",function(){
  console.log("click individual");
  individual.classList.add("hide");
  nonprofit.classList.add("hide");
  community.classList.remove("hide");
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  // userselection.classList.remove('hide');
  // userselection.innerText = ' / Individuals'
  selection.insertAdjacentHTML('beforeend', "  / Individuals")
  question.classList.add('hide')
})

more.addEventListener("click",function(){
  console.log("more");
  more.classList.add("hide");
  less.classList.add("hide")
  question.classList.add('hide')
  studio.classList.remove('hide')
  // userselection.innerHTML = '/ Companies'
  selection.insertAdjacentHTML('beforeend', " / Companies")
 
  // userselection.classList.remove('hide');
  customization.classList.remove('hide')
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  
})

less.addEventListener("click",function(){
  console.log("less");
  more.classList.add("hide");
  less.classList.add("hide")
  question.classList.add('hide')
  indie.classList.remove('hide')
  // userselection.innerHTML = '/ Indie Companies'
  selection.insertAdjacentHTML('beforeend', " / Indie Companies")
  // userselection.classList.remove('hide');
  customization.classList.remove('hide')
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  
})



reset.addEventListener("click",function(){
  pricingBox.style.marginTop = `0px`;
  pricingBox.style.transform = `translateY(${0+"px"})`;
  commercial.classList.remove("hide");
  nonComercial.classList.remove("hide");
  // userselection.classList.add('hide');
  more.classList.add('hide');
  less.classList.add('hide')
  individual.classList.add("hide");
  nonprofit.classList.add("hide")
  education.classList.add('hide')
  community.classList.add('hide')
  studio.classList.add('hide')
  indie.classList.add('hide')
  selection.innerText = 'Choose your license'
  
  question.innerText = 'Choose your license'

  question.classList.remove('hide')
  customization.classList.add('hide')
  subs.classList.add('hide')
  reset.classList.add('hide')
  demo.classList.add('hide')
})

function mouseOver(){

}