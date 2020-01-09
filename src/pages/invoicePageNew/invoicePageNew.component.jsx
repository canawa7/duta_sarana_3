import React from 'react';

import './invoicePageNew.styles.scss';
import BankHorizontalDisplay from '../../components/bank_horizontal_display/bank_horizontal_display.component';

import ExcelDashboard from '../../components/excel_dashboard/excel_dashboard.component';

class NewInvoicePage extends React.Component {

    render(){
        return(
            <div className='invoicepagenew'>
                <BankHorizontalDisplay/>
                <h2 className='page-title-invoice'>New Invoice</h2>
                <ExcelDashboard/>
            </div>
        );
    }
    
}

export default NewInvoicePage;
