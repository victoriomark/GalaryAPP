
const GalaryApp = () => {
    const close = document.getElementById('close');
    const output = document.querySelector('.output');
    const imgeOutput = document.querySelector('#imgeOutput')
    const galary = document.querySelectorAll('.galary img');
    galary.forEach(e => {
          // cevent
        e.addEventListener('click', (e) => {
           imgeOutput.src = e.target.src;
           output.style.display = 'flex';
        })
    })
 close.addEventListener("click",() => {
  output.style.display = 'none';
 })
   
}

GalaryApp()