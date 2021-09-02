import React from "react";

export default function NavBar() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <nav>
                    <button href='#about'><b>About Me</b></button>
                    <button href='#myWork'><b>My Work</b></button>
                    <button href='#contact'><b>Contact Me</b></button>
                </nav>
            </div>
        </div>
    </div>
    )
};