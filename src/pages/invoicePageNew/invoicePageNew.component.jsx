import React from 'react';

import './invoicePageNew.styles.scss';
import BankHorizontalDisplay from '../../components/bank_horizontal_display/bank_horizontal_display.component';


const NewInvoicePage = ({ match }) => {
    return(
        <div className='invoicepagenew'>
            <BankHorizontalDisplay/>
            New Invoice Page
            
        </div>
    );
}
export default NewInvoicePage;
