import React from 'react';
import { useState, useEffect } from 'react';
import './main.css';
import flowers from '../../assets/flowers2.png';

const HeaderTest = () => {
    const toRotate = [ "I'M BEGUM"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }


    return (
         
          <div className='sec-layer'>
            <div className='layer-2'>
            <div className='title-col'>
            <h1>HI! <span className="txt-rotate" ataPeriod="1000"><span className="wrap">{text}</span></span></h1>
            <p>I'm a e-Business graduate from LJMU and currently looking for a company that encourages growth </p>
              <p> I am a more of a visual person and passionate in building good, smooth and flexible website</p>
            
            <a href="#project"> <button>My Projects</button></a>
            
            </div>
            </div>
        </div>
    )
}

export default HeaderTest