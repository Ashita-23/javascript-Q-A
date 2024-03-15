

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

let wellCome = document.getElementById("Q4")
let textNode = wellCome.childNodes[0]
let text = textNode.data
// console.log(textNode)


setInterval(()=>{
    text=text[text.length-1]+ text.substring(0, text.length - 1);
    textNode.data = text;
},200)

// ------------------------------------------------------------------------

// Q --- 4 ----------------------------------------------------------------

function LeapYear(year){
    if(year/100 !== 0  && year/4){
        alert("yes"+year+" it's a leap year !")
    }else{
        alert("No"+year+" it's not  a leap year")
    }
}

// LeapYear(2016)
// ------------------------------------------------------------------------

// Q --- 5 ----------------------------------------------------------------


// let months = ["January"," February", "March", "April", "May", "June", "July", "August"," September", "October", "November","December"]

for(let year = 2014 ; year<= 2025 ; year ++){
 let date = new Date(year,0,1)
 if(date.getDate()===0){
    console.log("1st January is being a Sunday  " + year)
 }
}

/// leet code q---1 
let ShowHW = document.getElementById("ShowHW")
console.log(ShowHW)
function helloWorld (){
    console.log("Hello World ...")
  ShowHW.innerText="Hello World"
}

function ShowHelloWorld(){
    helloWorld ()
}


// Q -- 2Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let num = 0 

for( num ; num <= 10 ; num++){
    console.log(num)
}

// Q -- 3 Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// -- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// -- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expacted(val){
    if (val === 5){
        let obj = {
            val:"true"
        }
        console.log( obj)
    }else if (val !== 5){
        let objj = {
            val:"Not Equal"
        }
        console.log( objj)
    }

}

expacted(7)
expacted(5)