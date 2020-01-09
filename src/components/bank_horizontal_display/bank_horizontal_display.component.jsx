import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import './bank_horizontal_display.styles.scss';

const Arrow = ({ text, className }) => {
    return (
        <div className={className}>
            {text}
        </div>
    );
};
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

// list of items
const list = [
    { 
        name: 'BCA 1',
        balance: 1000000
    },
    { 
        name: 'BCA 2',
        balance: 1000000
    },
    { 
        name: 'Mayapada',
        balance: 1000000
    }
];

// One item component
// selected prop will be passed
const MenuItem = ({name_text, balance_text}) => {
    
    return( 
        <div className='menu-item'>
            {name_text} : {balance_text}
        </div>
    )
};

// All items component
// Important! add unique key
export const Menu = (list) =>

    list.map(el => {

        const {name, balance} = el;
    
        return <MenuItem name_text={name} balance_text={balance} key={name}/>;
    });

class BankHorizontalDisplay extends Component {

    constructor(props) {

        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list);
    }
    
    render() {
        // const { selected } = this.state;
        // Create menu from items
        // const menu = this.menuItems;
    
        return (
            <div className="horizontal-display">
                <ScrollMenu
                    data={this.menuItems}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                />
            </div>
        );
    }
}

export default BankHorizontalDisplay;