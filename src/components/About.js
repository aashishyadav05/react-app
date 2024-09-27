import React from 'react'

function About(props) {
  return (
    <div>
             <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
           
                <div className="accordion" id="accordionExample" >
                <h1>About As</h1>

                 <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'rgb(36 41 45)':'white',color : props.mode==='dark'?'white':'black'}}>
                       <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'rgb(55 65 72)':'white',color : props.mode==='dark'?'white':'black'}}>
                               About: MyReact- Textutils
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <strong>MyReact App</strong> is a feature-rich application designed to simplify text manipulation tasks such as word counting, case conversion, and more. You can easily <code>count words</code> and characters, toggle between <code>uppercase</code> and <code>lowercase</code> text, or <code>copy text</code> with a click. With a clean, user-friendly interface, MyReact App is a powerful tool for writers, editors, and anyone dealing with text formatting. The app adapts to both light and dark modes for a comfortable user experience.
                            </div>
                        </div>
                    </div>
        

                    <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'rgb(36 41 45)':'white',color : props.mode==='dark'?'white':'black'}}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?'rgb(55 65 72)':'white',color : props.mode==='dark'?'white':'black'}}>
                                Features
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <li><strong>Word and Character Counter:</strong> Easily count the number of words and characters in your text, helping you keep track of your writing progress.</li>
                            <li><strong>Text Case Conversion:</strong> Switch between uppercase and lowercase text instantly, making it easy to change text formatting with one click.</li>
                            <li><strong>Text Copying:</strong> Copy your formatted text to the clipboard with a single button, saving time and effort.</li>
                            <li><strong>Remove Extra Spaces:</strong> Automatically remove unnecessary spaces from your text to improve readability and avoid formatting issues.</li>
                            <li><strong>Text Preview Mode:</strong> Instantly preview how your formatted text will look in real-time, in both light and dark modes for better clarity.</li>
                            </div>
                        </div>
                    </div>


                 
                        
                <div className="container  my-5"  >
                    <strong>MyReact App offers a clean, user-friendly interface and adapts to light or dark modes based on your preferences.
                    </strong>
                </div>



                </div>
            </div>
        </div>
  )
}

export default About
