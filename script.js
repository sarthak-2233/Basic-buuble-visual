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
{
    bubblesort(array);
    showbar();
}



function bubblesort(array)
{
do{
    var swapped=false;
    for(let i=1;i<array.length;i++)
        if(array[i-1]>array[i])
        {
            swapped=true;
            [array[i-1],array[i]]=[array[i],array[i-1]]
        }
}
while(swapped);

}



function showbar(){
    container.innerHTML = '';

for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.style.backgroundColor = "black";
    bar.style.width = "10px"; // Set a fixed width for each bar
    container.appendChild(bar);
    bar.classList.add("bar")
}
}