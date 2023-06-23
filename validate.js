/*First Input gets checked*/
  
  export  function MinLength(input, area, inputtarget, length){


  if(input.placeholder == inputtarget){

  if(input.value.length < length){

  area.innerText = "";
  let div = document.createElement("div");
  div.textContent = "You need at least " + length +" Characters, you have: " + input.value.length;
  input.style.border = "1px solid red";
  area.appendChild(div)

  return false; /*return false*/

}else{
  area.innerText = "";
  input.style.border = "1px solid green";
  return true;
}

console.log(input.value)
 
  
  }
  }
 

  export function CheckMail(input,area, inputtarget, character){

    if(input.placeholder == inputtarget){
    if(!input.value.includes(character)){
      area.innerText = "";
  let div = document.createElement("div");
  div.textContent = "You need a @ Character";
  input.style.border = "1px solid red";
  area.appendChild(div)

  return false;
}else{
  area.innerText = "";
  input.style.border = "1px solid green";
return true;
}

console.log(input.value)
  }
  }


 export function CheckPassword(input, area, inputtarget, length, password2check){

    if(input.placeholder == inputtarget){
      
    if(input.value.length < length){
      area.innerText = "";
 let  div = document.createElement("div");
  div.textContent = "You need at least " + length + " Characters, you have: " + input.value.length;
  input.style.border = "1px solid red";
  area.appendChild(div)
  console.log(input.value)
  console.log(input.value.length)
  console.log(false)
  return false; /*return false*/
}else{

  input.style.border = "1px solid gray";
  area.innerText = "";
  console.log(input.value)
  console.log(input.value.length)
  console.log(true)
  return true;
}
  /*
if(test == input.value){

}else{

  console.log(input.value)
  console.log(false)
}

}
*/

} 

  }



 export function CheckPass2(input, inputtarget, length, check1, area, input1){
    
    if(input.placeholder == inputtarget){

      console.log(input.value);

if(check1 == input.value && (check1 != "" && input.value != "")){

  console.log("same password")
  area.innerText = "";
  input.style.border = "1px solid green";
  input1.style.border = "1px solid green";
  return true;
      
}else{
  console.log("not same password")
  area.innerText = "not same password";
  input.style.border = "1px solid red";
  input1.style.border = "1px solid red";
  return false;
}

    }
  }
  