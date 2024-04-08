function renderProjects(projects) {
    const container = document.getElementById('projects-container'); // Убедитесь, что у вас есть элемент с id="projects-container" в вашем HTML
    container.innerHTML = ''

    projects.forEach(project => {
        // Создаем колонку для карточки
        const column = document.createElement('div');
        column.className = 'col-md-4 mb-4'; // mb-4 добавляет немного отступа снизу

        // Создаем карточку
        const card = document.createElement('div');
        card.className = 'card h-100'; // h-100 делает все карточки одинаковой высоты

        // Добавляем изображение проекта (если есть)
        // const img = document.createElement('img');
        // img.src = 'path_to_your_image.jpg'; // Укажите путь к изображению проекта
        // img.className = 'card-img-top';
        // img.alt = project.title;
        // card.appendChild(img);

        // Создаем тело карточки
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Заголовок проекта
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = project.title;

        // Описание проекта
        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = project.description;

        // Ссылка на проект
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'btn btn-primary';
        link.textContent = 'Открыть';
        link.target = "_blank"; // Открывать в новой вкладке

        // Собираем карточку
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        card.appendChild(cardBody);

        // Добавляем карточку в колонку
        column.appendChild(card);

        // Добавляем колонку в контейнер
        container.appendChild(column);
    });
}

renderProjects(projects);

let typingTimer
function search(e) {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => {

        if (e.target.value) {
            const inputValue = e.target.value
            const keywords = inputValue.split(' ').map(x => x.trim())

            const searchResult = projects.filter(project => {
                return keywords.every(keyword => {
                    return Object.values(project).join(' ').toLowerCase().includes(keyword.toLowerCase())
                })
            })

            renderProjects(searchResult)
        } else {
            renderProjects(projects)
        }
    }, 200);


}

document.addEventListener('input', search)