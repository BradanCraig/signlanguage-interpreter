'use client'


const MyInput = () => {

    const ImageUploaded = () => {
            let input = document.getElementById("file") //Get image
            input.onchange = () => {
                const img = input.files[0]
                let final= document.getElementById("picture") //access displayed tag for image
                final.src = URL.createObjectURL(img)
            }
    }


    const SendToModel = () => {
        fetch("http://localhost:8080/results").then(
            response => response.json()).then(
                data => {
                    
                    let ex =  document.getElementById("translation")
                    ex.textContent = data.message
                }
            )
    }


return (        

    <div>
        <h2>Upload Images</h2>

<div className="input-div">
    <p>Drag and drop images here or <span className ="browse"></span></p>
    <input type="file" id ="file" onClick={ImageUploaded}></input>
    <img id="picture" width="900" height="900"></img>
    
    
    <button id="submit" onClick={SendToModel}>Submit</button>
    <p id="translation">Transition</p>
</div>

<div>
    <img></img>
</div>
</div>
)}
export default MyInput