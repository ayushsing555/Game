var play=document.getElementById("play");
play.addEventListener("click",ludo);
   function ludo(){
   var name1=document.getElementById("play1").value.toUpperCase();
   var name2=document.getElementById("play2").value.toUpperCase();
   document.getElementById("h31").innerHTML=name1;
   document.getElementById("h32").innerHTML=name2;
   var display1=document.getElementById("play1");
   var display2=document.getElementById("play2");
   display1.style.display="none";
   display2.style.display="none";   
   var a=document.getElementById("player1");
   var d=document.getElementById("player2");
   var b=['one','two','three','four','five','six'];
   var c=Math.floor(Math.random()*6);
   a.src=`${b[c]}.png`;
   var e=Math.floor(Math.random()*6);
   d.src=`${b[e]}.png`;
   if(c==e)
     document.getElementById("show").innerHTML="DRAW";
    else if(c>e)
      document.getElementById("show").innerHTML=`${name1}  WON`;
    else
     document.getElementById("show").innerHTML=`${name2}  WON`;
         
}