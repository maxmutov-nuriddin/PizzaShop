
const NotFoundPage = () => {
   return (
      <div className="notfound-page">
         <div className="notfound-container">

            <div className="notfound-content">
               <div className="notfound-error-number">
                  <span className="notfound-digit">4</span>
                  <div className="notfound-pizza-circle">
                     <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjdCMkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waXp6YS1pY29uIGx1Y2lkZS1waXp6YSI+PHBhdGggZD0ibTEyIDE0LTEgMSIvPjxwYXRoIGQ9Im0xMy43NSAxOC4yNS0xLjI1IDEuNDIiLz48cGF0aCBkPSJNMTcuNzc1IDUuNjU0YTE1LjY4IDE1LjY4IDAgMCAwLTEyLjEyMSAxMi4xMiIvPjxwYXRoIGQ9Ik0xOC44IDkuM2ExIDEgMCAwIDAgMi4xIDcuNyIvPjxwYXRoIGQ9Ik0yMS45NjQgMjAuNzMyYTEgMSAwIDAgMS0xLjIzMiAxLjIzMmwtMTgtNWExIDEgMCAwIDEtLjY5NS0xLjIzMkExOS42OCAxOS42OCAwIDAgMSAxNS43MzIgMi4wMzdhMSAxIDAgMCAxIDEuMjMyLjY5NXoiLz48L3N2Zz4="
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


         </div>
      </div>
   );
};

export default NotFoundPage;