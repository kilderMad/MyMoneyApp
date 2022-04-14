import React from "react";
import { HashRouter } from 'react-router-dom'

import Footer from "../common/template/Footer";
import Header from "../common/template/Header";
import SideBar from "../common/template/SideBar";
import Routes from "../routes";
import Messages from "../common/msg/messages";

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            <Messages/>
        </div>
    </HashRouter>
)