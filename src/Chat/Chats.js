import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Chats extends Component {

   constructor(props) {
      super(props);
      this.state = {list: [], activePage: 1};
    }
  
    componentDidMount() {
       fetch(`${process.env.REACT_APP_API_URL}chats/findAll`).then(
         res => res.json()
       ).then(
         res =>  this.setState({list : res})
       );
    }
    
    render() {
        return (
            <div >
               <div><h2>Chat History</h2>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Session Id</th>
                           <th>Query</th>
                           <th>Reply</th>
                        </tr>
                     </thead>
                     <tbody>
                        {this.state.list.map((item, idx) => (
                           <tr key={item._id}>
                              <td>{idx+1}</td>
                              <td>{item.session_id}</td>
                              <td>{item.query}</td>
                              <td>{item.reply}</td>
                           </tr>))}
                     </tbody>
                  </Table>
               </div>
            </div>
        );
    }
}

export default Chats;