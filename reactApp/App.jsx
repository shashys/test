import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
class App extends React.Component {
   render() {
      return (
         <div>
                <Header/>
              <div><h2>My Content</h2></div>
              <Footer/>
          </div>
          
      );
   }
}

export default App;