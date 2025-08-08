// import './App.css';
// import { HashRouter as Router,Routes,Route } from 'react-router-dom';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Events from './components/events';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Gallary from './components/Gallary';
// import Home from './components/Home';
// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/events' element={<Events />} />
//           <Route path='/gallary' element={<Gallary />} />
//         </Routes>
//         </Router>
//       </main>
      
//       <Footer />
//     </div>
//   );
// }
// export default App;

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/events';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallary" element={<Gallary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
