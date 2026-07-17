async function loadIncludes() {

    const elements = document.querySelectorAll('[data-include]');

    for (const element of elements) {

        const file = element.dataset.include;

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(response.status);
            }

            element.innerHTML = await response.text();

        } catch (error) {

            console.error(
                `Błąd ładowania ${file}:`,
                error
            );

        }

    }

    initMenu();
}

function initMenu() {

    const button = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (!button || !menu) return;

    button.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

document.addEventListener(
    'DOMContentLoaded',
    loadIncludes
);