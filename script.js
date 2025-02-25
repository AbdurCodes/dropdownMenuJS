const subMenuPlanets = document.querySelector('.subMenuPlanets');
const planetsBtn = document.getElementById('planetsBtn');

const subMenuAnimals = document.querySelector('.subMenuAnimals');
const animalsBtn = document.getElementById('animalsBtn');

const subMenuMedicines = document.querySelector('.subMenuMedicines');
const medsBtn = document.getElementById('medsBtn');

const subMenuScientists = document.querySelector('.subMenuScientists');
const scientistsBtn = document.getElementById('scientistsBtn');

const subMenuColors = document.querySelector('.subMenuColors');
const colorsBtn = document.getElementById('colorsBtn');

const subMenuTechStack = document.querySelector('.subMenuTechStacks');
const techStackBtn = document.getElementById('techStackBtn');




function displaySubmenu (submenu, button) {
    button.addEventListener('click', (e) => {
        submenu.style.display = 'block';
        e.preventDefault();
    })
}

// what is the purpose of the preventDefault method in the code above?
// The preventDefault method is used to prevent the default behavior of an event from occurring. In this case, it is used to prevent the default behavior of the click event on the button, which would normally cause the page to scroll to the top when the button is clicked. By calling preventDefault, we are preventing this default behavior and only displaying the submenu without any additional side effects.

// what is e in the code above?
// e is the event object that is passed to the event listener function. It contains information about the event that occurred, such as the target element that triggered the event, the type of event, and other properties related to the event. In this case, e is used to prevent the default behavior of the click event on the button by calling e.preventDefault().


displaySubmenu(subMenuPlanets, planetsBtn);
displaySubmenu(subMenuAnimals, animalsBtn);
displaySubmenu(subMenuMedicines, medsBtn);
displaySubmenu(subMenuScientists, scientistsBtn);
displaySubmenu(subMenuColors, colorsBtn);
displaySubmenu(subMenuTechStack, techStackBtn);
























```
The concept of "event delegation" in JavaScript. What it is and how it can be used in practice?

Event delegation is a technique in which we attach a single event listener to a parent element that will fire for all children matching a selector, whether those children exist now or are added in the future. It allows us to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. This is particularly useful when we have a large number of child elements that we want to attach the same event listener to. 

Example of event delegation in practice:

// HTML
<div id="parent">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
</div>

// JavaScript
const parent = document.getElementById('parent');
parent.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.textContent);
    }
}

In this example, we attach a single event listener to the parent element. When a button is clicked, the event bubbles up to the parent element, and we can check if the target element is a button. If it is, we can access the text content of the button that was clicked. This way, we only need one event listener for all the buttons, instead of adding individual event listeners to each button.

```

