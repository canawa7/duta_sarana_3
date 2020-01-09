import React from 'react';
import './new_invoice.styles.scss';
import { withRouter } from 'react-router-dom';

const NewInvoice = ({history, match, title}) => {

    return(
        <div className='new-invoice'>
            <h1 onClick={() => history.push(`${match.url}/newinvoice`)}>{title}</h1>
        </div>
    )
}

export default withRouter(NewInvoice);