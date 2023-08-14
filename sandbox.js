function required(){
    let task = document.getElementById('userfriendly');
    let userfriendly=document.getElementById('name');
    let li=document.createElement('li');
    li.innerHTML=userfriendly.value;
    task.appendChild(li);
}
