import React, { useState } from 'react';
import './invoiceTable.styles.scss'
// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import TablePanel from '../tablePanel/tablePanel.component';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

import './invoiceTable.styles.scss'

import Excel from "@grapecity/spread-excelio";
import { extractSheetData } from "../../util/util";

import { saveAs } from 'file-saver';

const InvoiceTable = (props) => {

    const config = {
        sheetName: 'Invoice Data',
        hostClass: ' spreadsheet',
        autoGenerateColumns: true,
        width: 200,
        visible: true,
        resizable: true,
        priceFormatter: '$ #.00',
        chartKey: 1,
        rowCount: 500,
        colCount: 26*2
    }

    const [_spread, setSpread] = useState({});
    console.log(_spread);
    

    const workbookInit = (spread) => {
        setSpread(spread)
    }

    function handleValueChanged(e, obj) {
        props.valueChangedCallback(obj.sheet.getDataSource());
    }
    handleValueChanged.bind(this);

    function exportSheet() {
        const spread = _spread;
        const fileName = "Invoice Data.xlsx";

        const sheet = spread.getSheet(0);
        const excelIO = new Excel.IO();
        const json = JSON.stringify(spread.toJSON({ 
            includeBindingSource: true,
            columnHeadersAsFrozenRows: true,
        }))

        excelIO.save(json, (blob) => {
            saveAs(blob, fileName);
        }, function (e) {  
            alert(e);  
        });     
    }

    console.log(config.rowCount);
    

    return(
        <TablePanel tableKey={config.chartKey} className='table-panel'>
            <SpreadSheets hostClass={config.hostClass} workbookInitialized={workbookInit} valueChanged={handleValueChanged} autoFitType={true}>
                <Worksheet name={config.sheetName} dataSource={props.tableData} autoGenerateColumns={config.autoGenerateColumns} rowCount={config.rowCount} colCount={config.colCount}>
                    <Column width={50} dataField='no' headerText="No"></Column>
                    <Column width={200} dataField='tanggal' headerText="Tanggal"></Column>
                    <Column width={320} dataField='keterangan' headerText="Keterangan"></Column>
                    <Column width={100} dataField='quantity' headerText="Quantity" ></Column>
                    <Column width={100} dataField='price_per_unit' headerText="Price/Unit" formatter={config.priceFormatter} resizable="resizable"></Column>
                    <Column width={300} dataField='no_giro' headerText="No. Giro/ E-transfer Number"></Column>
                    <Column width={100} dataField='payment_date' headerText="Payment Date"></Column> 
                    <Column width={100} dataField='jumlah' headerText="Total Cost" formatter={config.priceFormatter} resizable="resizable"></Column> 
                    <Column width={100} dataField='bank' headerText="Bank"></Column> 
                </Worksheet>
            </SpreadSheets>
            <div className='dashboardRow'>
                <button className="btn btn-primary dashboardButton" onClick={exportSheet}>Export to Excel</button>
            </div>
        </TablePanel>
    )
}

export default InvoiceTable;



