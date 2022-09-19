// Links
const isTriangleLink=document.querySelector('#isTriangleLink')
const quizLink=document.querySelector('#quizLink')
const hypotenuseLink=document.querySelector('#hypotenuseLink')
const triangleAreaLink=document.querySelector('#triangleAreaLink')

// Divs
const isTriangleDiv=document.querySelector('#isTriangle')
const quizDiv=document.querySelector('#quiz')
const hypotenuseDiv=document.querySelector('#hypotenuse')
const triangleAreaDiv=document.querySelector('#triangleArea')

// Buttons
const isTriangleSubmit=document.querySelector('#isTriangleSubmit')
const quizSubmit=document.querySelector('#quizSubmit')
const hypotenuseSubmit=document.querySelector('#hypotenuseSubmit')
const triangleAreaSubmit=document.querySelector('#triangleAreaSubmit')

// Display
const output=document.querySelector('.output')
const formula=document.querySelector('.formula')

isTriangleLink.addEventListener('click', function() {
    isTriangleDiv.style.display='flex'
    quizDiv.style.display='none'
    hypotenuseDiv.style.display='none'
    triangleAreaDiv.style.display='none'
    output.style.display='none'
    formula.style.display='none'
})

quizLink.addEventListener('click', function() {
    isTriangleDiv.style.display='none'
    quizDiv.style.display='block'
    hypotenuseDiv.style.display='none'
    triangleAreaDiv.style.display='none'
    output.style.display='none'
    formula.style.display='none'
})

hypotenuseLink.addEventListener('click', function() {
    isTriangleDiv.style.display='none'
    quizDiv.style.display='none'
    hypotenuseDiv.style.display='flex'
    triangleAreaDiv.style.display='none'
    output.style.display='none'
    formula.style.display='none'
})

triangleAreaLink.addEventListener('click', function() {
    isTriangleDiv.style.display='none'
    quizDiv.style.display='none'
    hypotenuseDiv.style.display='none'
    triangleAreaDiv.style.display='flex'
    output.style.display='none'
    formula.style.display='none'
})

function errorMessage() {
    output.innerHTML="<h3>kindly enter all fields</h3>"
}

// isTriangle
// Angles
// const angle=document.querySelectorAll('.angle')
const angle1=document.querySelector('#angle1')
const angle2=document.querySelector('#angle2')
const angle3=document.querySelector('#angle3')
var firstAngle, secondAngle, thirdAngle, angleSum

angle1.addEventListener('input', e => {
    firstAngle=parseInt(e.target.value)
    // firstAngle=Number(e.target.value)
})
angle2.addEventListener('input', e => {
    secondAngle=parseInt(e.target.value)
})
angle3.addEventListener('input', e => {
    thirdAngle=parseInt(e.target.value)
})

// firstAngle=Number(angle[0].value)
// secondAngle=Number(angle[1].value)
// thirdAngle=Number(angle[2].value)

isTriangleSubmit.addEventListener('click', function() {
    output.style.display='block'
    formula.style.display='block'

    if (firstAngle==undefined || secondAngle==undefined || thirdAngle==undefined) {
        errorMessage()
    }
    else if (firstAngle<=0 || secondAngle<=0 || thirdAngle<=0) {
        output.innerHTML="triangle cannot be formed if any angle is 0 or less than that <br> sum of angles of a triangle is always equal to 180"
    }
    else {
        angleSum=firstAngle+secondAngle+thirdAngle
        if (angleSum===180) {
            output.innerHTML=`<h3>triangle can be formed...sum of angle is ${angleSum}</h3>`
        }
        else {
            output.innerHTML=`<h3>triangle cannot be formed...sum of angle is ${angleSum} <br> sum of angles of a triangle is always equal to 180</h3>`
        }
    }
})

// Quiz

// var one=document.querySelectorAll('#one')
// quizSubmit.addEventListener('click', function() {
//     if (one[2].checked) {
//         score++
//     }
// })
var quizForm=document.querySelector('form')

