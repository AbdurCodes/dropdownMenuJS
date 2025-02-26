function createSubMenuDynamic(mainMenu, button, items) {
    const subMenuDynamic = document.createElement('ul');
    subMenuDynamic.classList.add('subMenuDynamic');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        subMenuDynamic.appendChild(li);
    });

    const subMenubutton = document.createElement('a');
    subMenubutton.textContent = button;
    subMenubutton.href = '#';
    mainMenu.appendChild(subMenubutton);

    subMenubutton.addEventListener('mouseenter', (e) => {
        subMenuDynamic.classList.remove('subMenuDynamicHide');
        subMenubutton.appendChild(subMenuDynamic);
        e.preventDefault();
    });

    subMenubutton.addEventListener('mouseleave', (e) => {
        subMenuDynamic.classList.add('subMenuDynamicHide');
        e.preventDefault();
    });
}






const mainMenu = document.querySelector('.mainMenu');
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Hippo', 'Rhino', 'Leopard'];
const medicines = ['Paracetamol', 'Aspirin', 'Ibuprofen', 'Amoxicillin', 'Ciprofloxacin', 'Metronidazole', 'Doxycycline', 'Azithromycin'];
const scientists = ['Albert Einstein', 'Isaac Newton', 'Marie Curie', 'Galileo Galilei', 'Charles Darwin', 'Nikola Tesla', 'Stephen Hawking', 'Ada Lovelace'];
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Purple'];
const techStacks = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python'];
createSubMenuDynamic(mainMenu, "Animals", animals);
createSubMenuDynamic(mainMenu, "Planets", planets);
createSubMenuDynamic(mainMenu, "Medicines", medicines);
createSubMenuDynamic(mainMenu, "Scientists", scientists);
createSubMenuDynamic(mainMenu, "Colors", colors);
createSubMenuDynamic(mainMenu, "Tech Stacks", techStacks);