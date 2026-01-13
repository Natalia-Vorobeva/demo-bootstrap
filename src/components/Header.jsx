import { useState } from 'react';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; 
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header role="banner" className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Основная навигация">
        <div className="container">
          <a
            className="navbar-brand"
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            style={{ cursor: 'pointer' }}
          >
            <h1 className="h4 mb-0">Bootstrap4 Demo</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Переключить навигацию"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ml-auto" role="menubar">
              <li className="nav-item" role="none">
                <a 
                  className="nav-link" 
                  href="#advantages" 
                  role="menuitem"
                  onClick={(e) => scrollToSection(e, 'advantages')}
                >
                  Принципы
                </a>
              </li>
              <li className="nav-item" role="none">
                <a 
                  className="nav-link" 
                  href="#contact" 
                  role="menuitem"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Контакты
                </a>
              </li>
              <li className="nav-item" role="none">
                <a
                  className="nav-link"
                  href="https://github.com/Natalia-Vorobeva/demo-bootstrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => {
                    if (!isNavCollapsed) {
                      setIsNavCollapsed(true);
                    }
                  }}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;