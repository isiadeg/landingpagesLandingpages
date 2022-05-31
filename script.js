function bota(){let sidemenuList = document.getElementsByClassName("sidemenu")[0].
getElementsByTagName("li");


let sideMenu = document.getElementsByClassName("sidemenu")[0];
if(sideMenu.className.includes("lpnosidedisplay")){
sideMenu.className = sideMenu.className.replace(/lpnosidedisplay/gi, "lpsidedisplay");
}else{
    sideMenu.className += " lpsidedisplay";
}

for(let i =0; i<sidemenuList.length; i++){
    
 sidemenuList[i].className += " zeropacit";
setTimeout(function(){
    
 sidemenuList[i].className += " naorunsoke";
 console.log("naorun")
}, i+1+0.8+(i*100))
}
}

function wole(){
    let sidemenuList = document.getElementsByClassName("sidemenu")[0].
getElementsByTagName("li");

for(let i =0; i<sidemenuList.length; i++){

 sidemenuList[i].className = sidemenuList[i].className.replace(/naorunsoke/gi, "");
 
 sidemenuList[i].className = sidemenuList[i].className.replace(/zeropacit/gi, "");
 console.log("naorun")

}
let sideMenu = document.getElementsByClassName("sidemenu")[0];
sideMenu.className = sideMenu.className.replace(/lpsidedisplay/gi, "lpnosidedisplay")

}

let featurearrow = document.getElementsByClassName("featurearrow");
let eachcontent = document.getElementsByClassName("eachexplanation");
const changepicture = (e)=>{
}
let secondimages = document.getElementsByClassName("secondimages")[0].
getElementsByTagName("img");
for(let i =0; i<featurearrow.length; i++){

featurearrow[i].addEventListener('click', function(){
    console.log(featurearrow.length);
for(let j =0; j<featurearrow.length; j++){
    if(eachcontent[j].className.includes("showaccord")){
            
        eachcontent[j].className = eachcontent[j].className.
        replace(/showaccord/gi, "hideaccord");
        featurearrow[j].innerHTML = `<i class="fas fa-chevron-right"></i>`;
        secondimages[j].style.display = "none";
    }else{
    }

}
    
        

        
            eachcontent[i].className = eachcontent[i].className.
            replace(/hideaccord/gi, "showaccord");
            featurearrow[i].innerHTML = `<i class="fas fa-chevron-down"></i>`;
            secondimages[i].style.display = "block";
        
    
});
}


let pricingtabs = document.getElementsByClassName("smalltabs")[0];

