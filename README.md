# LSM Frontend

### Setup intruction 

1. clone the project 

``` 
        git clone ...url

```
2. move into the directories

```   
     cd lmd

```
3.  install dependencies
``` 
     npn i 
```
4. run the server
```
          npm run dev
```

### Setup Intruction for Tailwind

[Tailwind website docs](https://tailwindcss.com/docs/installation)

1. Install tailwind CSS

```
    npm install -D tailwindcss
```
2. Create config file 

```
    npx tailwindcss init
```
3. Add file extensions to tailwind config file in the context property

```
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
```
4. Add the tailwind directives at the top of the `index.css` file

```
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add the following details in the plugin property of tailwind config
```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

###  Adding plugins and Dependencies 
```
npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwind/line-clamp
```

### Configure auto import sort 
1. install simple import sore
```
    npm i eslint-plugin-simple-import-sort
```
2. Add rule in `.eslint.cjs`
```
    'simple-import-sort/imports':'error'
```
3. Add simple import sort plugin `eslint.csj`
```
    plugins: ['react-refresh','simple-import-sort']
```
