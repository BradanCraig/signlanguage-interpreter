import Link from 'next/link'
import Image from 'next/image'
import ASLDiagram from "./images/ASL_Alphabet.jpg"
import "./home.css"

export default function Home(){
    return(
    <div class="global">
    <h1>AI ASL Interpreter</h1>
    <Image class="Diagram" src={ASLDiagram} alt="ASL Diagram"></Image>
    <p class="description">This application allows you to take or upload images of the ASL alphabet and will use artificial intelligence in order to translate that image</p>
    <p class="instruction">For reference, please use the image along the side.</p>
    <p class="instruction">As for 'I' and 'J', please replicate the hand position shown on the graphic and ignore the movement aspect of the letters.</p>
    <div class="links">
    <Link href="/Live">Take Live Image</Link>
    <Link href="/Upload">Upload Image</Link>
    </div>

    </div>
)}