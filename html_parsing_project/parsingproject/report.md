# Отчёт: тренировка парсинга HTML

Для каждого файла указаны селектор карточки сущности и селекторы полей. Значение «текст» означает содержимое между открывающим и закрывающим тегами; значение `атрибут` — данные из указанного HTML-атрибута.

## Общий принцип

- Карточка — отдельный `div` с сущностью (новостью, фильмом, товаром и т. д.).
- Для текста используется `.get_text(strip=True)`.
- Для изображения обычно берётся атрибут `src`, а альтернативное описание находится в `alt`.
- Атрибуты `data-*` содержат дополнительные структурированные данные.

## news.html — Новости

**Селектор карточки:** `body div#news-root.news-container div.news-item`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-id` | body div#news-root.news-container div.news-item | div | атрибут `data-id` |
| Доп. поле `data-category` | body div#news-root.news-container div.news-item | div | атрибут `data-category` |
| Изображение (news-image) | body div#news-root.news-container div.news-item img.news-image | img | атрибут `src`; `alt` — описание |
| news-date | body div#news-root.news-container div.news-item span.news-date | span | текст |
| Доп. поле `data-iso` (news-date) | body div#news-root.news-container div.news-item span.news-date | span | атрибут `data-iso` |
| news-title | body div#news-root.news-container div.news-item h2.news-title | h2 | текст |
| news-text | body div#news-root.news-container div.news-item p.news-text | p | текст |
| news-author | body div#news-root.news-container div.news-item span.news-author | span | текст |
| Доп. поле `data-author-id` (news-author) | body div#news-root.news-container div.news-item span.news-author | span | атрибут `data-author-id` |

## movies.html — Фильмы

**Селектор карточки:** `body div#movies-root.movies-list div.movie-card`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-year` | body div#movies-root.movies-list div.movie-card | div | атрибут `data-year` |
| Доп. поле `data-country` | body div#movies-root.movies-list div.movie-card | div | атрибут `data-country` |
| Изображение (poster) | body div#movies-root.movies-list div.movie-card img.poster | img | атрибут `src`; `alt` — описание |
| movie-title | body div#movies-root.movies-list div.movie-card span.movie-title | span | текст |
| Доп. поле `data-original` (movie-title) | body div#movies-root.movies-list div.movie-card span.movie-title | span | атрибут `data-original` |
| movie-year | body div#movies-root.movies-list div.movie-card span.movie-year | span | текст |
| movie-rating | body div#movies-root.movies-list div.movie-card span.movie-rating | span | текст |
| Доп. поле `data-votes` (movie-rating) | body div#movies-root.movies-list div.movie-card span.movie-rating | span | атрибут `data-votes` |
| movie-genres | body div#movies-root.movies-list div.movie-card div.movie-genres | div | текст |
| genre | body div#movies-root.movies-list div.movie-card span.genre | span | текст |
| Доп. поле `data-id` (genre) | body div#movies-root.movies-list div.movie-card span.genre | span | атрибут `data-id` |

## actors.html — Актёры

