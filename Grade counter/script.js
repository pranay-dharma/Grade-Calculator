const calculate = () => {
    let HTML = document.getElementById("html").value;
    let CSS = document.getElementById("css").value;
    let JavaScript = document.getElementById("js").value;
    let ReactJS = document.getElementById("react").value;
    
    let grades = "";

   let totalGrades = parseFloat(HTML)  + parseFloat(CSS) + parseFloat(JavaScript) + parseFloat(ReactJS);
   

   let perc = (totalGrades / 400) *100;


   if(perc <= 100 && perc >= 80){
    grades = "A";
   }else if(perc <= 79 && perc >= 60){
    grades = "B";
   } else if(perc <= 59 && perc >= 40){
    grades = "C";
   }else {
    grades = "F";
   }
if(perc >= 39){
   document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}.<br> You are Pass.`
}else {
    document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}.<br> You are Fail.`

}
}