let usc=0;
let csc=0;
const choice=document.querySelectorAll(".opt");
const gencmpch=()=>{
     let options=["rock","paper","scissor"];
     let ind=Math.floor(Math.random()*3);
     return options[ind];
}
const pg=(userch)=>{
    let cs=gencmpch();
    console.log("Computer selected: ",cs);
    if(cs===userch)
       return 404;
    else if(cs=="rock"&&(userch=="paper"))
      return 1;
    else if(cs=="rock"&&(userch=="scissor"))
      return 0;
    else if(cs=="paper"&&userch=="rock")
       return 0;
    else if(cs=="paper"&&userch=="scissor")
      return 1;
    else if(cs=="scissor"&&userch=="paper")
       return 0;
    else if(cs=="scissor"&&userch=="rock")
      return 1;
    
}
choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        const userch=ch.getAttribute("id");
        console.log("user selected: ",userch);
        let res=pg(userch);
        if(res==1){
            usc++;
            document.querySelector("#us").innerText=usc;
            document.querySelector("#msg").innerText="You Win!!"
            document.querySelector("#msg").style.backgroundColor="green";
        }
        else if(res==0){
            csc++;
            document.querySelector("#cs").innerText=csc;
            document.querySelector("#msg").innerText="Sorry you lose!!"
            document.querySelector("#msg").style.backgroundColor="red";
        }
        else{
            document.querySelector("#msg").innerText="It's a draw!!"
            document.querySelector("#msg").style.backgroundColor="tan";
        }
    });
});