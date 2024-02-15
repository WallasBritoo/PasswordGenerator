function pswGenerate(){
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';  
    let legth = document.getElementById('pswLeght').value;   
    let qtd = document.getElementById('pswQtd').value;
    let spc = document.getElementById('special').checked;
    let numb = document.getElementById('number').checked;
    let upp = document.getElementById('upperCase').checked;

    if(spc == true){characters += '!@#$%¨&*()_+{^}`>:<?';}
    if(numb == true){characters +='1234567890';}
    if(upp == true){characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}

    
    for(let y = 1; y <= legth; y++ ){
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alert(password);



}

function pswClean(){
    alert('apagar senha');
}