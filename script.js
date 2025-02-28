import { createDropdown } from './createDD.js';

const mainMenu = document.querySelector('.mainMenu');
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Hippo', 'Rhino', 'Leopard'];
const medicines = ['Paracetamol', 'Aspirin', 'Ibuprofen', 'Amoxicillin', 'Ciprofloxacin', 'Metronidazole', 'Doxycycline', 'Azithromycin'];
const scientists = ['Albert Einstein', 'Isaac Newton', 'Marie Curie', 'Galileo Galilei', 'Charles Darwin', 'Nikola Tesla', 'Stephen Hawking', 'Ada Lovelace'];
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Purple'];
const techStacks = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python'];
createDropdown(mainMenu, "Animals", animals);
createDropdown(mainMenu, "Planets", planets);
createDropdown(mainMenu, "Medicines", medicines);
createDropdown(mainMenu, "Scientists", scientists);
createDropdown(mainMenu, "Colors", colors);
createDropdown(mainMenu, "Tech Stacks", techStacks);