var correctAnswers=[
    "90°",
    "right-angled",
    "one",
    "equilateral",
    "100°",
    "30°",
    "a+b+c",
    "45°"
]

function calculate(e) {
    e.preventDefault()
    var score=0, index=0
    
    output.style.display='block'
    // formula.style.display='none'

    var formResults=new FormData(quizForm)
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score=score+1
        }
        index=index+1
    }
    output.innerHTML=`<h3>you attempted ${index} out of 8 <br> you have scored ${score} </h3>`
    // formula.innerHTML=""
}

quizSubmit.addEventListener('click', calculate)

// Hypotenuse
const hypotenuseInput=document.querySelectorAll('.hypotenuse')
const baseInput=document.querySelector('#baseInput')
const heightInput=document.querySelector('#heightInput')

var hypotenuse

hypotenuseSubmit.addEventListener('click', function() {
    output.style.display='block'
    formula.style.display='none'

    if (baseInput.value=='' || heightInput.value=='') {
        errorMessage()
    }
    else if (baseInput.value<=0|| heightInput.value<=0) {
        output.innerHTML="<h3>hypotenuse not possible <br> zero or negative value not accepted</h3>"
    }
    else {
        var base=Number(hypotenuseInput[0].value)
        var height=Number(hypotenuseInput[1].value)
        if (base==0 || height==0) {
            output.innerHTML=`<h3>hypotenuse does not exist</h3>`
        }
        else {
            hypotenuse=Math.sqrt(Math.pow(base,2)+Math.pow(height,2))
            hypotenuse=hypotenuse.toFixed(2)
            output.innerHTML=`<h3>hypotenuse = ${hypotenuse} units</h3>`
        }
    }
})

// Area of Triangle
// Sides
// const side=document.querySelectorAll('.side')
const side1=document.querySelector('#side1')
const side2=document.querySelector('#side2')
const side3=document.querySelector('#side3')
var firstSide, secondSide, thirdSide, area, form

side1.addEventListener('input', function(e) {
    firstSide=parseInt(e.target.value)
})
side2.addEventListener('input', function(e) {
    secondSide=parseInt(e.target.value)
})
side3.addEventListener('input', function(e) {
    thirdSide=parseInt(e.target.value)
})

// firstSide=Number(side[0].value)
// secondSide=Number(side[1].value)
// thirdSide=Number(side[2].value)

triangleAreaSubmit.addEventListener('click', function() {
    function invalidTriangle() {
        output.innerHTML="<h3>not a valid triangle <br> area = 0 <br> sum of two sides to be greater than third side</h3>"
    }
    output.style.display='block'
    formula.style.display='none'
    
    if (firstSide==undefined || secondSide==undefined || thirdSide==undefined) {
        errorMessage()
    }
    else if (Number.isNaN(firstSide) || Number.isNaN(secondSide) || Number.isNaN(thirdSide)) {
        errorMessage()
    }
    else if (firstSide<=0 || secondSide<=0 || thirdSide<=0) {
        output.innerHTML="<h3>triangle has three sides <br> invalid triangle if any side less than or equal to 0</h3>"
    }
    else {
        if (firstSide===secondSide && firstSide===thirdSide) {
            area=((Math.sqrt(3))/4)*Math.pow(firstSide,2)
            area=area.toFixed(2)
        }
        else {
            var semiPerimeter=(firstSide+secondSide+thirdSide)/2
            var scaleneFormula=semiPerimeter*(semiPerimeter-firstSide)*(semiPerimeter-secondSide)*(semiPerimeter-thirdSide)
            console.log(scaleneFormula)
            if (scaleneFormula>0) {
                area=Math.sqrt(scaleneFormula)
                area=area.toFixed(2)
            }
            else {
                invalidTriangle()
            }
        }
        
        if (area==0 || area==undefined) {
            invalidTriangle()
        }
        else {
            output.innerHTML=`<h3>area of triangle = ${area} sq. units</h3>`
        }
    }
})