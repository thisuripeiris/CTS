import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./CSS/Staff-header.css";

export default function Headers() {
    useEffect(() => {
        const LOGOUT = document.getElementById("logout");
        const DASHBOARD = document.getElementById("dashboard");

        const handleLogoutMouseOver = () => {
            LOGOUT.style.backgroundColor = "#FF7E07";
            LOGOUT.style.color = "white";
        };

        const handleLogoutMouseOut = () => {
            LOGOUT.style.backgroundColor = "initial";
            LOGOUT.style.color = "initial";
        };

        const handleDashboardMouseOver = () => {
            DASHBOARD.style.backgroundColor = "white";
            DASHBOARD.style.color = "#FF7E07";
        };

        const handleDashboardMouseOut = () => {
            DASHBOARD.style.backgroundColor = "initial";
            DASHBOARD.style.color = "initial";
        };

        LOGOUT.addEventListener("mouseover", handleLogoutMouseOver);
        LOGOUT.addEventListener("mouseout", handleLogoutMouseOut);
        DASHBOARD.addEventListener("mouseover", handleDashboardMouseOver);
        DASHBOARD.addEventListener("mouseout", handleDashboardMouseOut);

        return () => {
            LOGOUT.removeEventListener("mouseover", handleLogoutMouseOver);
            LOGOUT.removeEventListener("mouseout", handleLogoutMouseOut);
            DASHBOARD.removeEventListener("mouseover", handleDashboardMouseOver);
            DASHBOARD.removeEventListener("mouseout", handleDashboardMouseOut);
        };
    }, []);

    return (
        <header className="Staff-header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "1.5rem", marginTop: "1rem" }}>
            <span id="logout" style={{}}>Log Out</span>
            <div className="headerrow1">
                <span id="dashboard">Dashboard</span>
            </div>
        </header>
    );
}
