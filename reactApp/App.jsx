import React from 'react';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
class App extends React.Component {
   render() {
      return (
         <div>
              <Header/>
              <Main/>
              <Footer/>
         </div>
      );
   }
}

export default App;
