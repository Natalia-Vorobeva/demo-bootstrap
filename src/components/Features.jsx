
function Features() {
  const features = [
    {
      title: 'Адаптивный дизайн',
      description: 'Использование Bootstrap сетки для создания полностью адаптивных интерфейсов.',
      icon: '📱'
    },
    {
      title: 'Семантическая верстка',
      description: 'Правильное использование HTML5 тегов и ARIA атрибутов для доступности.',
      icon: '🔍'
    },
    {
      title: 'Кроссбраузерность',
      description: 'Поддержка современных браузеров и graceful degradation для старых.',
      icon: '🌐'
    },
    {
      title: 'Оптимизация производительности',
      description: 'Быстрая загрузка благодаря Vite и оптимизированным ресурсам.',
      icon: '⚡'
    }
  ];

  return (
    <section 
      id="features" 
      className="features-section py-5" 
      aria-labelledby="features-heading"
      role="region"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="features-heading" className="h1 mb-3">Лучшие практики</h2>
          <p className="lead text-muted">
            В этом демо-проекте реализованы ключевые принципы современной фронтенд-разработки
          </p>
        </div>
        
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div 
                    className="display-4 mb-3" 
                    role="img" 
                    aria-label={feature.title}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="h5 card-title">{feature.title}</h3>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-5 pt-5 border-top">
          <h3 className="h4 mb-4">Компоненты Bootstrap 4 в работе</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  Формы
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInput">Пример поля ввода</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInput" 
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Демонстрация Bootstrap формы
                      </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  Flexbox утилиты
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                    <span>Flex элемент 1</span>
                    <span>Flex элемент 2</span>
                    <span>Flex элемент 3</span>
                  </div>
                  <p className="mt-3 mb-0 small text-muted">
                    Использование flexbox утилит Bootstrap для выравнивания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;