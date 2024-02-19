document.addEventListener('DOMContentLoaded', function(){
    let button = document.querySelector('button');
    let taulu = document.querySelector('#rivit');
    button.addEventListener('click',luorivi);

    let rivimaara = 0;
    let maaraid = document.getElementById('tr');

    function luorivi(){
        let rivi = document.createElement('tr');
        for (let i=0;i<7;i++){
            let numero = Math.floor(Math.random()* 10);
            let ruutu = document.createElement('td');
            ruutu.textContent = numero;
            rivi.appendChild(ruutu);
        }
        taulu.appendChild(rivi);
        rivilaskuri();
    }
    function rivilaskuri() {
        rivimaara++;
        maaraid.textContent = "Valmiita rivejä: " + rivimaara;
    }
})