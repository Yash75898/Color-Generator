// const box1 = document.getElementById("box1")
// const box2 = document.getElementById("box2")
// const box3 = document.getElementById("box3")
// const box4 = document.getElementById("box4")

// box1.addEventListener("click" , () => {
//     document.body.style.backgroundColor = "grey"
// })

// box2.addEventListener("click" , () => {
//     document.body.style.backgroundColor = "red"
// })

// box3.addEventListener("click" , () => {
//     document.body.style.backgroundColor = "yellow"
// })

// box4.addEventListener("click" , () => {
//     document.body.style.backgroundColor = "pink"
// })


const container = document.querySelectorAll(".container")

container.forEach(function(button){
    console.log(button)
    button.addEventListener('click' , function(e){
        if(e.target.id === 'grey'){
            document.body.style.backgroundColor = e.target.id
            console.log(e.target.id)
        }

        else if(e.target.id === 'red'){
            document.body.style.backgroundColor = e.target.id
            console.log(e.target.id)
        }

        else if(e.target.id === 'yellow'){
            document.body.style.backgroundColor = e.target.id
            console.log(e.target.id)
        }

        else if(e.target.id === 'pink'){
            document.body.style.backgroundColor = e.target.id
            console.log(e.target.id)
        }
    })
})
