const send = ()=>{
    const xhttp = new XMLHttpRequest();
   
    xhttp.open("get","https://localhost:3000/");
     //xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    
    xhttp.onreadystatechange = ()=>{
        if(xhttp.status == 200 && xhttp.readyState == 4){
            console.log(xhttp.responseText);
        }
    }
    xhttp.send(null);
}
window.onload = ()=>{
    
let btnMail = document.getElementById("submitMail");

btnMail.onclick = ()=>{
    send();
}
}