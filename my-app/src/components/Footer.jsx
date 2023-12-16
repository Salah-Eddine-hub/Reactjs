import React from "react";

function Footer(){
    const date = new Date();
    const cYear = date.getFullYear();
    return (
        <div>
            <footer>
                <p>Copyright ⓒ {cYear}</p>
            </footer>
        </div>
    )
}

export default Footer;