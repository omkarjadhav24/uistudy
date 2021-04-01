import React, { Component } from 'react'

import './userm.css'
class Userm extends Component{
    render(){
        return(
            <>
            <div className="card-item">
                <nav className="nav" >
                    <div>Super Admins</div>
                    <div>Vendor Admins</div>
                    <div>Industry  Reps</div>
                </nav>
                <div className="superadminbtn" >
                <button type="button" class="btn btn-primary">+ ADD SYSYTEM SUPER ADMIN</button>
                </div>
            </div>
            </>
        );
    };
}
export default Userm