**Селектор карточки:** `body div#actors-root.actors-grid div.actor`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-gender` | body div#actors-root.actors-grid div.actor | div | атрибут `data-gender` |
| Доп. поле `data-oscars` | body div#actors-root.actors-grid div.actor | div | атрибут `data-oscars` |
| Изображение (actor-photo) | body div#actors-root.actors-grid div.actor img.actor-photo | img | атрибут `src`; `alt` — описание |
| actor-name | body div#actors-root.actors-grid div.actor span.actor-name | span | текст |
| Доп. поле `data-first` (actor-name) | body div#actors-root.actors-grid div.actor span.actor-name | span | атрибут `data-first` |
| Доп. поле `data-last` (actor-name) | body div#actors-root.actors-grid div.actor span.actor-name | span | атрибут `data-last` |
| actor-birth | body div#actors-root.actors-grid div.actor span.actor-birth | span | текст |
| Доп. поле `data-date` (actor-birth) | body div#actors-root.actors-grid div.actor span.actor-birth | span | атрибут `data-date` |
| actor-country | body div#actors-root.actors-grid div.actor span.actor-country | span | текст |
| Доп. поле `data-code` (actor-country) | body div#actors-root.actors-grid div.actor span.actor-country | span | атрибут `data-code` |
| actor-films | body div#actors-root.actors-grid div.actor div.actor-films | div | текст |
| film | body div#actors-root.actors-grid div.actor span.film | span | текст |
| Доп. поле `data-year` (film) | body div#actors-root.actors-grid div.actor span.film | span | атрибут `data-year` |

## games.html — Игры

**Селектор карточки:** `body div#games-root.games-catalog div.game`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-platform` | body div#games-root.games-catalog div.game | div | атрибут `data-platform` |
| Доп. поле `data-studio` | body div#games-root.games-catalog div.game | div | атрибут `data-studio` |
| Изображение (game-logo) | body div#games-root.games-catalog div.game img.game-logo | img | атрибут `src`; `alt` — описание |
| game-name | body div#games-root.games-catalog div.game h2.game-name | h2 | текст |
| Доп. поле `data-original` (game-name) | body div#games-root.games-catalog div.game h2.game-name | h2 | атрибут `data-original` |
| game-year | body div#games-root.games-catalog div.game span.game-year | span | текст |
| game-developer | body div#games-root.games-catalog div.game span.game-developer | span | текст |
| game-rating | body div#games-root.games-catalog div.game span.game-rating | span | текст |
| Доп. поле `data-reviews` (game-rating) | body div#games-root.games-catalog div.game span.game-rating | span | атрибут `data-reviews` |
| game-tags | body div#games-root.games-catalog div.game div.game-tags | div | текст |
| tag | body div#games-root.games-catalog div.game span.tag | span | текст |
| Доп. поле `data-id` (tag) | body div#games-root.games-catalog div.game span.tag | span | атрибут `data-id` |

## cities.html — Города

**Селектор карточки:** `body div#cities-root.cities-wrapper div.city`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-country` | body div#cities-root.cities-wrapper div.city | div | атрибут `data-country` |
| Доп. поле `data-capital` | body div#cities-root.cities-wrapper div.city | div | атрибут `data-capital` |
| Изображение (city-photo) | body div#cities-root.cities-wrapper div.city img.city-photo | img | атрибут `src`; `alt` — описание |
| city-name | body div#cities-root.cities-wrapper div.city span.city-name | span | текст |
| Доп. поле `data-latin` (city-name) | body div#cities-root.cities-wrapper div.city span.city-name | span | атрибут `data-latin` |
| city-population | body div#cities-root.cities-wrapper div.city span.city-population | span | текст |
| Доп. поле `data-year` (city-population) | body div#cities-root.cities-wrapper div.city span.city-population | span | атрибут `data-year` |
| city-area | body div#cities-root.cities-wrapper div.city span.city-area | span | текст |
| Доп. поле `data-unit` (city-area) | body div#cities-root.cities-wrapper div.city span.city-area | span | атрибут `data-unit` |
| city-facts | body div#cities-root.cities-wrapper div.city div.city-facts | div | текст |
| fact | body div#cities-root.cities-wrapper div.city span.fact | span | текст |
| Доп. поле `data-type` (fact) | body div#cities-root.cities-wrapper div.city span.fact | span | атрибут `data-type` |

## music.html — Музыкальные произведения

**Селектор карточки:** `body div#music-root.music-list div.composition`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-composer` | body div#music-root.music-list div.composition | div | атрибут `data-composer` |
| Доп. поле `data-key` | body div#music-root.music-list div.composition | div | атрибут `data-key` |
| Изображение (cover) | body div#music-root.music-list div.composition img.cover | img | атрибут `src`; `alt` — описание |
| title | body div#music-root.music-list div.composition span.title | span | текст |
| Доп. поле `data-opus` (title) | body div#music-root.music-list div.composition span.title | span | атрибут `data-opus` |
| composer | body div#music-root.music-list div.composition span.composer | span | текст |
| Доп. поле `data-country` (composer) | body div#music-root.music-list div.composition span.composer | span | атрибут `data-country` |
| year | body div#music-root.music-list div.composition span.year | span | текст |
| duration | body div#music-root.music-list div.composition span.duration | span | текст |
| Доп. поле `data-seconds` (duration) | body div#music-root.music-list div.composition span.duration | span | атрибут `data-seconds` |
| genre | body div#music-root.music-list div.composition span.genre | span | текст |
| Доп. поле `data-id` (genre) | body div#music-root.music-list div.composition span.genre | span | атрибут `data-id` |

## languages.html — Языки программирования

