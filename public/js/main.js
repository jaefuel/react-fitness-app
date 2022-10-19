const addButton = document.querySelector('.add')

addButton.addEventListener('click', addOne)

async function addOne(drills){   
    drills++; 
       
    try{
      const response = await fetch('/create/workout', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'drills': drills
          })
        })
      
      window.location.reload()
      const data = await response.json()
      console.log(data + " Reload after this")
      
    }
    catch(err)
    {
      console.log(err)
    }   
    
}