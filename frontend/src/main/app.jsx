import React from "react";
import '../common/template/dependeces'
import Footer from "../common/template/Footer";
import Header from "../common/template/Header";
import SideBar from "../common/template/SideBar";
import Routes from "../../routes";

export default props => (
    <div className="wrapper">
       <Header />
       <SideBar />
       <div className="content-wrapper">
            <Routes/>
       </div>
       <Footer />
    </div>
)