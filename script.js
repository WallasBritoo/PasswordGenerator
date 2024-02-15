function pswGenerate(){
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    let passwordS = '';  
    let legth = document.getElementById('pswLeght').value;   
    let qtd = document.getElementById('pswQtd').value;
    let spc = document.getElementById('special').checked;
    let numb = document.getElementById('number').checked;
    let upp = document.getElementById('upperCase').checked;

    if(spc == true){characters += '!@#$%¨&*()_+{^}`>:<?';}
    if(numb == true){characters +='1234567890';}
    if(upp == true){characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}

    for(let x = 1; x <= qtd; x++){
        password = '';
        for(let y = 1; y <= legth; y++ ){
            password = password + characters.charAt(Math.floor(Math.random() * characters.length));
        }
            passwordS = password + '\n' + passwordS
    }
    //console.log(passwordS);
    //alert(password);

    document.getElementById('answer').value = passwordS;
}

function pswClean(){
    //alert('apagar senha');
    document.getElementById('answer').value = '';

}