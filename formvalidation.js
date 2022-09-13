const inputs =document.querySelectorAll('input');

const pattern = {
    telephone : /^\d{11}$/,
    username : /^[a-z\d]{5,12}$/i,
    password : /^[\w@-]{8,20}$/,
    slug : /^[a-z\d-]{8,12}$/
};

//validation function
function validation(regex,field){

    if(regex.test(field.value)){
        field.className='valid';
    }else{
        field.className='invalid';
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{        
        validation(pattern[e.target.attributes.name.value],e.target)
    });
});