
const containerContent=document.getElementsByClassName("container-content");

for(let i=0; i<containerContent.length; i++)
{
    containerContent[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })

};