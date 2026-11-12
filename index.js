const ujJatekGomb=document.querySelector("#ujjatek")
const jatekterElem=document.getElementsByClassName("jatekter")
ujJatekGomb.addEventListener("click", megjelenit)
    function megjelenit(){
        const htmlKod = `
        <div id="gep">
            <h2>A gép tippjei</h2>
            <div class="kep">
                <img src="kepek/Képernyőkép 2026-11-12 093841.png" alt="kep">
            </div>
        </div>
        <div id="jatekos">
            <h2>A játékos tippjei:</h2>
            <div class="gombok">
                <button id="btn-ko">K</button>
                <button id="btn-papir">P</button>
                <button id="btn-ollo">O</button>
            </div>
            <div class="kep">
                <img src="kepek/ollo.PNG" alt="ollo">
            </div>
        </div>
        `;
   
        jatekterElem[0].innerHTML="";
        jatekterElem[0].insertAdjacentHTML("beforeend", htmlKod);
        const ujJatekGombok=document.querySelectorAll(".gombok Button")
        jatekGombok[0].addEventLisntener("click",kivalaszt)
}
function kivalasz(){
    console.log(event.target.id)
}