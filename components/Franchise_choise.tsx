import React from 'react';

function franchise_choise(props:any) {
    return (
        <div className="f_sub3_content">
        <div className="f_sub3_img_box">
            <img src={props.src} className="sub3_img"></img>
            <h1 className="sub3_img_title">{props.img_title}</h1>
        </div>
        <div className="f_sub3_txt_box">
            <div className="sub3_txt">{props.txt_content1}</div>
            <p></p>
            <div className="sub3_txt">{props.txt_content2}</div>
            <p></p>
            <div className="sub3_txt">{props.txt_content3}</div>
            <p className="sub3_txt_title">{props.txt_title}</p>
        </div>
        </div>
    )
}

export default franchise_choise;

