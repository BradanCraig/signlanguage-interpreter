'use client'
import './upload.css'

const MyInput = () => {
    var img
    const ImageUploaded = () => {
            let input = document.getElementById("file") //Get image
                img = input.files[0]
                let final= document.getElementById("picture") //access displayed tag for image
                final.src = URL.createObjectURL(img)
            
    }


    const SendToModel = async () => {


            const formData = new FormData()
            
        try {
        const response = await fetch("http://localhost:8080/results", {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        let ex =  document.getElementById("translation")
        ex.textContent = data.message
            }
        catch(error){
            console.error(error)        }
    }


return (        


<div className="fullscreen-container">
<div className="input-div">
    <h2>Upload Images</h2>
    <p>Drag and drop images here or <span className="browse">browse</span></p>
    <input type="file" id="file" onChange={ImageUploaded} />
    <img id="picture" alt="Uploaded" />
    <button id="submit" onClick={SendToModel}>Submit</button>
    <p id="translation">Translation</p>
</div>
</div>
)}
export default MyInput