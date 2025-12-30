
const NotFoundPage = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <img 
          src="/img/hero-img/hero-position-pizza-1.svg" 
          alt="" 
          className="notfound-decor notfound-decor--top-left"
        />
        <img 
          src="/img/hero-img/hero-position-pizza-3.svg" 
          alt="" 
          className="notfound-decor notfound-decor--bottom-right"
        />
        
        <div className="notfound-content">
          <div className="notfound-error-number">
            <span className="notfound-digit">4</span>
            <div className="notfound-pizza-circle">
              <img 
                src="/img/hero-img/hero-right-pizza.jpg" 
                alt="Pizza" 
                className="notfound-pizza-image"
              />
            </div>
            <span className="notfound-digit">4</span>
          </div>
          
          <h1 className="notfound-title">Упс! Страница не найдена</h1>
          <p className="notfound-text">
            Похоже, эта страница улетела быстрее, чем горячая пицца!<br />
            Но не переживайте, у нас есть много вкусного на главной странице.
          </p>
          
          <div className="notfound-buttons">
            <a href="/" className="notfound-btn notfound-btn--primary">
              Вернуться на главную
            </a>
            <a href="/#menu" className="notfound-btn notfound-btn--secondary">
              Посмотреть меню
            </a>
          </div>
        </div>

        <img 
          src="/img/hero-img/hero-right-top.svg" 
          alt="" 
          className="notfound-floating-pizza notfound-floating-pizza--1"
        />
        <img 
          src="/img/hero-img/hero-right-bottom.svg" 
          alt="" 
          className="notfound-floating-pizza notfound-floating-pizza--2"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;