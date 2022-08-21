function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
let start = false;
let book = 'בראשית'
let ans = true
let pasuk = ''
function ask(){
    book = randomChoice(Object.keys(PSUKIM_BAHOMER));
    pasuk=randomChoice(PSUKIM_BAHOMER[book].split(":"));
    send(pasuk);
}
document.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'||event.key === 'Return') {
        submitMy();
    }
});
function correct(book){
    send('נכון מאוד! הפסוק נמצא בספר ' + book + '!');
    ask();
}
function incorrect(text){
    if(text in Object.keys(PSUKIM_BAHOMER)) {
        send('לא נכון. הפסוק לא נמצא בספר ' + text + '.');
    }
    else{
        send(text + 'אינו ספר בתנ"ך (אם זה בכל זאת ספר, יש לנסות איות אחר).')
    }
}
function check(text){
    if(!start){
        start=true;
        ask();
        return;
    }
    else{
        ans = book === text;
    }
    if(ans){
        correct(book);
    }
    else{
        incorrect(text);
    }
}

function submitMy(){
    if(document.getElementById("myInput").value!==""){
        var txt = document.getElementById("myInput").value
        let message=document.createElement("p");
        message.setAttribute("class", "myMessage");
        let text=document.createTextNode(txt);
        document.getElementById("myInput").value='';
        message.appendChild(text);
        document.getElementById("back").appendChild(message);
        let screen = document.getElementById("back");
        screen.scrollTop = screen.scrollHeight;
        check(txt);
    }
}
function send(message){
    let messa = document.createElement("p");
    messa.setAttribute("class", "hisMessage");
    let text = document.createTextNode(message);
    messa.appendChild(text);
    document.getElementById("back").appendChild(messa);
    let screen = document.getElementById("back");
    screen.scrollTop = screen.scrollHeight;
}