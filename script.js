
async function multCards(m,n){

    console.log("hello")
     m = document.getElementById("forM").value;
     n = document.getElementById("forN").value;
    let url = `https://bobsburgers-api.herokuapp.com/characters/?limit=${m}&skip=${n}`

    try {
        await fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementById("container").innerHTML="";
            console.log(data)
            data.forEach(ele => {

                

                document.getElementById("container").innerHTML+=` <div class="cards">
            <h1>Name: ${ele.name}</h1>
            <img src="${ele.image}" alt="${ele.name}">
            <p>Age: ${ele.age}</p>
            <p>Gender: ${ele.gender}</p>
            <P>Occupation: ${ele.occupation}</P>
            
        </div>`
                
            });

            

        })
        
        
    } catch (error) {
        console.log(error.message)
        
    }
    

}