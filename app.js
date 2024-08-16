const btn = document.querySelector('button')
fetch('https://dog.ceo/api/breeds/image/random').then(response=>{
    if(!response.ok)
        throw new Error('Error occured!',response.statusText)
    return response.json();
}).then(data=>{
    console.log(data)
    document.querySelector('img').src = data.message
}).catch(e=>console.log(e))
btn.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response=>{
        if(!response.ok)
            throw new Error('Error occured!',response.statusText)
        return response.json();
    }).then(data=>{
        console.log(data)
        document.querySelector('img').src = data.message
    }).catch(e=>console.log(e))
}) 

// fetch is executed immediately, not when we click the button, so wrap it inside a function
