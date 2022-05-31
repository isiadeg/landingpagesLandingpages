function gotosodiqPrevious(){
    let disabledornot = document.getElementById("previous");
    let secondisable = document.getElementById("next");
    if(!disabledornot.className.includes("disabled")){
        if(secondisable.className.includes("disable")){
            secondisable.className = 
            secondisable.className.
            replace(/disable/gi, "")
        }
        let disabledornotsmall = document.getElementById("previoussmall");
        let secondisablesmall = document.getElementById("nextsmall");
                if(secondisablesmall.className.includes("disable")){
                secondisablesmall.className = 
                secondisablesmall.className.
                replace(/disable/gi, "")
            }


    let before;
    let now;
    let allwrapperAbs = document.getElementsByClassName("absolutes");
    let ball = document.getElementsByClassName("circlespacebetween");
   let nowball;
    for(let i = 0; i<allwrapperAbs.length; i++){
        if(allwrapperAbs[i].className.includes("intoview") ||
        allwrapperAbs[i].className.includes("view")){
            before = allwrapperAbs[i]
            now = allwrapperAbs[i-1];
            nowball = ball[i-1];
            if(i-1 <= 0){
                disabledornot.className += " disabled";
							disabledornotsmall.className += " disabled";
            }else{

            }
            before.className = before.className.replace(/intoview/gi, "");
            i=allwrapperAbs.length;
        }
    }

    if(before.className.includes("slidefromright")){
        before.className = before.className.replace(/slidefromright/gi, "slideoffright");
    }
    else if(before.className.includes("slidefromleft")){
        before.className = before.className.replace(/slidefromleft/gi, "slideoffright");
   
    }
    else if(before.className.includes("view")){
        before.className = before.className.replace(/view/gi, "slideoffright");
    }else{
        before.className += " slideoffright";
    }

    if(now.className.includes("slideoffleft")){
        now.className =now.className.replace(/slideoffleft/gi, "slidefromleft")
    }else{
        now.className +=" slidefromleft";
    }
    now.className += " intoview"

    for(let i=0; i<ball.length; i++){
        ball[i].style.backgroundColor = "white";
        ball[i].getElementsByClassName("innercircle")[0].
        style.backgroundColor = "#eee";
    
    }
    nowball.style.backgroundColor = "#ffcc00";
    nowball.getElementsByClassName("innercircle")[0].
    style.backgroundColor = "#c9a61b";
  return true;
}else{
    return false;
}
}



function gotosodiqNext(){
    let disabledornot = document.getElementById("next");
    let secondisable = document.getElementById("previous");
    
    if(!disabledornot.className.includes("disabled")){
        if(secondisable.className.includes("disable")){
            secondisable.className = 
            secondisable.className.
            replace(/disable/gi, "")
        }
			let disabledornotsmall = document.getElementById("nextsmall");     
   let secondisablesmall = document.getElementById("previoussmall");                    if(secondisablesmall.className.includes("disable")){                secondisablesmall.className =                 secondisablesmall.className.                replace(/disable/gi, "")            }    
    let before;
    let now;
    let allwrapperAbs = document.getElementsByClassName("absolutes");
    let ball = document.getElementsByClassName("circlespacebetween");
   let nowball;
    for(let i = 0; i<allwrapperAbs.length; i++){
        if(allwrapperAbs[i].className.includes("intoview") ||
        allwrapperAbs[i].className.includes("view") ){
            before = allwrapperAbs[i]
            now = allwrapperAbs[i+1];
            nowball = ball[i+1];
            if(i+1 >= allwrapperAbs.length-1){
                disabledornot.className += " disabled";
	disabledornotsmall.className += " disabled";
            }else{

            }
            before.className = before.className.replace(/intoview/gi, "");
            i=allwrapperAbs.length;
        }
    }

    if(before.className.includes("slidefromleft")){
        before.className = before.className.replace(/slidefromleft/gi, "slideoffleft");

        
    }
    else if(before.className.includes("slidefromright")){
        before.className = before.className.replace(/slidefromright/gi, "slideoffleft");
  
    }
    else if(before.className.includes("view")){
        before.className = before.className.replace(/view/gi, "slideoffleft");
    }else{
        before.className += " slideoffleft";
    }

    if(now.className.includes("slideoffright")){
        now.className =now.className.replace(/slideoffright/gi, "slidefromright")
    }else{
        now.className +=" slidefromright";
    }
    now.className += " intoview";

    for(let i=0; i<ball.length; i++){
        ball[i].style.backgroundColor = "white";
        ball[i].getElementsByClassName("innercircle")[0].
        style.backgroundColor = "#eee";
    
    }
    nowball.style.backgroundColor = "#ffcc00";
    nowball.getElementsByClassName("innercircle")[0].
    style.backgroundColor = "#c9a61b"
    return true;
}else{
    return false;
}
}

