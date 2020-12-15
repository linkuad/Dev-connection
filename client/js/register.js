window.onload =_=>{
    inputs.email.addEventListener('input', () => showErase(inputs.email))
    inputs.nickname.addEventListener('input', () => showErase(inputs.nickname))
    inputs.password.addEventListener('input', () => showErase(inputs.password))
    inputs.password_ck.addEventListener('input', () => showErase(inputs.password_ck))
    
    inputs.email.addEventListener('focusout', () => inputChk(inputs.email))
    inputs.nickname.addEventListener('focusout', () => inputChk(inputs.nickname))
    inputs.password.addEventListener('focusout', () => inputChk(inputs.password))
    inputs.password_ck.addEventListener('focusout', () => inputChk(inputs.password_ck))

    inputs.email.addEventListener('focus', () => focus(inputs.email))
    inputs.nickname.addEventListener('focus', () => focus(inputs.nickname))
    inputs.password.addEventListener('focus', () => focus(inputs.password))
    inputs.password_ck.addEventListener('focus', () => focus(inputs.password_ck))
}

const inputs = {
    email : document.querySelector('input[name=email]'),
    nickname : document.querySelector('input[name=nickname]'),
    password : document.querySelector('input[name=password]'),
    password_ck : document.querySelector('input[name=password_ck]'),
}

const erase = ele =>{
    ele.parentNode.children[0].value = '';
    ele.parentNode.children[1].style.display = 'none';
    ele.parentNode.children[0].focus();
    ele.parentNode.children[2].innerHTML = '';
}

const showErase =ele=> {
    ele.parentNode.children[2].innerHTML = '';
    if(ele.value.length > 0){
        ele.parentNode.children[1].style.display = 'block';
    }else{
        ele.parentNode.children[1].style.display = 'none';
    }
}

const focus =ele=>{
    ele.parentNode.style.border = '1px solid #74C69D';
}

const inputChk =ele=>{
    let err = ele.parentNode.children[2];
    err.innerHTML = '';
    if(ele == inputs.email){
        var reg = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;;  
        if(!reg.test(ele.value)){
            err.innerHTML = '이메일을 잘못 입력했습니다.'
        }
    }else if(ele == inputs.nickname){
        var reg = /^[가-힣|a-z|A-Z|0-9|\*]{2,12}$/;
        if(!reg.test(ele.value)){
            err.innerHTML = '닉네임을 잘못 입력했습니다.'
        }
    }else if(ele == inputs.password){
        var reg = /(?=.*[a-zA-Z]+)(?=.*[0-9]+)(?=.*[`~!@@#$%^&*|₩₩₩'₩";:₩/?]+).{8,20}/
        if(!reg.test(ele.value)){
            err.innerHTML = '비밀번호는 대문자, 특수문자를 포함하여 8자 이상 입력해야 합니다.'
        }
    }else if(ele == inputs.password_ck){
        if(inputs.password.value != inputs.password_ck.value){
            err.innerHTML = '비밀번호를 다시 입력해주세요.'
        }
    }
    ele.parentNode.style.border = '1px solid #ddd';
}