**Селектор карточки:** `body div#langs-root.langs-container div.lang`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-paradigm` | body div#langs-root.langs-container div.lang | div | атрибут `data-paradigm` |
| Доп. поле `data-typing` | body div#langs-root.langs-container div.lang | div | атрибут `data-typing` |
| Изображение (lang-logo) | body div#langs-root.langs-container div.lang img.lang-logo | img | атрибут `src`; `alt` — описание |
| lang-name | body div#langs-root.langs-container div.lang span.lang-name | span | текст |
| Доп. поле `data-version` (lang-name) | body div#langs-root.langs-container div.lang span.lang-name | span | атрибут `data-version` |
| lang-year | body div#langs-root.langs-container div.lang span.lang-year | span | текст |
| lang-author | body div#langs-root.langs-container div.lang span.lang-author | span | текст |
| Доп. поле `data-country` (lang-author) | body div#langs-root.langs-container div.lang span.lang-author | span | атрибут `data-country` |
| lang-features | body div#langs-root.langs-container div.lang div.lang-features | div | текст |
| feature | body div#langs-root.langs-container div.lang span.feature | span | текст |
| Доп. поле `data-id` (feature) | body div#langs-root.langs-container div.lang span.feature | span | атрибут `data-id` |

## books.html — Книги

**Селектор карточки:** `body div#books-root.books-grid div.book`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-genre` | body div#books-root.books-grid div.book | div | атрибут `data-genre` |
| Доп. поле `data-language` | body div#books-root.books-grid div.book | div | атрибут `data-language` |
| Изображение (book-cover) | body div#books-root.books-grid div.book img.book-cover | img | атрибут `src`; `alt` — описание |
| book-title | body div#books-root.books-grid div.book span.book-title | span | текст |
| Доп. поле `data-original` (book-title) | body div#books-root.books-grid div.book span.book-title | span | атрибут `data-original` |
| book-author | body div#books-root.books-grid div.book span.book-author | span | текст |
| Доп. поле `data-country` (book-author) | body div#books-root.books-grid div.book span.book-author | span | атрибут `data-country` |
| book-year | body div#books-root.books-grid div.book span.book-year | span | текст |
| book-pages | body div#books-root.books-grid div.book span.book-pages | span | текст |
| Доп. поле `data-format` (book-pages) | body div#books-root.books-grid div.book span.book-pages | span | атрибут `data-format` |
| book-tags | body div#books-root.books-grid div.book div.book-tags | div | текст |
| tag | body div#books-root.books-grid div.book span.tag | span | текст |
| Доп. поле `data-id` (tag) | body div#books-root.books-grid div.book span.tag | span | атрибут `data-id` |

## cars.html — Автомобили

**Селектор карточки:** `body div#cars-root.cars-list div.car`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-brand` | body div#cars-root.cars-list div.car | div | атрибут `data-brand` |
| Доп. поле `data-body` | body div#cars-root.cars-list div.car | div | атрибут `data-body` |
| Изображение (car-photo) | body div#cars-root.cars-list div.car img.car-photo | img | атрибут `src`; `alt` — описание |
| model | body div#cars-root.cars-list div.car span.model | span | текст |
| Доп. поле `data-generation` (model) | body div#cars-root.cars-list div.car span.model | span | атрибут `data-generation` |
| year | body div#cars-root.cars-list div.car span.year | span | текст |
| engine | body div#cars-root.cars-list div.car span.engine | span | текст |
| Доп. поле `data-volume` (engine) | body div#cars-root.cars-list div.car span.engine | span | атрибут `data-volume` |
| power | body div#cars-root.cars-list div.car span.power | span | текст |
| Доп. поле `data-hp` (power) | body div#cars-root.cars-list div.car span.power | span | атрибут `data-hp` |
| price | body div#cars-root.cars-list div.car span.price | span | текст |
| Доп. поле `data-currency` (price) | body div#cars-root.cars-list div.car span.price | span | атрибут `data-currency` |

## animals.html — Животные

**Селектор карточки:** `body div#animals-root.animals-wrapper div.animal`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-class` | body div#animals-root.animals-wrapper div.animal | div | атрибут `data-class` |
| Доп. поле `data-diet` | body div#animals-root.animals-wrapper div.animal | div | атрибут `data-diet` |
| Изображение (animal-photo) | body div#animals-root.animals-wrapper div.animal img.animal-photo | img | атрибут `src`; `alt` — описание |
| animal-name | body div#animals-root.animals-wrapper div.animal span.animal-name | span | текст |
| Доп. поле `data-latin` (animal-name) | body div#animals-root.animals-wrapper div.animal span.animal-name | span | атрибут `data-latin` |
| animal-latin | body div#animals-root.animals-wrapper div.animal span.animal-latin | span | текст |
| animal-weight | body div#animals-root.animals-wrapper div.animal span.animal-weight | span | текст |
| Доп. поле `data-kg` (animal-weight) | body div#animals-root.animals-wrapper div.animal span.animal-weight | span | атрибут `data-kg` |
| animal-habitat | body div#animals-root.animals-wrapper div.animal span.animal-habitat | span | текст |
| Доп. поле `data-continent` (animal-habitat) | body div#animals-root.animals-wrapper div.animal span.animal-habitat | span | атрибут `data-continent` |
| animal-facts | body div#animals-root.animals-wrapper div.animal div.animal-facts | div | текст |
| fact | body div#animals-root.animals-wrapper div.animal span.fact | span | текст |
| Доп. поле `data-type` (fact) | body div#animals-root.animals-wrapper div.animal span.fact | span | атрибут `data-type` |

