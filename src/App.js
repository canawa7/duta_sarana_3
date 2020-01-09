import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import InvoicePage from './pages/invoice/invoicepage.component';
import NewInvoicePage from './pages/invoicePageNew/invoicePageNew.component';
import ListInvoicePage from './pages/invoicePageList/invoicePageList.component';

class App extends React.Component{

    render(){
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route exact={true} path='/' component={HomePage}/>
                    <Route exact path='/invoice' component={InvoicePage}/>
                    <Route exact path='/invoice/newinvoice' component={NewInvoicePage}/>
                    <Route exact path='/invoice/listinvoice' component={ListInvoicePage}/>
                </Switch>

            </div>
        );  
    }
}

export default App;
