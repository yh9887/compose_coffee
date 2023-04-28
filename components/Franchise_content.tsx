import React from 'react';

function franchise_content(props:any) {
    return (
        <div className="f_sub1_content_box">
            <div className="f_box">
                <div className="f_box_number">{props.number}</div>
                <img alt="" className="f_box_img" src={props.src}></img>
            </div>
            <p className={props.mainTitle == "GRAND OPEN" ? "GRAND_OPEN" : "sub1_main_title"}>{props.mainTitle}</p>
            <div className="sub1_sub_title1">{props.subTitle1}</div>
            <div className="sub1_sub_title2">{props.subTitle2}</div>
        </div>
    )
}

export default franchise_content;

