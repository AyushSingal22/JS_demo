const sc1 = document.querySelector(".sc-1");
const sc2 = document.querySelector(".sc-2");
const btnp1 = document.querySelector("#p1");
const btnp2 = document.querySelector("#p2");
const btnreset = document.querySelector("#reset");
let p1_score =0;
let p2_score =0;
btnp1.addEventListener('click', ()=>{
    if(p1_score==5 || p2_score==5){
        btnp1.classList.add("disabled");
        btnp2.classList.add("disabled");
    }
    else{
        sc1.innerHTML = ++p1_score;

    }
 
})
btnp2.addEventListener('click', ()=>{
    if(p1_score==5 || p2_score==5){
        btnp1.classList.add("disabled");
        btnp2.classList.add("disabled");
        
    }
    else{
        sc2.innerHTML = ++p2_score;
    }
    
})
btnreset.addEventListener("click",()=>{
    sc1.innerHTML = "0";
    p1_score=0;
    p2_score=0;
    sc2.innerHTML ="0" 
    
        btnp1.classList.remove("disabled");
        btnp2.classList.remove("disabled");
    
})