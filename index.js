

// console.log("hello")
// Q -- 1 ------------------------------------------------------------
 let Dates = new Date()

let days = ["Sunday","Monday" , "Tuseday", "Wednusday","Thursday","Friday","Saturday"] 

let day = Dates.getDay()
let TodayIs = document.getElementById("Q1")
TodayIs.innerText = days[day]
console.log(days[day])

let CTime = Dates.getTime()
let CurrentTime = document.getElementById("Q1b")
let AmPm = ["AM","PM"]

function AmORPm(){
    let AmPm = ["AM","PM"]
    if (Dates.getHours()<12){
        return AmPm[0]
    }else{
        return AmPm[1]
    }
}

  
  CurrentTime.innerText= Dates.getHours() +" " + AmORPm() +":"+ Dates.getMinutes() +":"+ Dates.getSeconds()

console.log(CTime,Dates.getHours(),Dates.getMinutes(),Dates.getSeconds())

// ------------------------------------------------------------------------

// Q --- 2 ----------------------------------------------------------------

let printBtn = document.getElementById("Q2")
printBtn.addEventListener("click",()=>window.print())

// Q --- 3 ----------------------------------------------------------------

let Ques3a = document.getElementById("Q3a")
    Ques3a.innerText = Dates.toDateString()
let Ques3b = document.getElementById("Q3b")
Ques3b.innerText = Dates.toLocaleDateString()
let Ques3c = document.getElementById("Q3c")
Ques3c.innerText = Dates.toUTCString()
let Ques3d = document.getElementById("Q3d")
Ques3d.innerText = Dates.toLocaleString()

// ------------------------------------------------------------------------

// Q --- 4 ----------------------------------------------------------------