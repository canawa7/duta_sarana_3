import React, { useState } from 'react';

import recentPayments from '../../data/invoice_data';

import InvoiceTable from '../invoiceTable/invoiceTable.component';

import './excel_dashboard.styles.scss';


const ExcelDashboard = () => {
    
    const [payments, setPayments] = new useState(recentPayments);

    // console.log(payments);

    const handleValueChanged = (tableData) => {
        setPayments(tableData.slice(0));
    }
    
    const handleFileImported = (newSales) => {
        setPayments(newSales.slice(0));
    }
    

    return (
        <div className='dashboard'>
            <div className="container">
                <div className="row">
                    <InvoiceTable tableData={payments}
                        valueChangedCallback={handleValueChanged}
                        fileImportedCallback={handleFileImported}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExcelDashboard;

