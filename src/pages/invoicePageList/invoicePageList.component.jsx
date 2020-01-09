import React from 'react';

import './invoicePageList.styles.scss';
import BankHorizontalDisplay from '../../components/bank_horizontal_display/bank_horizontal_display.component';


const ListInvoicePage = ({ match }) => {
    return(
        <div className='invoicepagelist'>
            <BankHorizontalDisplay/>
            List of Invoice
            
        </div>
    );
}
export default ListInvoicePage;
