import React from 'react';
import './invoice_container.styles.scss';
import InvoiceItem from '../invoice_item/invoice_item.component';
import ListInvoice from '../list_invoice/list_invoice.component';

const InvoiceContainer  = (props) => {


    return(
        <div className='invoice_container'>
            <InvoiceItem title='New Invoice' url='newinvoice'/>
            <InvoiceItem title='List of Invoice' url='listinvoice'/>
        </div>
    )

}

export default InvoiceContainer;