function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
let keys = Object.keys(PSUKIM_BAHOMER);
let start = false;
let book = 'בראשית';
let ans = true;
let pasuk = '';
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
    for(let i=0; i<keys.length; i++) {
        if (keys[i].slice(1).replaceAll('ו','').replaceAll('י','') === text.slice(1).replaceAll('ו','').replaceAll('י','') && text.charAt(0)===keys[i].charAt(0)) {
            send('לא נכון. הפסוק לא נמצא בספר ' + keys[i] + '.');
            return;
        }
    }
    send(text + ' אינו ספר בתנ"ך (אם זה בכל זאת ספר, יש לנסות איות אחר).');
}
function send_books(){
    send('תורה: בראשית, שמות, ויקרא, במדבר, דברים')
    send('נביאים ראשונים: יהושע, שופטים, שמואל, מלכים')
    send('נביאים אחרונים: ישעיהו, ירמיהו, יחזקאל')
    send('תרי-עשר: הושע, יואל, עמוס, עובדיה, יונה, מיכה, נחום, חבקוק, צפניה, חגי, זכריה, מלאכי')
    send('ספרי אמ"ת: תהלים, משלי, איוב')
    send('חמש מגילות: שיר השירים, רות, איכה, קהלת, אסתר')
    send('סוף כתובים: דניאל, עזרא, נחמיה, דברי הימים')
}
function check(text){
    text = text.trim()
    if(!start){
        start=true;
        ask();
        return;
    }
    else{
        ans = book.slice(1).replaceAll('ו','').replaceAll('י','') === text.slice(1).replaceAll('ו','').replaceAll('י','') && text.charAt(0)===book.charAt(0);
    }
    if (text==='דלג'){
        send('הפסוק נמצא בספר ' + book + '.');
        ask();
        return;
    }
    if (text==='ספרים'){
        send_books();
        return;
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
        let txt = document.getElementById("myInput").value
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