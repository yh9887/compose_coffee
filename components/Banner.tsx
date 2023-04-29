import React from 'react';

function Banner(props:any) {
    return (
        <div className="sec1">
        <img src={props.src} alt="" />
        <h1 className="sec1_title">{props.name1}</h1>
        <div className="nav">
            <div className="home">
                <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className="nav_menu">
                <div className="top_menu">
                    <span>{props.name1}</span>
                    <i className="fa fa-light fa-angle-down"></i>
                </div>
                <div className="down_menu">
                    <a href="">
                        <p>BRAND</p>
                    </a>
                    <a href="">
                        <p>FRANCHISE</p>
                    </a>
                    <a href="">
                        <p>MENU</p>
                    </a>
                    <a href="">
                        <p>STORE</p>
                    </a>
                    <a href="">
                        <p>NEWS</p>
                    </a>
                </div>
            </div>
            <div className="nav_menu">
                <div className="top_menu">
                    <span>{props.name2}</span>
                    <i className="fa fa-light fa-angle-down"></i>
                </div>
                <div className="down_menu">
                    <a href="">
                        <p></p>
                    </a>
                    <a href="">
                        <p></p>
                    </a>
                    <a href="">
                        <p></p>
                    </a>
                    <a href="">
                        <p></p>
                    </a>
                    <a href="">
                        <p></p>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Banner;