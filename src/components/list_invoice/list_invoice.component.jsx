import React from 'react';
import './list_invoice.styles.scss';
import { withRouter } from 'react-router-dom';

const ListInvoice = ({title, history, match}) => {

    return(
        <div className='list-invoice'>
            <h1>{title}</h1>
            <div className='button-list'>
                <h2 className='unpaid-list' onClick={() => history.push(`${match.url}/listinvoice`)}>Unpaid</h2>
                <h2 className='paid-list' onClick={() => history.push(`${match.url}/paidlist`)}>Paid</h2>
            </div>
        </div>
    )
}

export default withRouter(ListInvoice);