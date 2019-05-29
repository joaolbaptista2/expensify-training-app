import React from 'react';
import ReactDOM from 'react-dom';
// HIGH ORDER COMPONENT
// A component that wraps another one
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please login to view the info</p>
                )}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo info="Hello!" isAuthenticated={true} />, document.getElementById('app'));