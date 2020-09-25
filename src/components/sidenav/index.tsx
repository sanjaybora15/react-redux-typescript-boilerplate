import React from 'react'
import {Link} from "react-router-dom";
import "./styles.scss"

const SideDrawer = (props: any) => {
    return (
        <div>
            <nav className={`side-drawer ${props.show ? "open" : ""}`}>
                <ul className="drawer-item" onClick={props.closeDrawer}>
                    <li>
                        <Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                    </li>
                </ul>
            </nav>
            <div onClick = {props.closeDrawer} className={props.show ? "backdrop" : ""}/>
        </div>
    )
}

export default SideDrawer
