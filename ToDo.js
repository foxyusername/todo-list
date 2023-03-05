let textbox=document.getElementById('textbox');
let addbutton=document.getElementById('addbutton');
let listcontainer=document.getElementById('listcontainer');
let paragraph;
let container=document.getElementById('ndcontainer');
let okbutton=document.getElementById('button');

//Todo warning
okbutton.onclick=function(){
  container.style.display='none';
  //console.log('user has agreed to Todo warning')
}

//code for keyboard interaction (keypress)!!!!
textbox.addEventListener('keypress',function(e){
if(e.keyCode===13 && textbox.value===''){
 container.style.display='block';
 //console.log('user has not entered Todo')
}
   if(e.keyCode===13 && !(textbox.value==='')){
var paragraph=document.createElement('p');
    paragraph.innerText=textbox.value;
    listcontainer.appendChild(paragraph);
    textbox.value='';
    
   var mybutton=document.createElement('span');
   mybutton.innerHTML='X';
   paragraph.appendChild(mybutton);

mybutton.addEventListener('click',function(){
    listcontainer.removeChild(paragraph);
})
      paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
      })
     
 }
}
)  


//Code for mouse interaction (click)!!!!
addbutton.addEventListener('click',function(){
if(textbox.value===''){
  container.style.display='block';
  //console.log('user has not entered Todo')
}
if(!(textbox.value==="")){


   var paragraph=document.createElement('p');
     paragraph.innerText=textbox.value;
     listcontainer.appendChild(paragraph);
     textbox.value='';
     
    var mybutton=document.createElement('span');
    mybutton.innerHTML='X';
    paragraph.appendChild(mybutton);
 
 mybutton.addEventListener('click',function(){
     listcontainer.removeChild(paragraph);
 })
       paragraph.addEventListener('click',function(){
         paragraph.style.textDecoration='line-through';
       })
  }
}
 )  

