const cube = document.getElementById("cube");
const cube2 =document.getElementById("cube2");
const result = document.getElementById("result");
const game = document.getElementById("game");
var j = 0;
let hod = 1;
let hody = [];


function headerChange(){
    var Hcolor=document.getElementById("nadpis");
    var txtcolor=["red","blue"];
    Hcolor.style.color=txtcolor[j];
    j=(j+1)%txtcolor.length;
}
    setInterval(headerChange,400);


game.addEventListener("click", function(){
    hod = Math.ceil(Math.random() * 6);
    hod2 = Math.ceil(Math.random() * 6);
    hody.push(hod);
    hody.push(hod2);
    cube.src = "img/kostka" + hod + ".png";
    cube2.src = "img/kostka" + hod2 + ".png";
    console.log("Alea iacta est...")
    vypisStatistiky();
})

function suma(){
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function vypisStatistiky(){
    result.innerHTML = `<p>Poslední hod: ${hod}</p>`;
    result.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    result.innerHTML += `<p>Součet: ${suma()}</p>`;
    result.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
}

