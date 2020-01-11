import React, { useState } from 'react';

import recentPayments from '../../data/invoice_data';

import InvoiceTable from '../invoiceTable/invoiceTable.component';

import './excel_dashboard.styles.scss';

import CustomButton from '../custom_button/custom_button.component';


const ExcelDashboard = () => {
    
    const [payments, setPayments] = new useState(recentPayments);

    // console.log(payments);

    const handleValueChanged = (tableData) => {
        setPayments(tableData.slice(0));
    }
    
    const handleFileImported = (newSales) => {
        setPayments(newSales.slice(0));
    }

    // console.log(payments);
    
    const totalCost = () => {
        // const items = sales;
        const total = payments.reduce(
            (acc, sale) => (acc += sale.jumlah),
            0
        );
        return parseInt(total);
      };
    
    return (
        
        <div className="container">
            <div className="row">
                <h2>Total Cost: {totalCost()}</h2>
                <InvoiceTable tableData={payments}
                    valueChangedCallback={handleValueChanged}
                    fileImportedCallback={handleFileImported}
                />
            </div>
        </div>
      
    );
}

export default ExcelDashboard;

