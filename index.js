


const keyBtn = document.getElementById("keyBtn");
const eduBtn = document.getElementById("eduBtn");
const workBtn = document.getElementById("workBtn");
const keyPara = document.getElementById('keyPara');
const eduPara = document.getElementById('eduPara');
const workPara = document.getElementById('workPara');
const allStar = document.getElementById('allStar');
const fiveStar = document.getElementById('fiveStar');
const fourStar = document.getElementById('fourStar');
const threeStar = document.getElementById('threeStar');
const twoStar = document.getElementById('twoStar');
const oneStar = document.getElementById('oneStar');



function sortStarList(starId){

    let lis = document.getElementById('dataList').getElementsByTagName('li');

    for (let i = 0; i < lis.length; i++) {
    const x = lis[i];

    if(starId == null){
        x.classList.remove('hidden')
    }
    
    else{
    if(x.classList.contains(starId)){
        x.classList.remove('hidden')
    }else{
        x.classList.add('hidden')
    }
}
   
    
}

    

}

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
