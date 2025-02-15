# react-stylish-Button

react-stylish-button provides a simple and customizable Button component for your React projects.
It is fully customizable and supports Tailwindcss.
You can easily customize the button to your liking.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install react-stylish-button --save

import React from 'react';
import 'react-stylish-button/dist/index.css';
# To install styles install this.
import Button from 'react-stylish-button';

const App = () => {
  return (
    <div>
     <StylishButton className="bg-red-500 flex items-center justify-center rounded-md
      border border-white text-white transition-all duration-300">
      Click Me
    </StylishButton>
    </div>
  );
};
export default App;
```

| Prop Name   | Type     | Description                                   |
|-------------|----------|-----------------------------------------------|
| children    | string   | Simply pass your jsx code inside this prop    |
| className   | string   | Extend or override Tailwind classes.          |
| textStyle   | string   | Extend or override Tailwind classes.          |



🔧 TypeScript Support
This component is fully typed. Make sure your tsconfig.json includes:

For ts
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}


🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request.