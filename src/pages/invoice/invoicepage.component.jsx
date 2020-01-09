import React from 'react';

import './invoicepage.styles.scss';
import BankHorizontalDisplay from '../../components/bank_horizontal_display/bank_horizontal_display.component';
import InvoiceContainer from '../../components/invoice_container/invoice_container.component';

// import NewInvoice from '../../components/new_invoice/new_invoice.component';

// import ListInvoice from '../../components/list_invoice/list_invoice.component';

import {Route, Switch} from 'react-router-dom';

import NewInvoicePage from '../invoicePageNew/invoicePageNew.component';
import ListInvoicePage from '../invoicePageList/invoicePageList.component';

const InvoicePage = ({ match }) => {
    return(
        <div className='invoicepage'>
            <BankHorizontalDisplay/>
            <div className='page-container'>  
                <Switch>
                    <Route exact path={`${match.path}`} component={InvoiceContainer} />
                    <Route path={`${match.path}/newinvoice`} component={NewInvoicePage}/>
                    <Route path={`${match.path}/listinvoice`} component={ListInvoicePage}/>
                </Switch>
            </div>
        </div>
    );
}
export default InvoicePage;


// const InvoicePage = (props) => {
//     return(
//         <div className='invoicepage'>
//             <BankHorizontalDisplay/>
//             <div className='container'>


//                 <InvoiceContainer section='1'/>
//                 <InvoiceContainer section='2'/>
//             </div>
            
//         </div>
//     );
// }