function gotosodiq(number){
    let allwrapperAbs = document.getElementsByClassName("absolutes");
    
    for(let i = 0; i<allwrapperAbs.length; i++){
        if(allwrapperAbs[i].className.includes("intoview") ||
        allwrapperAbs[i].className.includes("view")){
            before = i;
            i=allwrapperAbs.length;
        }
    }

    let diff = number-before;
    if(diff>0){
        gotosodiqNext();
        diff--;
        if(diff > 0 ){
       let intie =  setInterval(() => {
            gotosodiqNext();
            diff--;
            
        if(!diff > 0 ){
            clearInterval(intie);
        }
        }, 100);
    }
        
    }
    else if(diff < 0){
        gotosodiqPrevious();
        diff++;
        if(diff != 0 ){
            console.log(diff);
            let intie =  setInterval(() => {
                 gotosodiqPrevious();
                 diff++;
                 console.log(diff);
             if(diff == 0 ){
                 console.log(diff);
                 clearInterval(intie);
             }
             }, 100);
         }
    }
}

function readmore(){
    
    if(document.getElementsByClassName("view")[0]){
let touse = document.getElementsByClassName("view")[0].
getElementsByClassName("story")[0].innerText;

document.getElementsByClassName("story3")[0].innerText = touse;
    }else{
        let touse = document.getElementsByClassName("intoview")[0].
getElementsByClassName("story")[0].innerText;

document.getElementsByClassName("story3")[0].innerText = touse;

    }
    document.getElementsByClassName("story3")[0].className += " showthem";
 document.getElementsByClassName("allwithclose")[0].className += " showthem";
 
 document.getElementsByClassName("closing")[0].className += " showthem flexi";  
}
function closepopup(){
    document.getElementsByClassName("story3")[0].className = 
    document.getElementsByClassName("story3")[0].className.replace(/showthem/gi, ""); 
    
    document.getElementsByClassName("allwithclose")[0].className  = 
    document.getElementsByClassName("allwithclose")[0].className.replace(/showthem/gi, "");
    document.getElementsByClassName("closing")[0].className =

    document.getElementsByClassName("closing")[0].className.replace(/showthem/gi, "");
	    document.getElementsByClassName("closing")[0].className =

    document.getElementsByClassName("closing")[0].className.replace(/flexi/gi, "");
   
}

function rotateright(){
    setTimeout(()=>{
    if(gotosodiqNext()){
        rotateright();
    }else{
      //  gotosodiq(0);
        //rotateright();
        rotateleft();
    }}, 6000)
}
rotateright();

function rotateleft(){
    setTimeout(()=>{
    if(gotosodiqPrevious()){
        rotateleft();
    }else{
        rotateright();
    }}, 6000)
}

function tabclick(number){
    let alltabs = document.getElementsByClassName("eachtabs");
    let whichtab = document.getElementsByClassName("eachtabs")[number];
    let tab = document.getElementsByClassName("eachpricing")[number];
    let tabpos = tab.getBoundingClientRect();
    for(let i =0; i<alltabs.length; i++){
        if(alltabs[i].className.includes("tabclick")){
            alltabs[i].className = alltabs[i].className.replace(/tabclick/gi, "");
        }
    }

    if(!alltabs[number].className.includes("tabclick")){
        alltabs[number].className += " tabclick";
    }
    
       //console.log("scrolling");
        tab.scrollIntoView();
       window.scrollBy(0, -110);
       
if(tabpos.left > 20){
   
    
        //console.log(tabpos.left);
    document.getElementsByClassName("pricingoverflow")[0].
    scrollBy(40, 0);
    //console.log(tabpos.left);
}else if(tabpos.left < 20){
          //console.log(tabpos.left);
          document.getElementsByClassName("pricingoverflow")[0].
          scrollBy(-40, 0);
          //console.log(tabpos.left);
}else{

}     
}
let listenPriceOverflowFirst = document.getElementsByClassName("pricingoverflow")[0];
console.log(listenPriceOverflowFirst);
listenPriceOverflowFirst.addEventListener('scroll', ()=>{
    //console.log("hi");
    let alltabs = document.getElementsByClassName("eachtabs");
    let tab = document.getElementsByClassName("eachpricing");
    
  for(let i =0; i<tab.length; i++){
    let tabpos = tab[i].getBoundingClientRect();
        if(tabpos.left > 0 && tabpos.right < window.innerWidth){
            //console.log("how far");
            for(let j =0; j<alltabs.length; j++){
              if(alltabs[j].className.includes("tabclick")){
                  alltabs[j].className = alltabs[j].className.replace(/tabclick/gi, "");
              }
            }
            
            if(!alltabs[i].className.includes("tabclick")){
              alltabs[i].className += " tabclick";
            }
        }
    }

})

    

