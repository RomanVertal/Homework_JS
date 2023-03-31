const rainbow = document.querySelector('.rainbow')


for(let i = rainbow.children.length -1; i>=0 ; i--){

    rainbow.children[i].style.background = rainbow.children[i].classList[0]
    
    if(rainbow.children[i].previousElementSibling){

        rainbow.children[i].previousElementSibling.append(rainbow.children[i])

        
    }
     

}