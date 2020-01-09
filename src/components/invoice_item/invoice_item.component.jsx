import React from 'react';
import './invoice_item.styles.scss';
import { withRouter } from 'react-router-dom';

const InvoiceItem = ({history, match, title, url}) => {

    return(
        <div className='new-invoice'>
            <h1 onClick={() => history.push(`${match.url}/${url}`)}>{title}</h1>
        </div>
    )
}

export default withRouter(InvoiceItem);