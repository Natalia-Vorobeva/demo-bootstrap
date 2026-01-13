import Header from './components/Header';
import Main from './components/Main';
import Advantages from './components/Advantages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App" role="application">
      <Header />
      <main role="main">
        <Main />
        <Advantages />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;