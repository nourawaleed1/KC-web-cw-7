function BMI(weight=20,height=80){
    let result=weight/(height*height);
    // hehe michel jackson 
    return result
}
console.log(BMI(10,40))
console.log(BMI)

let StatusText = document.getElementById(`result`)

function Status (bmi){
    if(bmi< 18.5){
         StatusText.style.backgroundColor='#bde0fe'
        StatusText.style.color=`orange`
        return`لديك نقص في الوزن`

    }else if( bmi >=18.5 && bmi <25 ){
        StatusText.style.backgroundColor='#bde0fe'
        StatusText.style.color=`green`
        return`وزنك صحي`
    }else if(bmi >=25 ){
        StatusText.style.backgroundColor='#bde0fe'
        StatusText.style.color=`red`
        return`لديك زيادة في الوزن`
    }
}


function calculate(){
let weight= document.getElementById("weight").value
let height= document.getElementById("height").value

let bmi= BMI(weight,height)
let desc= Status(bmi)

let div=document.getElementById("result")
div.innerText = bmi + " == " + desc
}
document.body.style.backgroundColor=`pink`
