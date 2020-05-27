import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src = "https://media-exp1.licdn.com/dms/image/C4E03AQGFjqG3DxNmnw/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=EMFSCv61XUr-tHZak4nXhNxvfrsBtW7adXTIZjYHHP4"
                className="avatar"
                alt= "Rahul"
            />
            <h2 className="main-name">Rahul Dey</h2>
            <p className="subtitle">"A Boy Who loves to Code"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};