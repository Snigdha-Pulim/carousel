const track =document.querySelector('.carousel__track');
const slides=Array.from(track.children);
const nextButton=document.querySelector('.carousel__button--right');
const prevButton=document.querySelector('.carousel__button--left');
const dotsNav=document.querySelector('.carousel__nav');
const dots=Array.from(dotsNav.children);

const slidewidth=slides[0].getBoundingClientRect().width;

slides.forEach((slide,index)=>{
    slide.style.left=slidewidth*index +'px';
});

const MoveToSlide=(currentslide, targetslide, currentdot, targetDot)=>{
    track.style.transform ='translateX(-'+ targetslide.style.left + ')';
    currentslide.classList.remove('current-slide');
    targetslide.classList.add('current-slide');
    currentdot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

nextButton.addEventListener('click', e=>{
    const currentslide=track.querySelector('.current-slide');
    const currentdot=dotsNav.querySelector('.current-slide');
    const nextSlide=currentslide.nextElementSibling;
    const nextDot=currentdot.nextElementSibling;

    MoveToSlide(currentslide,nextSlide,currentdot,nextDot);
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden'); 
});

prevButton.addEventListener('click', e=>{
    const currentslide=track.querySelector('.current-slide');
    const currentdot=dotsNav.querySelector('.current-slide');
    const prevSlide=currentslide.previousElementSibling;
    const prevDot=currentdot.previousElementSibling;

    MoveToSlide(currentslide,prevSlide,currentdot,prevDot);
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
});

dotsNav.addEventListener('click',e=>{
    const targetDot=e.target.closest('button');
    if(!targetDot) return;
    const currentslide=track.querySelector('.current-slide');
    const currentdot=dotsNav.querySelector('.current-slide');
    const targetIndex=dots.findIndex(dot => dot === targetDot);
    if(targetIndex==0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');   
    }
    MoveToSlide(currentslide,slides[targetIndex],currentdot,dots[targetIndex]);
})
