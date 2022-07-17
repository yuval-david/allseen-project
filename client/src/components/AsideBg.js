import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import imgAside from '../img/img-right-form-desk-2.jpg';

export default function AsideBg() {
    return (
        <div className="aside-bg-comp">
            <div className="div-img">
                <div className="text-over-img">
                    <h2 className="huge">ALL SEEN</h2>
                    <h2 className="big">
                        צעד קטן לעורך הדין
                        <br />
                        צעד גדול למערכת המשפט בישראל
                    </h2>

                </div>
                <img src={imgAside} alt="all-seen" />
            </div>
        </div>
    )
}
