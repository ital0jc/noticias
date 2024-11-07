document.addEventListener('DOMContentLoaded', function() {
    // Adiciona interatividade ao botão de "Carregar Mais"
    const loadMoreButton = document.getElementById('load-more');

    // Dados simulados para novas notícias
    const additionalNews = [
        {
            title: 'Título da Notícia 4',
            date: '22 de Agosto de 2024',
            summary: 'Aliquam erat volutpat. Sed pretium, turpis vitae condimentum faucibus, augue sapien cursus nunc.',
            link: 'noticia4.html'
        },
        {
            title: 'Título da Notícia 5',
            date: '19 de Agosto de 2024',
            summary: 'Vivamus lacinia odio vitae vestibulum. Duis vel lorem eget dolor dictum tincidunt.',
            link: 'noticia5.html'
        }
    ];

    loadMoreButton.addEventListener('click', function() {
        const newsSection = document.querySelector('.news-section');

        additionalNews.forEach(news => {
            const article = document.createElement('article');
            article.className = 'news-item';
            article.innerHTML = `
                <h2>${news.title}</h2>
                <p>Data: ${news.date}</p>
                <p>${news.summary}</p>
                <a href="${news.link}">Leia mais</a>
            `;
            newsSection.appendChild(article);

            // Adiciona a classe para animação
            setTimeout(() => {
                article.classList.add('show');
            }, 10); // Delay para garantir que a animação ocorra
        });

        loadMoreButton.disabled = true;
        loadMoreButton.textContent = 'Não há mais notícias';
    });
});
