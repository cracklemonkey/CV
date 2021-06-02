

//Buttons
const keyBtn = document.getElementById("keyBtn");
const eduBtn = document.getElementById("eduBtn");
const workBtn = document.getElementById("workBtn");
//paragraphs
const keyPara = document.getElementById('keyPara');
const eduPara = document.getElementById('eduPara');
const workPara = document.getElementById('workPara');
//stars
const allStar = document.getElementById('allStar');
const fiveStar = document.getElementById('fiveStar');
const fourStar = document.getElementById('fourStar');
const threeStar = document.getElementById('threeStar');
const twoStar = document.getElementById('twoStar');
const oneStar = document.getElementById('oneStar');
/*//radio buttons textsize
const threeStar = document.getElementById('threeStar');
const twoStar = document.getElementById('twoStar');
const oneStar = document.getElementById('oneStar');
//radio buttons font family
const threeStar = document.getElementById('threeStar');
const twoStar = document.getElementById('twoStar');
const oneStar = document.getElementById('oneStar');
//radio buttons header backround
const threeStar = document.getElementById('threeStar');
const twoStar = document.getElementById('twoStar');
const oneStar = document.getElementById('oneStar');

*/

function sortStarList(starId){

    let lis = document.getElementById('dataList').getElementsByTagName('li');

    for (let i = 0; i < lis.length; i++) {
    const listElement = lis[i];

    if(starId == null){
        listElement.classList.remove('hidden')
    }
    
    else{
    if(listElement.classList.contains(starId)){
        listElement.classList.remove('hidden')
    }else{
        listElement.classList.add('hidden')
    }
}
   
    
}

    

}


function radioHandler(event) {
    
if(event.target.name === "textSize"){
    
    if(event.target.id === "textSizesmall"){
        const personalia = document.getElementById('personalia')
        personalia.style.fontSize = "10px"
    }else if(event.target.id === "textSizesmedium"){
        const personalia = document.getElementById('personalia')
        personalia.style.fontSize = "20px"
    }else{
        const personalia = document.getElementById('personalia')
        personalia.style.fontSize = "40px"
    }}
else if(event.target.name === "fontFamily"){
        console.log("inni else iffen")
        if(event.target.id === "newRoman"){
            console.log("roman")
            const personalia = document.getElementById('personalia')
            personalia.style.fontFamily = "Times, serif"
        }else if(event.target.id === "sSerif"){
            const personalia = document.getElementById('personalia')
            personalia.style.fontFamily = "sans-serif"
        }else{
            const personalia = document.getElementById('personalia')
            personalia.style.fontFamily = "fantasy"
}}else{
        
    if(event.target.id === "backYellow"){
            const header = document.getElementById('header')
            header.style.background = "yellow"
        }else if(event.target.id === "backlightskyblue"){
            const header = document.getElementById('header')
            header.style.background = "lightskyblue"
        }else{
            const header = document.getElementById('header')
            header.style.background = "red"

        }
    }
}
document.querySelectorAll("input[name='textSize']").forEach((input) => {
    input.addEventListener('change', radioHandler);
});

document.querySelectorAll("input[name='fontFamily']").forEach((input) => {
    input.addEventListener('change', radioHandler);
});

document.querySelectorAll("input[name='HeaderBackround']").forEach((input) => {
    input.addEventListener('change', radioHandler);
});

keyBtn.addEventListener('click', () => {
    keyPara.classList.toggle('hidden');    
})

eduBtn.addEventListener('click', () => {
    console.log('edu')
    eduPara.classList.toggle('hidden');    
})

workBtn.addEventListener('click', () => {
    console.log('work')
    workPara.classList.toggle('hidden');    
})

allStar.addEventListener('click', () => {
    sortStarList();    
})

fiveStar.addEventListener('click', () => {
    sortStarList('5star');    
})

fourStar.addEventListener('click', () => {
    sortStarList('4star');    
})

threeStar.addEventListener('click', () => {
    sortStarList('3star');    
})

twoStar.addEventListener('click', () => {
    sortStarList('2star');    
})

oneStar.addEventListener('click', () => {
    sortStarList('1star');    
})

