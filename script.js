const eyeball=document.querySelector('#eb1');
const eyeball1=document.querySelector('#eb2');
document.onmousemove = (e) =>{
    x=e.clientX * 70 / window.innerWidth + '%';
    y=e.clientY * 70 / window.innerHeight + '%';
    eyeball.style.left=x;
    eyeball.style.top=y;
    eyeball1.style.left=x;
    eyeball1.style.top=y;
}