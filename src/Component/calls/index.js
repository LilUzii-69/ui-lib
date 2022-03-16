import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LeftFold from "./left-fold";
import RightFold from "./right-fold";
import './calls.css'
import { ChatComponents } from "../ChatComponent";
import { CallingComponents } from "../CallComponent";

function Calls() {
    return (
        <div className="calls-container">
            <Header />
            <div className="calls-body">
                <div className="calls-sidebar">
                    <Sidebar />
                </div>
                <div className="calls-leftFold">
                    <ChatComponents />
                </div>
                <div className="calls-rightFold">
                    <CallingComponents />
                </div>
            </div>
        </div>
    );
}

export default Calls;
