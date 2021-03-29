//alert("Connected...!");
var h = document.createElement('h1');
var myVal = document.createTextNode("Hello World");
h.appendChild(myVal);
document.querySelector('h1').appendChild(h);

var val = 5;

while (val > 0) {
    console.log(val)
    val = val - 1;
    //val--;


}

var btnobj = document.getElementById('add');
// btnobj.addEventListener('click',addfn)
btnobj.addEventListener('click',()=>{
    addfn();
})
function addfn() {

    var input = document.getElementById('input');
    var item = input.value;
   const  ul = document.getElementById('list');
    var Textnode = document.createTextNode(item);



    if (item == '') {
        return 0;
    }
    else {
        // create li    
        const li = document.createElement('li')
        li.setAttribute('class', 'mycheck');
        // create checkbox
        var mycheck = document.createElement('input'); // input tag create
        mycheck.type = 'checkbox'
        // create lable
        var lable = document.createElement('label');
        // lable.setAttribute('for', 'item'); // optional
        // add these elements on web page
        li.appendChild(mycheck);
        lable.appendChild(Textnode);
        li.appendChild(lable);
        ul.appendChild(li);
        
        // ul.insertBefore(li, ul.childNode[0]);
        // li.className = 'visual';

        input.value = '';
    }

}



var btnobj1 = document.getElementById('remove');
// btnobj.addEventListener('click',addfn)
btnobj1.addEventListener('click',()=>{
    remove();
})


function remove(){
    const  ul = document.getElementById('list');
li = ul.children
for(let index = 0; index<li.length;index++){

    if(li[index]&&li[index].children[0].checked){
        ul.removeChild(li[index]);


    }

}



}
