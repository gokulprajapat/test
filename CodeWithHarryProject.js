const name1=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

name1.addEventListener('blur',()=>{
    let regex=/^[a-zA-Z][a-zA-Z0-9]{2,10}/;
    let str=name1.value;
    if(regex.test(str)){
        console.log('valid');
    }
    else{
        console.log('invalid');
    }
});

email.addEventListener('blur',()=>{
    console.log('email is blurred');
});

phone.addEventListener('blur',()=>{
    console.log('phone is blurred');
});
