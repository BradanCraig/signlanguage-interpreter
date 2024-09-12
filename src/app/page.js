import Link from 'next/link'
import Image from 'next/image'
import ASLDiagram from "./images/ASL_Alphabet.jpg"
import "./home.css"

export default function Home(){
    return(
    <div class="global">
        <h1>AI ASL Interpreter</h1>
        <div class="Diagram">
            <Image class="Diagram"src={ASLDiagram} alt="ASL Diagram"></Image>
        </div>
                <p className="description">This application allows you to take or upload images of the ASL alphabet and will use artificial intelligence in order to translate that image</p>
                <p className="instruction">For reference, please use the image along the side.</p>
                <p className="instruction">As for 'Z' and 'J', please replicate the hand position shown on the graphic and ignore the movement aspect of the letters.</p>
        <div class="links">
            <Link href="/Live">Take Live Image</Link>
            <Link href="/Upload">Upload Image</Link>
        </div>
    </div>
)}