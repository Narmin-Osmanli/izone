const container= document.querySelector('.tv-box');
const links = container.querySelectorAll('a');

container.addEventListener("click",(e)=>{
    e.preventDefault();
    //active background-color : #F5C74D , foreColor : #FFFFFF
    //normal background-color : #F5F5F5 , forecolor : rgba(0, 0, 0, 0.5)
    //console.log(document.querySelector('[data-slide-to="0"]'));
    //console.log(document.querySelector('[data-slide-to="1"]'));
    //document.querySelector('.carousel-item').classList.toggle('active');
    //.classList.add('active');
    // return;
    if(e.target.nodeName === 'A'){
        e.preventDefault();
        links.forEach(e=>{
            e.style.backgroundColor = '#F5F5F5';
            e.style.color='rgba(0, 0, 0, 0.5)';
            
        });

        const  clickedElement=e.target;
        clickedElement.style.backgroundColor='#F5C74D';
        clickedElement.style.color='#FFFFFF';
        
    }
});


//header image transition
const dotContainer=document.querySelector("#join .dot_container");
const dotList=document.querySelectorAll(".dot_container div");
dotContainer.addEventListener("click",(e)=>{
    if(e.target.childElementCount == 0){
        dotList.forEach(e=>{
            e.style.backgroundColor = 'white';
            e.style.height='8px';
            e.style.width='8px';
        });

        const  clickedElement=e.target;
        clickedElement.style.backgroundColor='#F5C74D';
        clickedElement.style.height='19px';
        clickedElement.style.width='8px';
        clickedElement.style.borderRadius='30px';
    }
});