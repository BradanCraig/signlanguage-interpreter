'use client'
const MyInput = () => {

    const ImageUploaded = () => {
            let input = document.getElementById("file")
            input.onchange = () => {
                const img = input.files[0]
                let final= document.getElementById("picture")
                final.src = URL.createObjectURL(img)
            }
    }



return (        
<html>
    <div>
        <h2>Upload Images</h2>
    </div>

<div className="input-div">
    <p>Drag and drop images here or <span className ="browse"></span></p>
    <input type="file" id ="file" multiple="multiple" onClick={ImageUploaded}></input>
    <img id="picture" width="900" height="900"></img>
</div>

<div>
    <img></img>
</div>
</html>
)}
export default MyInput