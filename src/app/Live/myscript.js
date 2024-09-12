"use client";
import "./myscript.css"
import { useEffect, useRef } from 'react';

const MyWebcam = () => {
    const videoRef = useRef(null);


  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener('loadedmetadata', () => {})
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserMedia();

  }, []);

  const takePicture = async () => {
    if (!videoRef.current || !videoRef.current.videoWidth || !videoRef.current.videoHeight) {
        console.log(videoRef.current)
        console.error('Video not ready');
    }
    else{
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imgUrl = canvas.toDataURL('image/jpeg');
      const img= document.getElementById("picture")
      img.src = imgUrl

      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }

      const formData = new FormData()

      let imgFile=dataURLtoFile(imgUrl, "file.png")

      formData.append('file', imgFile)

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
    
  }

  return (
<div className="fullscreen-container">
  <div className="input-div">
    <h2>Video Capture</h2>
    <div className="video-container">
      <video ref={videoRef} autoPlay width="900" height="900" />
      <div className="image-container">
        <img id="picture" width="900" height="900" alt="Captured" />
      </div>
    </div>
    <button type="button" onClick={takePicture}>Take Picture</button>
    <p id="translation">Translation</p>
  </div>
</div>



  );
};

export default MyWebcam;



