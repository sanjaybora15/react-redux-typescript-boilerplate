import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return(
        <div className="p-5 text-center banner-section">
            <h1 className="mt-5 pt-5">Oops! Page Not Found!!!</h1>
            <Link to="/">
                <button className="theme-btn-primary my-5">Go Homepage</button>
            </Link>
        </div>
    )
}
