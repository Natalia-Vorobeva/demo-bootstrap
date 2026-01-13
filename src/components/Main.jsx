function Main() {
  return (
    <section 
      className="main-section py-5 bg-light" 
      aria-labelledby="main-heading"
      role="region"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 id="main-heading" className="display-4 mb-3">
              Демо-макет на Bootstrap 4
            </h1>
            <p className="lead mb-4">
              Демонстрация адаптивной, семантической верстки с использованием 
              Bootstrap 4, React и современных фронтенд-технологий.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#features" className="btn btn-primary btn-lg">
                <span className="sr-only">Перейти к </span>Возможностям
              </a>
              <a 
                href="https://getbootstrap.com/docs/4.6/getting-started/introduction/" 
                className="btn btn-outline-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Документация Bootstrap
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title">Технологии проекта</h2>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <span className="badge badge-primary mr-2">✓</span>
                    Bootstrap 4.6.2
                  </li>
                  <li className="mb-2">
                    <span className="badge badge-primary mr-2">✓</span>
                    React 18
                  </li>
                  <li className="mb-2">
                    <span className="badge badge-primary mr-2">✓</span>
                    Vite (сборщик)
                  </li>
                  <li className="mb-2">
                    <span className="badge badge-primary mr-2">✓</span>
                    Адаптивная верстка
                  </li>
                  <li className="mb-2">
                    <span className="badge badge-primary mr-2">✓</span>
                    Семантическая разметка
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;