window.addEventListener('scroll', ()=>{
    if(window.innerWidth < 1024){
    let pricingtabstop = pricingtabs.getBoundingClientRect().top
    let pricing = document.getElementsByClassName("pricing")[0];
    let pricingoptions = document.getElementsByClassName("pricingoptions")[0];
    let pricingpos = pricing.getBoundingClientRect();

    if(pricingpos.bottom > (56+55+100)  && pricingtabstop < 56 &&
    //pricingpos.bottom < window.innerHeight + 10 &&
    pricingpos.top < 55){
        
        if(pricingtabs.className.includes("tabstop")){

        }else{
            pricingtabs.className += " tabstop";
            pricing.style.paddingBottom = "55px";
            pricingoptions.style.
            paddingTop = "85px";
            
        }
    }else{
        if(pricingtabs.className.includes("tabstop")){
            pricingtabs.className = pricingtabs.className.replace(/tabstop/gi, "");
            pricing.style.paddingBottom = " ";
            pricingoptions.style.
            paddingTop = "";
        }else{
            
        }

    }}
    let lpfirstpage = document.getElementsByClassName("lpwrapper")[0];
    let lpfirstpagepos = lpfirstpage.getBoundingClientRect();
    let header = document.getElementsByClassName("header")[0];
    if(lpfirstpagepos.bottom < 5){
        console.log("chai");
        if(header.className.includes("fixedheader")){

        }else{
            header.className += " fixedheader";
        }
    }else{
        if(header.className.includes("fixedheader")){
            header.className = header.className.replace(/ fixedheader/gi, "")
        }else{
            
        }
    }
    let steps = document.getElementsByClassName("steps")[0];
    let stepspos = steps.getBoundingClientRect();
    let sidecount = document.getElementsByClassName("sidecount")[0];
    let counts = document.getElementsByClassName("counts");
    
    let eachstep = document.getElementsByClassName("eachstep");

    if(stepspos.top <= 0 && stepspos.bottom > window.innerHeight
        ){
            if(!sidecount.className.includes("countde")){
                sidecount.className += " countde";
                for(let k = 0; k < eachstep.length; k++){
                    eachstep[k].className += " dechstep";
                }
            }
    }else{
        
        if(sidecount.className.includes("countde")){
            sidecount.className = sidecount.className.replace(/countde/gi, "")
            for(let k = 0; k < eachstep.length; k++){
                eachstep[k].className = eachstep[k].className.replace(/dechstep/gi, "");
            }
        }
    }

    for(let n=0; n < eachstep.length; n++){
        let eachsteppos = eachstep[n].getBoundingClientRect();
        if(eachsteppos.top > 0 && 
            eachsteppos.bottom < window.innerHeight){
                for(let m = 0; m<counts.length; m++){
                    
                if(counts[m].className.includes("activecounts")){
                    counts[m].className =
                    counts[m].className.replace(/activecounts/gi, "");
                }
                }
                if(!counts[n].className.includes("activecounts")){
                    counts[n].className += " activecounts"
                }
            }
    }

})

let querysel = document.querySelector(".pricingarrow");
let pricingarrow = document.getElementsByClassName("pricingfeaturetitle");
let pricingfeatureexplanation = document.getElementsByClassName("pricingfeatureexplanation");

for(let j = 0; j < pricingarrow.length; j++){

pricingarrow[j].addEventListener("click", (e)=>{
    //console.log(e.target.className);
if(e.target.className === "pricingtitlewords"){
    //console.log(e.path[2]); 
    for(let i = 0; i < pricingarrow.length; i++){
        if( pricingfeatureexplanation[i] !== e.path[2].children[1] ){
        if(pricingfeatureexplanation[i].className.includes("si")){
            pricingfeatureexplanation[i].className = 
            pricingfeatureexplanation[i].className.replace(/si/gi, ""); 
        
        }}
    }

    if(e.path[2].children[1].className.includes("si")){
        e.path[2].children[1].className = 
        e.path[2].children[1].className.replace(/si/gi, ""); 
    }else{
e.path[2].children[1].className += " si"

}}
else if(e.target.className === "pricingfeaturetitle"){
//console.log(e.path[1])
for(let i = 0; i < pricingarrow.length; i++){
    if( pricingfeatureexplanation[i] !== e.path[1].children[1] ){
    if(pricingfeatureexplanation[i].className.includes("si")){
        pricingfeatureexplanation[i].className = 
        pricingfeatureexplanation[i].className.replace(/si/gi, ""); 
    
    }}
}

if(e.path[1].children[1].className.includes("si")){
    e.path[1].children[1].className = 
    e.path[1].children[1].className.replace(/si/gi, ""); 
}else{
e.path[1].children[1].className += " si"

}
}else if(e.target.className === "fas fa-chevron-right"){
    //console.log(e.path[3])
    for(let i = 0; i < pricingarrow.length; i++){
        if( pricingfeatureexplanation[i] !== e.path[3].children[1] ){
        if(pricingfeatureexplanation[i].className.includes("si")){
            pricingfeatureexplanation[i].className = 
            pricingfeatureexplanation[i].className.replace(/si/gi, ""); 
        
        }}
    }

    if(e.path[3].children[1].className.includes("si")){
        e.path[3].children[1].className = 
        e.path[3].children[1].className.replace(/si/gi, ""); 
    }else{
e.path[3].children[1].className += " si"

}
}
})
}