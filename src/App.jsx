import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" role="application">
      <Header />
      <main role="main">
        <Main />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;