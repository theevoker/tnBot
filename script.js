//var screen=document.getElementById("back")
//var myInput=document.getElementById("myInput");
//var hisInput=document.getElementById("hisInput");
function submitMy(){
    if(document.getElementById("myInput").value!==""){
        let message=document.createElement("p");
        message.setAttribute("class", "myMessage")
        let text=document.createTextNode(document.getElementById("myInput").value);
        document.getElementById("myInput").value='';
        message.appendChild(text);
        document.getElementById("back").appendChild(message);
    }
}
function submitHis() {
    if (document.getElementById("hisInput").value !== "") {
        let message = document.createElement("p");
        message.setAttribute("class", "hisMessage")
        let text = document.createTextNode(document.getElementById("hisInput").value);
        document.getElementById("hisInput").value='';
        message.appendChild(text);
        document.getElementById("back").appendChild(message);
    }
}
function send(message){
    let mess = document.createElement("p");
    mess.setAttribute("class", "hisMessage");
    let text = document.createTextNode(message);
    mess.appendChild(text);
    document.getElementById("back").appendChild(mess);
}