import React from 'react';
import Header from './Header';

class App extends React.Component {
    state ={
        pageHeader: "Naming Contests"
    };
    render() {
        return (
            <div>
            <Header message={this.state.pageHeader} />
            <div>
               Empty div 
            </div>
            </div>
            );
    };
};

export default App;