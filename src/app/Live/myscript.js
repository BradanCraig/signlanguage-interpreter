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

  const takePicture = () => {
    if (!videoRef.current || !videoRef.current.videoWidth || !videoRef.current.videoHeight) {
        console.log(videoRef.current)
        console.error('Video not ready');
    }
    else{
    const canvas = document.createElement('canvas');
    canvas.width=600
    canvas.length=600
    const context = canvas.getContext('2d')
    let con =context.drawImage(videoRef.current, 0, 0, 600, 600);
    const imgUrl = canvas.toDataURL('image/png');
    const img= document.getElementById("picture")
    img.src = imgUrl
    }
  }

  return (
    <div className="component">
      <video ref={videoRef} autoPlay width="900" height="900"></video>
      <button type="button" onClick={takePicture}>Take Picture</button>
      <img id="picture" width="900" height="900"></img>
    </div>
  );
};

export default MyWebcam;



