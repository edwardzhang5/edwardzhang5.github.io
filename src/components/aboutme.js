import React, { Component } from 'react';
import MenuBar from "./layout/menubar";

class aboutme extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                <div style={{ marginLeft: "80px", marginTop: "80px" }}>
                    <h1>If you found this page - you wern't supposed to</h1>
            </div>

             </div >
            
            );
    }
}
export default aboutme;