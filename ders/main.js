const div1= document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const img = document.querySelector('#fcb')
const barca = document.querySelector('.barca')

div2.ondragover = allowDrop;
function allowDrop(event){
    event.preventDefault()
}

div2.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

img.ondragstart = drag;
function drag(event){
    event.dataTransfer.setData('id', event.target.id)
    barca.style.display='block'
}

div2.ondrop = drop;

function drop(event){
    let itemId=event.dataTransfer.getData('id');
    if(itemId){
        event.target.append(document.getElementById(itemId))
        barca.style.display='none'
    }
}

div1.ondragover=allowDrop
div1.ondrop=drop