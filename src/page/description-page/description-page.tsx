import React from "react";
import "./description-page.css";


export const DescriptionPage = () => {
  return (
  <div>
    <h1>Прошу прощения за долгий ответ.</h1>
    <h3>Писал с применением :</h3>
    <ul>
      <li>TypeScript</li>
      <li>react</li>
      <li>material UI</li>
      <li>axios</li>
      <li>lodash</li>
    </ul>
    <p className="text">Есть нюанс в работе поиска. Необходимо добить debounce. Что бы не оставлял открытыми запросы к серверу при поиске. Но сделать это я не успел. И так с разработкой затянул.</p>
    <p className="text">Проблема в том что через пару дней улетаю в отпуск, и на основной работе надо было закрыть все хвосты. Но как обычно. Берешь один хвост, тянешь - а там еще тьма всего. </p>
  </div>
  )
}
