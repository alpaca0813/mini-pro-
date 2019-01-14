var timer=0;
var speed=1000;
var gameFlag=false;
var number;
var maxNumber=0;
var count=2;
var correctAns=0;
var answr="";
var correctCnt=0;
function sutarto() {
        if(gameFlag==false){
                correctAns=0;
                answr="";
                document.getElementById('number').innerHTML="&nbsp;";
                maxNumber=100*(correctCnt+1);
                speed=1500;
                timer=setInterval("nextCount();", speed);
                gameFlag=true;
        }
}
function nextCount() {
        if(count>=0){
                number=Math.floor(Math.random()*maxNumber+1);
                correctAns=correctAns+number;
                document.getElementById('number').innerHTML=number;
                count-=1;
        }
        else{
                gameFlag=false;
                clearInterval(timer);
                document.getElementById('number').innerHTML="&nbsp;";
                count=2;
        }
}


function risetto() {
        answr="";
        document.getElementById('butan').innerHTML="&nbsp;";
}
function kotae() {
        if(gameFlag==false && kaito!=""){
                if(correctAns==answr){
                        correctCnt+=1;
                        (confirm("このぐらいはできて当たり前だよねSFC生だもんね！")==true)
                        location.href = "http://web.sfc.keio.ac.jp/~s17574yh/minipro/mini_pro_page2.html";
}
else {
alert('やーいやーい能無し〜');
}
}
}
