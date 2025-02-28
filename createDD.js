// import './styles/dropdown.css';

function createDropdown(parentContainer, buttonText, items) {

    const dropdownContainer = document.createElement('div');

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdownMenu');
    dropdownMenu.setAttribute('role', 'menu');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.setAttribute('role', 'menuitem');
        dropdownMenu.appendChild(li);
    });

    const dropdownMenuButton = document.createElement('button');
    dropdownMenuButton.textContent = buttonText;
    dropdownMenuButton.setAttribute('aria-haspopup', 'true');
    dropdownMenuButton.setAttribute('aria-expanded', 'false');

    dropdownMenuButton.appendChild(dropdownMenu);

    dropdownMenuButton.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        const isExpanded = dropdownMenuButton.getAttribute('aria-expanded') === 'false';
        dropdownMenuButton.setAttribute('aria-expanded', isExpanded);
        dropdownMenu.classList.add('visible');

    });

    dropdownMenuButton.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        const isExpanded = dropdownMenuButton.getAttribute('aria-expanded') === 'true';
        dropdownMenuButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.remove('visible');
    });

    dropdownMenuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isExpanded = dropdownMenuButton.getAttribute('aria-expanded') === 'false';
            dropdownMenuButton.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                dropdownMenu.classList.add('visible');
            } else {
                dropdownMenu.classList.remove('visible');
            }
        }
    });

    dropdownMenuButton.addEventListener('blur', (e) => {
        dropdownMenuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('visible');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdownMenu.classList.contains('visible')) {
            dropdownMenu.classList.remove('visible');
            dropdownMenuButton.setAttribute('aria-expanded', 'false');
        }
    });


    dropdownContainer.appendChild(dropdownMenuButton);
    parentContainer.appendChild(dropdownContainer);
}


export { createDropdown };