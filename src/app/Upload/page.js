export default function Upload(){
    
    return(
        <html>
        <div>
            <h2>Upload Images</h2>
        </div>

    <div>
        <p>Drag and drop images here or <span class ="browse"></span></p>
        <input type="file" class ="file" multiple="multiple"></input>
    </div>

    <form id="saved-form">
        <div class="header">
            <h3>Saved to Server</h3>
            <button type="submit">Delete</button>
        </div>
        <div class="saved-div"></div>
    </form>
    </html>
    )
    
}