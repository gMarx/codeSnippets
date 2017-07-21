// clickArticle.js

document.querySelector('.article[data-article-id="128"]').click();
//  ||
document.querySelector('.article-slider').classList.add('state-opened');

// looking at how to resize the slick-slider after adding new content, none of these work
document.querySelector('.article-content.slick-slide[data-article-id="93"]').style['height'];
document.querySelector('.slick-track').style.height='auto';
document.querySelector('.slick-slide').style.height='auto';

//  BUT, if I do the click on the article, that does
document.querySelector('.article[data-article-id="128"]').click();
