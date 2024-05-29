document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    fetch('https://data-fiap.wiremockapi.cloud/infos')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.title;

                const title = document.createElement('h2');
                title.textContent = item.title;

                const description = document.createElement('p');
                description.textContent = item.description;

                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(description);

                content.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao buscar dados da API:', error));
});