## recipes.html — Рецепты

**Селектор карточки:** `body div#recipes-root.recipes div.recipe`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-cuisine` | body div#recipes-root.recipes div.recipe | div | атрибут `data-cuisine` |
| Доп. поле `data-vegetarian` | body div#recipes-root.recipes div.recipe | div | атрибут `data-vegetarian` |
| Изображение (recipe-photo) | body div#recipes-root.recipes div.recipe img.recipe-photo | img | атрибут `src`; `alt` — описание |
| recipe-name | body div#recipes-root.recipes div.recipe span.recipe-name | span | текст |
| Доп. поле `data-original` (recipe-name) | body div#recipes-root.recipes div.recipe span.recipe-name | span | атрибут `data-original` |
| recipe-time | body div#recipes-root.recipes div.recipe span.recipe-time | span | текст |
| Доп. поле `data-minutes` (recipe-time) | body div#recipes-root.recipes div.recipe span.recipe-time | span | атрибут `data-minutes` |
| recipe-calories | body div#recipes-root.recipes div.recipe span.recipe-calories | span | текст |
| Доп. поле `data-per` (recipe-calories) | body div#recipes-root.recipes div.recipe span.recipe-calories | span | атрибут `data-per` |
| ingredients | body div#recipes-root.recipes div.recipe div.ingredients | div | текст |
| ingredient | body div#recipes-root.recipes div.recipe span.ingredient | span | текст |
| Доп. поле `data-amount` (ingredient) | body div#recipes-root.recipes div.recipe span.ingredient | span | атрибут `data-amount` |

## sports.html — Спортсмены

**Селектор карточки:** `body div#sports-root.sports-list div.athlete`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-sport` | body div#sports-root.sports-list div.athlete | div | атрибут `data-sport` |
| Доп. поле `data-active` | body div#sports-root.sports-list div.athlete | div | атрибут `data-active` |
| Изображение (athlete-photo) | body div#sports-root.sports-list div.athlete img.athlete-photo | img | атрибут `src`; `alt` — описание |
| athlete-name | body div#sports-root.sports-list div.athlete span.athlete-name | span | текст |
| Доп. поле `data-first` (athlete-name) | body div#sports-root.sports-list div.athlete span.athlete-name | span | атрибут `data-first` |
| Доп. поле `data-last` (athlete-name) | body div#sports-root.sports-list div.athlete span.athlete-name | span | атрибут `data-last` |
| athlete-country | body div#sports-root.sports-list div.athlete span.athlete-country | span | текст |
| Доп. поле `data-code` (athlete-country) | body div#sports-root.sports-list div.athlete span.athlete-country | span | атрибут `data-code` |
| athlete-born | body div#sports-root.sports-list div.athlete span.athlete-born | span | текст |
| Доп. поле `data-date` (athlete-born) | body div#sports-root.sports-list div.athlete span.athlete-born | span | атрибут `data-date` |
| athlete-team | body div#sports-root.sports-list div.athlete span.athlete-team | span | текст |
| Доп. поле `data-league` (athlete-team) | body div#sports-root.sports-list div.athlete span.athlete-team | span | атрибут `data-league` |
| athlete-number | body div#sports-root.sports-list div.athlete span.athlete-number | span | текст |

## series.html — Сериалы

