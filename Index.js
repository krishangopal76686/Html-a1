let inputBox = document.querySelector('.inputBox');
let clearbtn= document.querySelector('.Clearbtn');
let deletebtn = document.querySelector('.deletebtn');
let equalbtn = document.querySelector('.equalbtn');

const Add = (e)=>{
    inputBox.value = inputBox.value+=e;

}
clearbtn.onclick = ()=>{
    inputBox.value = "";
}

deletebtn.onclick=()=>{
    inputBox.value=inputBox.value.slice(0,-1);
}
equalbtn.onclick=()=>{
    if(inputBox.value.length>=1){
        try{
            inputBox.value=eval(inputBox.value);
        }
        catch(err){
            alert("Invalid value");
        }
    }else{
        alert("Please Add some value first");
    }
}