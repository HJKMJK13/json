async function main(){
    let respone=await
    fetch("https://jsonplaceholder.typicode.com/photos")
    console.log(respone)

    let json=await respone.json()
    console.log(json)

    for(const data of json){
        console.log(data)
        const liElement=document.createElement("li")
        const cardElement=document.createElement("div")
        const cardHeaderElement=document.createElement("div")
        const cardTitle=document.createElement("h2")
        const cardBody=document.createElement("div")

        cardElement.classList.add("card")
        cardHeaderElement.classList.add("card-header")
        cardBody.classList.add("card-body")
        cardTitle.classList.add("card-title")
        cardTitle.textContent=data.thumbnailUrl
        cardBody.textContent=data.body


        cardHeaderElement.appendChild(cardTitle)
        cardElement.appendChild(cardHeaderElement)
        cardElement.appendChild(cardBody)
        liElement.appendChild(cardElement)
        ul.appendChild(liElement)

    }
}
main()