import React, { Component } from 'react'
import './layout.css'
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../sidebar/sidebar'
import UserM from '../../usermanagement/userm'
import {Switch,  Route} from 'react-router-dom';

class Layout extends Component{
    
    render(){
        return(
                  <div className="container-fluid px-0">
                       <div className="row" >
                       <div className="col-sm-1" >
                          <Sidebar/>
                        </div>
                       <div className="col-sm-11" >
                            <div className="row" >
                                <div className="col align-self-center" >
                                    <Switch>
                                    <Route path="/user-management" component={UserM} />
                                    </Switch>
                                </div>
                            </div>
                       </div>
                       </div>
                  </div>
        );
    };
}
export default Layout;