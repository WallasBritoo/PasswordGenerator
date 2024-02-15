function pswGenerate(){
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    let number = '1234567890';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let special = '!@#$%¨&*()_+{^}`>:<?';

    let legth = document.getElementById('pswLeght').value;   
    let qtd = document.getElementById('pswQtd').value;
    let spc = document.getElementById('special').checked;
    let numb = document.getElementById('number').checked;
    let upp = document.getElementById('upperCase').checked;

    password = password.concat(number);
    password = password.concat(upperCase);

    
    for(let y = 1; y <= legth; y++ ){
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alert(password);
}

function pswClean(){
    alert('apagar senha');
}