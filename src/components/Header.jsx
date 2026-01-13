import React, { useState } from 'react';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header role="banner" className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Основная навигация">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1 className="h4 mb-0">Bootstrap 4 Demo</h1>
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
                <a className="nav-link" href="#features" role="menuitem">Возможности</a>
              </li>
              <li className="nav-item" role="none">
                <a className="nav-link" href="#contact" role="menuitem">Контакты</a>
              </li>
              <li className="nav-item" role="none">
                <a 
                  className="nav-link" 
                  href="https://github.com/yourusername/bootstrap4-demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  role="menuitem"
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