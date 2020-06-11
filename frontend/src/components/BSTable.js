import BootstrapTable from '../../node_modules/react-bootstrap-table-next';
import React, { Component } from '../../node_modules/react';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import '../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from '../../node_modules/react-bootstrap-table2-toolkit';
import DataService from '../service';
import WebSocketInstance from '../WebSocket';

import {
	Button,
} from '../../node_modules/react-bootstrap';


const { SearchBar } = Search;

export default class BSTable extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this); 
    }
    state = {
        products: [
          {
            id: 1,
            name: 'Hammad',
            'skills': 'PHP, MySQL',
            chat_id : 'hammad_1992'
          },
          {
            id: 2,
            name: 'Riaz',
            'skills': 'E-Commerce',
            chat_id : 'riaz_me#'
          },
          {
            id: 3,
            name: 'Sadiq',
            'skills': 'Idea About Agriculture',
            chat_id: 'sadiq_idea'
          },
        ],
        columns: [{
          dataField: 'id',
          text: 'User'
        },
        {
          dataField: 'name',
          text: 'Name',
          sort: true
        }, {
          dataField: 'skills',
          text: 'Skills',          
        },{
            dataField: 'chat_id',
            text :'Chat ID'
        },
        {
            dataField: 'chat_id',
            text :'Connect With',
            connect: this.rowEvents,
            formatter: this.rankFormatter
        }
    ]
      }
      onChangeUserName(e) {
        this.setState({
          name: e.target.value
        });
      }

      saveTutorial() {
        var data = {
          name: this.state.name,
        };
    
        DataService.create(data)
          .then(response => {
            this.setState({
              name: response.data.name,
              });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      sendToAPI = () =>{
        //   return this.row.id;
        console.log(this.row.id);
      }

      rowEvents = {
        onClick: (e, row, rowIndex) => {
            // WebSocketInstance.connect();
            // console.log(e,row,rowIndex);
          //  (row)=> WebSocketInstance.initChatUser(row.name);
          //   (e)=>callback(e);
            // WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this));
            // WebSocketInstance.fetchMessages(this.props.currentUser);
            
        }
      }
      
      rankFormatter(cell, row, rowIndex, formatExtraData) { 
        return ( 
              <Button>Connect</Button>
                ) 
        } 

        // 
        // 
        waitForSocketConnection(callback) {
            const component = this;
            setTimeout(
                function(){
                    if(WebSocketInstance.state() === 1){
                        console.log('Connection is made');
                        callback();
                        return;
                    }
                    else{
                        console.log("Waiting for connection..");
                        component.waitForSocketConnection(callback);
                    }
                }, 100);
        }
      

    render() {
        return (
                <ToolkitProvider
                        keyField="id"
                        data={ this.state.products }
                        columns={ this.state.columns }
                        search
                        >
                        {
                            props => (
                            <div>
                                <h3>Search your Peer</h3>
                                <br />
                                <h3>Add Chat ID in Input Below</h3>
                                <SearchBar { ...props.searchProps } />
                                <hr />
                                <BootstrapTable
                                { ...props.baseProps }
                                   rowEvents={ this.rowEvents }
                                />
                            </div>
                            )
                        }
                </ToolkitProvider>

    //         <div className="container" style={{ marginTop: 50 }}>
    //             <BootstrapTable 
    //             striped
    //             hover
    //             keyField='id' 
    //             data={ this.state.products } 
    //             columns={ this.state.columns }
    //             filter={ filterFactory() }
    //             />
           
             
             
    //   </div>
        )
    }
}