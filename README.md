# LSM Frontend

### Setup intruction 

1. clone the project 

``` 
        git clone ....url

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
    "./src/**/*.{html,js,jsx,ts,tsx}"
```
4. Add the tailwind directives at the top of the `index.css` file

```
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```