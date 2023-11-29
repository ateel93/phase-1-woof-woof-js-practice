/* Deliverables
1. Create a fetch request forEach of the dogs from /pups. 
    a. create a <span> that pulls each dog's name and append it to <div id="dog-bar">
2. When a user clicks on the newly created <span> in the <div id="dog-bar">, the dog's <image>, <name>, and isGoodDog status should show in the <div id"dog-info"> section 
    a. tie the <img> tag to pups image
    b. create and tie the dog name to <h2></h2>
    c. make a <button id="good-dog-filter">Filter good dogs: OFF</button> that says good dog! or Bad Dog based on true or false
3. When a user clicks the <button id="good-dog/bad-dog">,
    a. the text should change based on true false in the API
    b. the pup object should be updated in the API via PATCH request
    */



fetch("http://localhost:3000/pups")
.then(response => response.json())
.then(pups =>{
        let currentPup;
        pups.forEach(pup => {
            const pupSpan = document.createElement("span")
            pupSpan.textContent = pup.name;
            const dogDiv = document.querySelector("#dog-bar");
            currentPup = pup;
            pupSpan.addEventListener('click', () =>{
                puppyTitle.textContent = pup.name;
                puppyImage.src = pup.image;
                buttonToggle.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog!";
            })
            dogDiv.append(pupSpan);
        })

    const dogDetails = document.querySelector("#dog-info")
    const puppyTitle = document.createElement("h1")
    const puppyImage = document.createElement("img")
    const buttonToggle = document.createElement("button");
    
 
    dogDetails.append(puppyImage, puppyTitle, buttonToggle);

    puppyImage.src = pups[0].image;
    puppyTitle.textContent = pups[0].name

    buttonToggle.textContent = pups[0].isGoodDog

    buttonToggle.addEventListener('click', () => {
        currentPup.isGoodDog = !currentPup.isGoodDog 
        buttonToggle.textContent = currentPup.isGoodDog ? "Good Dog!" : "Bad Dog!";
    })
        
})

        // fetch("http://localhost:3000/pups/${id}", {
        //     method: "PATCH",
        //     headers: { 
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //          isGoodDog : true, false
        //     })
        //     .then(response => response.json())
        //     .then(pup => {
        //     buttonToggle.textContent = pup.isGoodDog}) 
        // })

