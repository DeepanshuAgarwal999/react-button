# React-Button

My React Library provides a simple and customizable Button component for your React projects.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install react-button

import React from 'react';
import Button from 'react-button';

const App = () => {
  return (
    <div>
     <button className="bg-red-500 flex items-center justify-center rounded-md
      border border-white text-white transition-all duration-300">
      Click Me
    </button>
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

{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}

🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request.
