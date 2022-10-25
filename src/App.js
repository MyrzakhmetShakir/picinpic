import React, { createRef } from 'react';

export default function App() {


 const videos = createRef();
 
 async function getMedia() { 

  try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videos.current.srcObject = mediaStream;
      videos.current.onLoadedMetadata = ()=>{
      videos.current.play();
    }
  } catch(e) {
    console.log(e);
  }
  
 }


  async function on() {
    if(videos.current.srcObject) {
      await videos.current.requestPictureInPicture();
    } else {
      alert('Choose media, please!')
    }
   
  }

  async function off() {
    if(videos.current.srcObject && document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {alert ('Please, choose media and start it')}
   
  }

  return (
    <div className='main'>
    <h1 className='heading'>Picture in picture</h1>
    <p className='heading'> App © Myrzakhmet</p>
      <video className='video' hidden={false}
        autoPlay
        controls 
        ref={videos}
      />
      <div className='button-container former'>
          <button className='btn find' onClick={getMedia}> Choose Media </button>
      </div>
      <div className='below'>
          <div className='button-container secondary'>
              <button className='btn on' onClick={on}>Start</button>
          </div>
          <div className='button-container secondary'>
              <button className='btn off' onClick={off}> End </button>
          </div>
      </div>
      
    </div>
  )
}
