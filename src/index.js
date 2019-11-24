import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

function render() {
    ReactDOM.render(
        <App
            stories={getReadableStories(store.getState())}
            onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
