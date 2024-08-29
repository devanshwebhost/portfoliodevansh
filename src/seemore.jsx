
import React, { useEffect, useState } from "react";
import Workdataall from "./myworkall";
import HeaderAnimation from "./animation";
import Contact from "./contact";
import Contactres from "./contactres";
import WorkContainer from "./workElement";
import Footer from "./footer";
import { colors } from "@mui/material";

export default function Seemore() {
    const [work, setWork] = useState(false);
    const [workdata, setWorkdata] = useState(false);
    const [lineTextWidth, setLinetextwidth] = useState(false);
    const [textRemove, setTextremove] = useState(true);
    // Responsive
    const [responsive, setresponsive] = useState(false);
  
    if (work) {
      setTimeout(() => {
        setWorkdata(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setWorkdata(false);
      }, 5);
    }
    if (work) {
      setTimeout(() => {
        setLinetextwidth(true);
      }, 2000);
    }
    else{
      setTimeout(() => {
        setLinetextwidth(false);
        }, 0.5);
    }

    const header = {
        textAlign: 'center',
        color: 'white',
        marginTop: '-60px',
    }
    const content = {
        width:'100%',
        marginTop:'50px',
        color:'white',
    }
  
    return (
      <>
          <nav>
            <div className="logo"></div>
            {/* <ul>
              <a href="#contact">
                <div
                  className={`line ${work ? "lineAnimation" : ""} ${
                    workdata ? "line-width" : ""
                  }`}
                >
                  <h6
                    className={`${
                      lineTextWidth ? "lineTextWidth" : ""}
                     ${textRemove ? "default-line": ""}`}
                    onClick={() => setWork(false) && setTextremove(false)} 
                    id="lineWidth"
                  >
                    Cancel
                  </h6>
                  <div className={` ${
                      lineTextWidth ? "lineTextWidth" : ""
                    } ${textRemove ? "default-line": ""}`}>
                    <Contact/>
                  </div>
                </div>
                <button
                  className={`nav-contact nav-contact-desktop ${work ? "contact" : ""}`}
                  onClick={() => setWork(true)}
                >
                  CONTACT
                </button>
              </a>
            </ul> */}
            {/* Responsive */}
            {/* <button
                  className={`nav-contact contact-responsive`}
                  onClick={() => setresponsive(!responsive)}
                >
                  {!responsive ? "CONTACT" : "Cancel"}
                </button> */}
          </nav>
          <h2 style={header}>My Work Section</h2>
          <div style={content}>
          
          <div className="main-cards">
            
            {Workdataall.map ((item, i) =>{
           
               let description = item.description;
               if(description.length > 20){
                  let wordCount = 250;
                   description = description.substring(0, wordCount) + "...";
               }
                return (
                  <>
                    <div className="card">
                      <div className="card-img" id={item.imageId}></div>
                      <div className="card-link-box">
                        <a href={item.imageLink}>Site</a>
                      </div>
                      <div className="card-para">
                        <h2 className="card-h2">{item.title}</h2>
                        <p className="card-p">
                          {description}
                        </p>
                      </div>
                    </div>
                  </>
                );
           
            })}
            </div>
          </div>
        </>
          )
}