**Селектор карточки:** `body div#series-root.series-catalog div.series`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-network` | body div#series-root.series-catalog div.series | div | атрибут `data-network` |
| Доп. поле `data-status` | body div#series-root.series-catalog div.series | div | атрибут `data-status` |
| Изображение (series-poster) | body div#series-root.series-catalog div.series img.series-poster | img | атрибут `src`; `alt` — описание |
| series-title | body div#series-root.series-catalog div.series span.series-title | span | текст |
| Доп. поле `data-original` (series-title) | body div#series-root.series-catalog div.series span.series-title | span | атрибут `data-original` |
| series-seasons | body div#series-root.series-catalog div.series span.series-seasons | span | текст |
| series-episodes | body div#series-root.series-catalog div.series span.series-episodes | span | текст |
| Доп. поле `data-total` (series-episodes) | body div#series-root.series-catalog div.series span.series-episodes | span | атрибут `data-total` |
| series-year | body div#series-root.series-catalog div.series span.series-year | span | текст |
| Доп. поле `data-start` (series-year) | body div#series-root.series-catalog div.series span.series-year | span | атрибут `data-start` |
| Доп. поле `data-end` (series-year) | body div#series-root.series-catalog div.series span.series-year | span | атрибут `data-end` |
| series-rating | body div#series-root.series-catalog div.series span.series-rating | span | текст |
| Доп. поле `data-votes` (series-rating) | body div#series-root.series-catalog div.series span.series-rating | span | атрибут `data-votes` |

## holidays.html — Праздники

**Селектор карточки:** `body div#holidays-root.holidays-container div.holiday`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-type` | body div#holidays-root.holidays-container div.holiday | div | атрибут `data-type` |
| Доп. поле `data-month` | body div#holidays-root.holidays-container div.holiday | div | атрибут `data-month` |
| Изображение (holiday-icon) | body div#holidays-root.holidays-container div.holiday img.holiday-icon | img | атрибут `src`; `alt` — описание |
| holiday-name | body div#holidays-root.holidays-container div.holiday span.holiday-name | span | текст |
| Доп. поле `data-en` (holiday-name) | body div#holidays-root.holidays-container div.holiday span.holiday-name | span | атрибут `data-en` |
| holiday-date | body div#holidays-root.holidays-container div.holiday span.holiday-date | span | текст |
| Доп. поле `data-day` (holiday-date) | body div#holidays-root.holidays-container div.holiday span.holiday-date | span | атрибут `data-day` |
| Доп. поле `data-month` (holiday-date) | body div#holidays-root.holidays-container div.holiday span.holiday-date | span | атрибут `data-month` |
| holiday-country | body div#holidays-root.holidays-container div.holiday span.holiday-country | span | текст |
| Доп. поле `data-code` (holiday-country) | body div#holidays-root.holidays-container div.holiday span.holiday-country | span | атрибут `data-code` |
| holiday-desc | body div#holidays-root.holidays-container div.holiday span.holiday-desc | span | текст |

## products.html — Товары магазина

**Селектор карточки:** `body div#products-root.products-grid div.product`

| Данные | Селектор | Тег | Источник значения |
|---|---|---|---|
| Доп. поле `data-category` | body div#products-root.products-grid div.product | div | атрибут `data-category` |
| Доп. поле `data-brand` | body div#products-root.products-grid div.product | div | атрибут `data-brand` |
| Изображение (product-image) | body div#products-root.products-grid div.product img.product-image | img | атрибут `src`; `alt` — описание |
| product-name | body div#products-root.products-grid div.product span.product-name | span | текст |
| Доп. поле `data-model` (product-name) | body div#products-root.products-grid div.product span.product-name | span | атрибут `data-model` |
| product-brand | body div#products-root.products-grid div.product span.product-brand | span | текст |
| product-price | body div#products-root.products-grid div.product span.product-price | span | текст |
| Доп. поле `data-currency` (product-price) | body div#products-root.products-grid div.product span.product-price | span | атрибут `data-currency` |
| Доп. поле `data-old` (product-price) | body div#products-root.products-grid div.product span.product-price | span | атрибут `data-old` |
| product-stock | body div#products-root.products-grid div.product span.product-stock | span | текст |
| Доп. поле `data-qty` (product-stock) | body div#products-root.products-grid div.product span.product-stock | span | атрибут `data-qty` |
| product-rating | body div#products-root.products-grid div.product span.product-rating | span | текст |
| Доп. поле `data-reviews` (product-rating) | body div#products-root.products-grid div.product span.product-rating | span | атрибут `data-reviews` |