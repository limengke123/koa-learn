/**
 * Created by 75214 on 2017/6/27.
 */
'use strict';

import React from 'react';
import reactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
         <div>hello</div>
        )
    }
}

reactDom.render(
    <App/>,
    document.getElementByID('app')
);