import React, { Component } from 'react'
import UserAdmin from '../../components/usermanagement/useradmins/useradmin'
import './userm.css'
class Userm extends Component{
    render(){
        return(
            <>
            <div className="card-item">
                <nav className="nav" >
                    <div className="text-primary">Super Admins</div>
                    <div className="text-primary">Vendor Admins</div>
                    <div className="text-primary">Industry  Reps</div>
                </nav>
                <div className="superadminbtn" >
                <button type="button" className="btn btn-primary">+ ADD SYSYTEM SUPER ADMIN</button>
                </div>
                <div className="superadmins">
                   <UserAdmin/>
                </div>
            </div>
            </>
        );
    };
}
export default Userm