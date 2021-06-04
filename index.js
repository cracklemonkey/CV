//forsøk på lit json og ajax stuff
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText)
        
        
        
        
        
        
        
        const persElements = response.personalia
        const paraElements = response.articel
        const listElements = response.list
        //const keyParaElements = response.articel.keykval
        //const eduParaElements = response.articel.utdanning
        //const workParaElements = response.articel.work
        
        //const dataElements = response.list.dataferd
        //const langElements = response.list.sprak
        //const intElements = response.list.interesser
        
       for (let key in persElements) {
           if (Object.hasOwnProperty.call(persElements, key)) {
                const pers = document.getElementById("personalia")
                const element =persElements[key];
                pers.innerHTML += element
               
           }
       }

       for (let key in paraElements) {
        if (Object.hasOwnProperty.call(paraElements, key)) {
            
            if(key === "keykval"){
                const keyPara = document.getElementById('keyPara')
                let element = paraElements[key];
                keyPara.innerHTML += element
            }else if(key === "utdanning"){
                const eduPara = document.getElementById('eduPara')
                let element = paraElements[key]
                eduPara.innerHTML += element

            }else{
                const workPara = document.getElementById('workPara')
                let element = paraElements[key]
                workPara.innerHTML += element
            }
            
        }
    }

        for (let key in listElements) {
        if (Object.hasOwnProperty.call(listElements, key)) {
            listElements
            if(key === "dataferd"){
                const dataList = document.getElementById('dataList')
                let element = listElements[key];
                dataList.innerHTML += element
           
            }else if(key === "sprak"){
                let element = listElements[key]
                const langList = document.getElementById('lang')
                langList.innerHTML += element

            }else{
                let element = listElements[key]
                const intList = document.getElementById('int')
                intList.innerHTML += element
            }
            
        }
    }
    

        // keyPara.innerHTML += keyParaElements
        //eduPara.innerHTML += eduParaElements
        //workPara.innerHTML += workParaElements
        //dataList.innerHTML += dataElements
        //langList.innerHTML += langElements
        //intList.innerHTML += intElements
     /*  for (const key in keyParaElements) {
        if (Object.hasOwnProperty.call(keyParaElements, key)) {
            const aelement =keyParaElements[key];
            keyPara.innerHTML += aelement
            
        }
    }*/
       //pers.innerHTML += entries[0][1]
       
       
        /*pers.innerHTML += persElement.address
        pers.innerHTML += persElement.født
        pers.innerHTML += persElement.email
        pers.innerHTML += persElement.linkedin
        pers.innerHTML += persElement.github
        pers.innerHTML += persElement.sivilstatus*/
        
      
      // document.getElementById("personalia").address.innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "personalia.json", true);
xhttp.send();

//Buttons
const keyBtn = document.getElementById('keyBtn');
const eduBtn = document.getElementById('eduBtn');
const workBtn = document.getElementById('workBtn');
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

