import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './components/App';

class Index {
    constructor() {
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('app')
        );

        if (module.hot) {
            module.hot.accept('./components/App', () => {
                const NewRoot = require('./components/App').default;
                render(
                    <AppContainer>
                        <NewRoot />
                    </AppContainer>,
                    document.getElementById('app')
                );
            });
        }
    }
}

export default new Index();