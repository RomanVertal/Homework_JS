const linkImages = ['https://ru.js.cx/carousel/1.png', 'https://ru.js.cx/carousel/2.png', 'https://ru.js.cx/carousel/3.png', 'https://ru.js.cx/carousel/4.png', 'https://ru.js.cx/carousel/5.png',  'https://ru.js.cx/carousel/6.png']


const createImages = ((data) => {

    const ul = document.createElement('ul')
    ul.id = 'images_list'
    

    data.forEach((item, index) => {

        const li = document.createElement('li')

        const img = document.createElement('img')
        
        img.src = item
        img.alt = `Image: ${index + 1}`
        img.title = `Image: ${index + 1}`
        img.style.width = '130px'
        img.style.cursor ='pointer'

        li.append(img)
        ul.append(li)

        
    });    

    document.body.prepend(ul)

})

createImages(linkImages)



const imagesList = document.querySelector('#images_list')

const link = document.createElement('a')
const br = document.createElement('br')


imagesList.addEventListener('click', function(event){

    if(event.target.tagName == 'IMG'){

        link.href = event.target.src
        link.textContent = 'Ссылка: ' + event.target.src 

        event.target.closest('li').append(br)
        event.target.closest('li').append(link)
        
    }

})
