const btn = document.getElementById('btn');
const rangeSpan = document.getElementById('range-span');
const range = document.getElementById('range');
const text = document.getElementById('text');
const textSpan = document.getElementById('text-span');
const circle = document.getElementById('circle');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');


rangeSpan.textContent = `${range.value}%`;
textSpan.textContent = text.value;
eBtn.style.display = 'none';

btn.addEventListener('click', function(){
  if(text.value){
    textSpan.textContent = text.value;
    square.style.backgroundColor = text.value;
  }
});

range.addEventListener('input', function(){
  circle.style.cssText = `
    width: ${range.value}%;
    height: ${range.value}%;
  `;
  // circle.style.width = `${range.value}%`;
  // circle.style.height = `${range.value}%`;
  rangeSpan.textContent = `${range.value}%`;
})



 