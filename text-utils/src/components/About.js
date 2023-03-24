import React, { useState } from 'react'

export default function About(props) { 

    let myStyle = {
        color : props.mode === 'dark'?'white':'rgb(7 10 56)',
        backgroundColor : props.mode === 'dark'?'rgb(7 10 56)':'white',
    }

    // const [myStyle, setMyState] = useState({
    //         color : "black",
    //         backgroundColor : "white"
    //     })
    // const[btnText, setBtnText] = useState("Enable dark Mode")

    // const toggleStyle = ()=>{ 
    //     if(myStyle.color === "black"){
    //         setMyState({
    //             color : "white",
    //             backgroundColor : "black",
    //             border : "2px solid white"
    //         })
    //         setBtnText("Enable light Mode") 
    //     }
    //     else{
    //         setMyState({
    //             color : "black",
    //             backgroundColor : "white"
    //         })
    //         setBtnText("Enable dark Mode")
    //     }
    // }
  return (
    <div className='container' style={{color : props.mode === 'dark'?'white':'#0f1544',}}>
            <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analize your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analize your text quickly and efficiently. Be it word count, and characters you typed and Preview it.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is free to use, and analize your Word and Characters you want to get. And copy it free for your uses.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Oper. It suits to count characters in facebook, blog, books, twitter, document, pdf document, excel, essays, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
