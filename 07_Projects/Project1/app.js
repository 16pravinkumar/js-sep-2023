{/* <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span> */}


// let button = document.querySelectorAll('.button')

// button.forEach((btn)=>{
//     let btnColor = btn.getAttribute('id')
//     btn.addEventListener('click',()=>{
//        document.body.style.backgroundColor = btnColor
//     })
// })



// or 

// let button = document.querySelectorAll('.button')

// button.forEach((btn)=>{
  
//     btn.addEventListener('click',(e)=>{
//         if(e.target.id === 'grey')
//         {
//             document.body.style.backgroundColor = 'grey'
//         }
//         if(e.target.id === 'yellow')
//         {
//             document.body.style.backgroundColor = 'yellow'
//         }
//         if(e.target.id === 'blue')
//         {
//             document.body.style.backgroundColor = 'blue'
//         }
//         if(e.target.id === 'white')
//         {
//             document.body.style.backgroundColor = 'white'
//         }
        
//     })
// })


// or 
let button = document.querySelectorAll('.button')


button.forEach((btn)=>{
  
    btn.addEventListener('click',(e)=>{
        switch(e.target.id){
        case 'grey' :
        {
            document.body.style.backgroundColor = 'grey'
            break;
        }
        case 'blue' :
        {
            document.body.style.backgroundColor = 'blue'
            break;
        }
            case 'white' :
        {
            document.body.style.backgroundColor = 'white'
            break;
        }
        case 'yellow' :
        {
            document.body.style.backgroundColor = 'yellow'
            break;
        }
        default :
        {
            alert("Not inlist")
        }
    }
    })
})