import React from 'react';
import './invoice_container.styles.scss';
import NewInvoice from '../new_invoice/new_invoice.component';
import ListInvoice from '../list_invoice/list_invoice.component';

const InvoiceContainer  = (props) => {


    return(
        <div className='invoice_container'>
            <NewInvoice title='New Invoice'/>
            <ListInvoice title='List of Invoice'/>
        </div>
    )

}

export default InvoiceContainer;