function pswGenerate(){

    let password = '';
    let legth = document.getElementById('pswLeght').value;   
    let qtd = document.getElementById('pswQtd').value;
    let spc = document.getElementById('special').checked;
    let numb = document.getElementById('number').checked;
    let upp = document.getElementById('upperCase').checked;
    
    for(let y = 1; y <= legth; y++ ){
        password = password + 'a';
    }
    alert(password);
}

function pswClean(){
    alert('apagar senha');
}