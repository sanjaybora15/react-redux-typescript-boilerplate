import React, {useState} from "react";
import "./styles.scss";
import {Link, NavLink, RouteComponentProps} from "react-router-dom";
import {RoutePaths} from "../../models/routePath";
import SideDrawer from "../sidenav";

const navList = [
    {
        title: "Home",
        navigateTo: RoutePaths.HOME,
    },
    {
        title: "About Us",
        navigateTo: RoutePaths.ABOUT_US,
    },
    {
        title: "Contact Us",
        navigateTo: RoutePaths.CONTACT_US,
    },
]

export default function NavBar(props: any & RouteComponentProps) {

    const [drawerOpen , setDrawerOpen] = useState<boolean>(false);
    const handleDrawerClick = () => {
        setDrawerOpen(true)
    }
    const close = () => {
        setDrawerOpen(false)
    }
    return (
        <header className="shadow bg-white">
            <SideDrawer show={drawerOpen} closeDrawer={close}/>
            <nav className={`container toolbar-navigation sub-container`}>
                <div />
                <span className="toggle-btn" onClick={handleDrawerClick}>
                    <i className="fa fa-bars drawer-icon"/>
                </span>
                <div className="toolbar-logo">
                    <Link to={"/"}>
                       <h1>LOGO</h1>
                    </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul>
                        {
                            navList.map((item, index) => {
                                return(
                                    <li key={index} id={String(index)}>
                                        {
                                            <NavLink 
                                                to={item.navigateTo} 
                                                exact 
                                                activeClassName={"active-link"}
                                            >
                                                {item.title}
                                            </NavLink>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}
