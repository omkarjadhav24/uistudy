import React, { Component } from 'react'
import './layout.css'
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../sidebar/sidebar'
import UserM from '../../usermanagement/userm'
import {  Route} from 'react-router-dom';

class Layout extends Component{
    togglehandler=()=> {
        var element = document.getElementById("sidebar");
        element.classList.toggle("active");
      }
    render(){
        return(
               <>
                <Sidebar/>
               <div className="cmp">
                  <div className="conatiner" >
                        
                        <div className="card">
                        <Route path="/user-management" component={UserM} />
                        </div>
                  </div>
               </div>
               </>
        );
    };
}
export default Layout;