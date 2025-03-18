const n = 10;
const array = [];
function init(){
for (let i = 0; i < n; i++) {
    array[i] = Math.random();
}
showbar();
}
console.log(array);

//const container = document.getElementById('container');

function play()
{       const copy=[...array];
    const swaps=bubblesort(copy);
    animate(swaps)
}

function animate(swaps)
{
    if(swaps.length==0)
     {  showbar()
        return;
     }   
     const[i,j]=swaps.shift();
     [array[i],array[j]]=[array[j],array[i]]
     showbar([i,j]);
     setTimeout(function(){
        animate(swaps)
     },200)
}


function bubblesort(array)
{   const swaps=[];
do{
    var swapped=false;
    for(let i=1;i<array.length;i++)
        if(array[i-1]>array[i])
        {
            swapped=true;
            swaps.push([i - 1, i]);
            [array[i-1],array[i]]=[array[i],array[i-1]]
        }
}
while(swapped);
    return swaps;
}



function showbar(indices){
    container.innerHTML = '';

for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.style.backgroundColor = "black";
    bar.style.width = "10px"; // Set a fixed width for each bar

    if(indices && indices.includes(i))
    {
        bar.style.backgroundColor="red"
    }
    container.appendChild(bar);
    bar.classList.add("bar")
}
}