import React, { Component } from 'react'
class UserAdmin extends Component{
    render(){
        return(
            <>
            <table className="table">
                    <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Invitation Status</th>
                    <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Omkar</td>
                    <td>omprime4349@gmail.com</td>
                    <td>7767027341</td>
                    <td> <button className="btn btn-success" >Accepted</button> </td>
                    <td> Edit</td>
                    </tr>
                    </tbody>
            </table>       
            </>
        );
    };
}
export default UserAdmin;