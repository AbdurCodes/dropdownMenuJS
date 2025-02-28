# create_ddm

Create reusable and accessible dropdown menus without no sweat.


## Installation

```bash
npm i create_ddm
```

### Usage

import { createDropdown } from './node_modules/create_ddm/createDD.js';

const mainMenu = document.querySelector('.mainMenu');
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
createDropdown(mainMenu, "Planets", planets);


#### License

No license needed to use this package. It's all yours.


##### How to include the CSS file in your projects?

1. If You Are Using a Bundler (e.g., Webpack, Parcel, Vite) and you have configured it to handle CSS imports, you do not need to include the <link> tag in your HTML file. The bundler will automatically inject the CSS into your project. Your just need the following in your js file.

import './styles/dropdown.css'; 

2. If You Are Not Using a Bundler and you are directly using ES modules in the browser, you will need to include the <link> tag in your HTML file. This is because the browser does not natively support importing CSS files in JavaScript. All you need to do is add the following <link> tag to your HTML file:

<link rel="stylesheet" href="node_modules/create-dropdown/styles/dropdown.css">