import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from "react-js-pagination";

class Chats extends Component {

   constructor(props) {
      super(props);
      this.state = {list: [], activePage: 1, total: 0};
      this.fetchChat = this.fetchChat.bind(this);
   }
   
   handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber}, () => {
         this.fetchChat();
     });
    }

   componentDidMount() {
      this.fetchChat();
   }

   fetchChat() {
      fetch(`${process.env.REACT_APP_API_URL}chats/findAll?page=${this.state.activePage}`).then(
         res => res.json()
      ).then(
         res =>  this.setState({list : res.docs, total: parseInt(res.totalDocs)})
      );
   }
    
   render() {
      return (
         <div>
            <div>
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
                     { this.state.list.length ? this.state.list.map((item, idx) => (
                        <tr key={item._id}>
                           <td>{idx+1}</td>
                           <td>{item.session_id}</td>
                           <td>{item.query}</td>
                           <td>{item.reply}</td>
                        </tr>)) : <tr><td colSpan="4" style={{textAlign: "center"}}>No Chat History Found</td></tr> }
                  </tbody>
               </Table>

               {this.state.list.length ? <Pagination activePage={this.state.activePage}
                           itemsCountPerPage={parseInt(process.env.REACT_APP_PAGE_LIMIT)}
                           totalItemsCount={this.state.total}
                           pageRangeDisplayed={5}
                           itemClass="page-item"
                           linkClass="page-link"
                           onChange={this.handlePageChange.bind(this)}/> : null}
            </div>
           
         </div>
      );
   }
}

export default Chats;