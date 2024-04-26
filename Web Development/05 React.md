#work, #webdev, #frontend, #react
```
// step1 - to create react with vite in offline
npm create vite@latest --offline
// step2 - go to the react file
npm install --offline
// step3 - to run react
npm run dev
```
# JSX - JavaScript XML
- writing html code in javascript is JSX
- JSX can be stored in variable
### Example 1.1
```javascript
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar, document.getElementById("root"))
```
# Javascript in React
- we can write javascript in react using { }
- but only the expressions
### Example 1.2
```javascript
const name = "suji"
const age = 21
function component(){
    return(
        <p>Greeting {name}!</p>
        /* <p>
           Age {if(age>20) "Happy"} // this is not allowed
           </p>
        */
    );
}
```
## fragements
```
<>
// within this we can write multiple html tags
</>
```
# Components
- Components is a ==javascript function, which has react elements like jsx==.
## creating components
- when creating components note, it should start with capital letters

## Types of Components

### Class components

### Functional components


## Categories of components
### Stateless / Presentational component
- It is used to just recieve and present the recieved prop data
- It doesn't have any states and used for small and resuable components come under this
### Stateful component
- It uses state in the component
- It can still be resuable
### Structural component
- It used to represent a 'pages' , 'layouts' , 'screens' where it used to gather many components into one composition
- Its a huge component and might be not reusable
# React - Declarative vs Imperative program
## Declarative
- which means it describes what the program to do/achieve rather than specifying how it should run step-by-step
## Imperative
- telling the program what it should do by specifying how it should run step-by-step
# Props
#props
- Its a ==javascript object==, used to ==send/pass values to the components==
- It ==sends from parent to child component==
- they are ==immutable== ( cannot be changed )==within child component==
### Example 1.3
```javascript
function MyComponent(props){
    return(
        <p>Hello, {props.name}!
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <MyComponent name="Suji" />
    </div>
)
```
## destruction of props - not using props
- without using props, we can pass values to the components like this
### Example 1.4
```javascript
function MyComponent({name, job, email, color, fontSize}){
  return(
      <ul>
        <li
          style={{
              color,
              fontSize
          }}
        >{name}</li>
        <li>Job</li>
        <li>{job}</li>
        <li>Email</li>
        <li>{email}</li>
      </ul>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MyComponent
        name = "Suji"
        job = "Software Engineer"
        email = "abc@gmail.com"
        color = "blue"
        fontSize = "20px"
    />
    <br/>
    <MyComponent
        name = "James"
        job = "Mech Engineer"
        email = "abcdef@gmail.com"
        color = "red"
        fontSize = "30px"
    />
    <br/>
    <MyComponent
        name = "Jonathan"
        job = "Electrical Engineer"
        email = "abcdefgh@gmail.com"
        color = "green"
        fontSize = "40px"
    />
  </>
)
```
## Prop Drilling
- Prop Drilling involves passing data from a parent component down to deeply nested child components through props.
- It leads to components to pass it down to their children even if they do not need the data themselves.
- Its common in React managing state without context API or Redux.
- This can cause problems in complexity, reusability and readability
- solution : #component-composition 

## Component Composition
#component-composition
- Its of building UI by combining small, reusable components using children prop
- Its highly reusable and flexible
- Its a fix of prop drilling problem
### example
![[Pasted image 20240107210644.png]]

# Mapping over data
- in the example 1.4, we have seen using props we can pass data to the components
- then, how to pass lots of / array of data to a component
### Example 1.5
```javascript
// MyComponent.jsx
function MyComponent({name, job, email, color, fontSize}){
    return(
        <ul>
          <li
            style={{
                color,
                fontSize
            }}
          >{name}</li>
          <li>Job</li>
          <li>{job}</li>
          <li>Email</li>
          <li>{email}</li>
          <br />
        </ul>
    );
 }
 export default MyComponent;

//main.jsx
import MyComponent from './MyComponent.jsx'
const data = [
  {
    id:"abc123",
    name:"suji",
    job : "Software Engineer",
    email : "abc@gmail.com",
    color : "blue",
    fontSize : "20px",
  },
  {
    id:"efg456",
    name:"James",
    job : "Mech Engineer",
    email : "abcdef@gmail.com",
    color : "red",
    fontSize : "30px",
  },
  {
    id:"hij789",
    name:"Jonathan",
    job : "Electrical Engineer",
    email : "abcdefgh@gmail.com",
    color : "green",
    fontSize : "40px",
  },
]
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {data.map((ele) => (
      <>
      <MyComponent
        name = {ele.name}
        job = {ele.job}
        email = {ele.email}
        color = {ele.color}
        fontSize = {ele.fontSize}
      />
      <br />
      </>
    ))}
  </>
)
```
![image.png](https://supernotes-resources.s3.amazonaws.com/image-uploads/d1464683-8180-43f4-b952-7d5d19c4a516--image.png)
## reasons for using .map()

### 1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback function provided is placed at the same index in the new array. Usually we take the items from the original array and modify them
in some way.

### 2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements that can be displayed on the page.

### 3. Why is using `.map()` better than just creating the components manually by typing them out?
It makes our code more "self-sustaining" - not requiring additional changes whenever the data changes.

## using keys
- use keys in order to give uniqueness to the components

# css modules (for styling easily)
- we can use css modules to make unique className for our component
- and also to the normal css in that css module
- Naming : 'filename.module.css'
```css
// Sidenote.module.css
.title{
	color : blue;
}
```
- In the react js file, we can import that style file and use them in 'className'
```javascript
// App.js
import styles from './sidenote.module.css'

function App(){
	return(
		<h1 className={style.title}>Heading 1</h1>
	)
}
```
- When you open see your 'inspect', you will see the unique className assigned to them as below
		className='_component_sidenote_module__title'
- this conversion is done by 'webpack'
- we can not same files with same name, bcz they are in './components/filenmae.module.css'
- since they are in 'components' directory there can not two files with same name

# State
- these examples are for understanding purposes
## example 1 (onClick)
```javascript
function App(){
	function click(){
		window.alert('Completion Success');
	}

	return(
		<button onClick={click}> Click me! </button>
		// if we don't call them directly it will only call when we click the button
		
		// <button onClick={click()}> Click me! </button>
		// if we call function directly then react will call the function even without clicking the button on everytime we open the page
		// bcz, react renders them first
	)
}
```

## example 2 (onClick)
```javascript
function App(){
	function click(type){
		if(type === 'success'){
			window.alert('Completion Success');
		}
		else{
			window.alert('Completion Dead');
		}
	}

	return(
		<button onClick={() => click('success')}> Click me! </button>
		// if we don't want to call them directly and also pass values then we use 'another function' within that function we put our 'click func' - like 'callback func'
		// This will only call when we click the button
		
		// <button onClick={click('success')}> Click me! </button>
		// if we want to pass values throught that func we need to call function directly then react will call the function even without clicking the button on everytime we open the page
		// bcz, react renders them first
	)
}
```

## Definition
- State is a feature that allows a component to keep track of and manage its own data.
- It is created within the component and its mutable
- used to reflect changes on the component's UI
## Asynchronous update behavior
- UseState/State has an asynchronous update behavior
### reason
1. You call `setCount(count+1)` to update the state.
2. React queues the state update but doesn't immediately apply it.
3. The component continues with its current execution, and if there are additional state updates, React queues them as well.
4. If it has any other code it also executes them
5. React completes the current synchronous execution.
6. React starts a new render cycle, during which it applies the pending state updates.
7. The component re-renders with the updated state values.

### short explanation
- React just batches/groups up all state update process in a queue
- After the completion of synchronous execution, it re-renders with updated state value

### example 1
```javascript
function App() {
  const [count, setcount] = useState(0)
  function increment(){
    setcount(count+1);
    alert(count); // here it shows 0, but after clicking 'OK' the 'count' will be incremented in the UI
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>click me</button>
    </>
  )
}
```

### example 2
```javascript
function App(){
	const [user, setUser] = useState({name:'Suji'});
	const [status, setStatus] = useState('ready');
	const [msg, setMsg] = useState();

	if(!user){
		return <p>{msg}</p>;
	}

	return(
		<button
			onClick={() => {
				setUser(null);
				setStatus('initial');
				steMsg('You have been logged out.');
			}}
		> Log out 
		</button>
	);
}
```

## update values immediately using useState
- this for updating state values immediately before rendering process to occur
### example 1
```javascript
function App() {
  const [count, setcount] = useState(0)
  function increment(){
	const incrementCount = count+1;
    setcount(incrementCount);
    alert('count :'${incrementCount})
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>click me</button>
    </>
  )
}
```

# Data binding
- refers to synchronization between the component's state/data and the UI element that is rendered
- There are 2 ways of data binding :
## 1. One-Way Data Binding :
- Data flows in one direction, from the component's state to the UI
```javascript
import React, { useState } from 'react';
function MyComponent() {
  const [message, setMessage] = useState('Hello, React!');
  return (
  <p>{message}</p>;
  );
}

```
## 2. Two-Way Data Binding :
- Data flows both from the component's state to the UI and from the UI back to the state.
- Here, "inputValue" state, allowing changes in the input to update the state, and vice versa.
```javascript
import React, { useState } from 'react';
function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};
  return (
    <div>
      <input
      type="text"
      value={inputValue}
      // this allows 2-way binding, state to UI
      onChange={handleInputChange}
      // this allows 2-way binding, UI to state
      />
      <p>{inputValue}</p>
      // this is 1-way binding, state to UI
    </div>
  );
}
```

# Forms
## select & option
- create data for option in seperate file.js
- send the data to the component
### example
- country selector
```javascript
// data.js
export const countries = {
    AF : "Africa",
    CH : "China",
    IN : "India",
    KR : "Korea",
    US : "United States - America",
    UK : "United Kingdom",
}

//App.js
import { useState } from 'react'
import './App.css'
import { countries } from './data' 
function App() {
  const [country, setCountry] = useState('IN')
  const countryName = Object.entries(countries)
  // object.entries(objVar) will return an array of array like this
  /* countryName = [
    ['AF', 'Africa'],
    ['CH', 'China'],
    ['IN', 'India'],
    ['KR', 'Korea']
  ] */
  /* this is destucturing of countryName = [[a1,b1],[a2,b2],[a3,b3]]
  countryName.map(([id, label]) => {
                   ['AF', 'Africa']
                   ['CH', 'China']
  console.log(label);
  }) */

  function handleChange(event){
    setCountry(event.target.value) // this allows UI to state
  }

  return (
    <>
      <form>
        <label htmlFor="country">Country :</label>
        <br /><br />
        <select name="country" id="country"
        value={country} // this allows 2-way binding, state to UI
        onChange={handleChange} // this allows 2-way binding, UI to state
        >
          {countryName.map(([id, label]) => {
            return (
              <option value={id} key={id}>
              {label}
              </option>
            )
          })}
        </select>
      </form>
      <p>Selected is : {country}</p>
    </>
  )
}
export default App
```

## block - form reloading
- event.preventDefault() - this is used to block reloading the page/form
### example
```javascript
const Correct_code = '12345';

function App(){
  const [num, setnum] = useState('0')
  function handleChangeNum(event){
    setnum(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault(); // this prevents the form to reload
    const isCorrect = num === correct_num;
    window.alert(isCorrect ? 'correct!':'error!');
  }

return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text"
          value={num}
          onChange={handleChangeNum}
        />
        <button>Verify</button>
      </form>
    </>
  )
}
export default App
```

## Radio button Handlling
-  'name' used to make the two radio buttons to one group, so we can only select one radio button
- to select radiobutton by clicking the label, done by 'htmlFor' & 'id' making them to have same name
- to change the iceCream value in radiobutton, its little diff from others, we need to give accurate value (value='value') rather than seting it to the useState value 

```javascript
import { useState } from 'react'

function App() {
  const [iceCream, seticeCream] = useState("Select")
   return (
    <>
      <form onSubmit={handleSubmit}>
		{/* radiobutton */}
        <label>Select fav ice-cream: </label>
        {/* 'name' used to make the two radio buttons to one group, so we can only select one radio button */}
        {/* to select radiobutton by clicking the label, done by 'htmlFor' & 'id' making them to have same name */}
        {/* to change the iceCream value in radiobutton, its little diff from others, we need to give accurate value (value='value') rather than seting the useState value */}
        <input id='chocolate' type="radio" name='iceCream' value='chocolate'
        onChange={(event)=>{seticeCream(event.target.value)}}/>
        <label htmlFor="chocolate">Chocolate</label>

        <input id='vanilla' type="radio" name='iceCream' value='vanilla' onChange={(event)=>{seticeCream(event.target.value)}}/>
        <label htmlFor="vanilla">Vanilla</label>
        
        <p>Your fav IceCream is : {iceCream}</p>
      </form>
    </>

  )

}
```
# key generation / Dynamic key generation
- TYPE 1 : id = Math.random()
- TYPE 2 : id = crypto.randomUUID()

# when to use State

![[Pasted image 20231219150407.png]]
# Lifting up State
- mostly used for child to parent communication
- It is done by lifting the state from child to the parent component inorder of having a child to parent communication

## Example - coupon component

![[Pasted image 20231219194748.png]]


```javascript
// App.jsx

import { useState } from 'react'
import './App.css'
import Promotion from './Promotion'
import Total from './Total'

function App() {
{/* lifting state */}
  const [Cnum, setCnum] = useState(0)
  const amount = 100 - Cnum
  
  function handleCouponSubmit(couponValue){
    setCnum(couponValue)
  }

  return (
    <>
    {/* lifting state */}
      <h2>This for lifting state example</h2>
      <Promotion handleCouponSubmit={handleCouponSubmit}/>
      <Total amount={amount}/>
    </>

  )

}
export default App


// Promotion.jsx

import React, { useState } from 'react'

const Promotion = ({handleCouponSubmit}) => {
  const [couponValue, setcouponValue] = useState(0)
  return (
    <div>
        <form onSubmit={(event)=>{
            event.preventDefault()
            handleCouponSubmit(couponValue)
        }}>
            <label htmlFor="Cnumber">Enter coupon number :</label>
            <input type="text" name='Cnumber' onChange={(event)=>{
                setcouponValue(event.target.value)
            }}/>
        </form>
    </div>
  )
}
export default Promotion


// Total.jsx

import React, { useState } from 'react'

const Total = ({amount}) => {
  return (
    <div>
    <h3>Total amount is : {amount}</h3>
    </div>
  )
}
export default Total
```

# Derived state

- ==State that is computed from an existing piece of state== or from porps

```javascript
const [items,setitems] = useState([])

// derived state
const totalItems = items.length // this gives total no.of items
const totalSelectedItems = items.filter((item) => item.checked).length // this gives total no.of selected items
```

# Children prop

- The content within the component can be accessed as 'children' in the func component
- It allows us to ==pass the JSX into an element==, which makes them ==resuable==

```javascript

function App(){
return(
	<Button>
	This is childre and content of button
	</Button>
)
}

function Button(children){
return(
	<button style={backgroundColor: "#000", color: "#fff"}>
	{children}
	</button>
)
}
```

![[Pasted image 20231221202352.png]]

# Component Lifecycle
1. Mount/Initial Reneder
2. Re-render
3. Unmount

![[Pasted image 20240117183446.png]]

# useEffect Hook
#hooks
## **Defnition -**
The `useEffect` hook in React is ==used to perform side effects in function components. It allows you to perform tasks that cannot be handled during rendering.==
### side effect
- it means ==' an interaction between a react component and outside of the component '==
- example : data fetching, using API, accessing DOM

## **Syntax -**
- useEffect(callback, [dependency array])

## Functionalities/Explanation (useEffect works when)
- whenever a ==component created/mounted== - callback func runs
- whenever a ==component updated/useState changes== - callback func runs
- whenever a ==component deleted/unmounted== - return : callback func runs

```javascript
useEffect(() => {
	// when component created this 'callback runs'
	console.log("component created");

	// when a component deleted this 'return callback runs'
	return () => {
		console.log("component deleted");
	};
});
```

### ways of creating side effect
1. triggered by EVENTS (onClick, onSubmit,....)
2. triggered by RENDERING (useEffect)

![[Pasted image 20240119191513.png]]

## Event handlers vs Effects

![[Pasted image 20240119192043.png]]
- effect : where the effects are written
- cleanup : each effect can return a cleanup func when a component is mounted or re-rendered


# Redux - Redux Toolkit
#redux

## Def - Redux

## Def - Redux Toolkit
- Reduc toolkit is used to implement Redux functionalities for state management

- used when we need to change states faster and frequently
- used for large applications which provides ==centralized state management== (for small apps we can use ContextAPI)

## Woking of redux
![[Pasted image 20240201145453.png]]

## Installation (u can follow redux-installation steps)
1. ==npm install @reduxjs/toolkit react-redux==
2. ==create new folder "store" and "store.jsx" file== in this folder
3. ==import "configureStore"== in 'store.jsx' as below :
```javascript
// /store/store.jsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {},
});
```
4. ==wrapping the enitre application with store==
   ```javascript
// main.jsx
import { store } from"./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
)
```
5. ==create new folder "reducer" and "counterSlice.jsx" file== in the "store" folder
6. ==import "creatSlice" from reduxToolkit in "counterSlice.jsx"== as below :
   ```javascript
// /store/reducer/counterSlice.jsx
import { createSlice } from '@reduxjs/toolkit'; // function or API from redux toolkit

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  // reducer functions or actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // this generates 'action creators' for each case reducer function

export default counterSlice.reducer; // this generates 'reducers'
```
### Explanation of createSlice :
- This is a function that takes an object with properties :
	- 'name': name of the slice
	- 'initialState': initial state of the slice
	- 'reducers': it contain the reducer functions of the slice
7. ==import 'counterSlice' reducer into the store== as below and
   ```javascript
// /store/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice.jsx"

export const store = configureStore({
	reducer: {
		counter : counterReducer, // now counterSlice is imported
	},
});   
```
8. ==use Redux State and Action in react component== as below :
	1. ==useSelector hook== : to access/read the state from the reducer
	2. ==useDispatch== : to access/call the actions from the reducer
   ```javascript
// App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/reducer/counterSlice'

function App() {
	const { value } = useSelector((state) => state.counter); // used to access/read the state from the reducer
	const dispatch = useDispatch(); // used to access the actions from the reducer
	return (
	    <div>
	      <h1>Counter : {value}</h1>
	      <button
	      onClick={dipatch(increment())}>
		      Increment
	      </button>
	      <button
	      onClick={dipatch(decrement())}>
		      Decrement
	      </button>
	      <button
	      onClick={dipatch(incrementByAmount(5))}>
		      Increment by 5
	      </button>
	    </div>
	);
}

export default App;
```

## Use Asynchronous in redux :
- we can't use asynchronous func in readux easily
- only scynchronous actions can be run in redux reducer
- to use - use ==higherOrderFunc that contais dispatch==

```javascript
// asynchronous func
export const incrementAsync = (amount) => (dispatch) => { //higher order function
	setTimeout(()=>{
		dispatch(incrementByAmount(amount));
	}, 2000); //incrementByAmount() will be called using the 'dispatch' which is defaultly gvn by reduxToolkit for using async func
} // we will be calling this 'incrementAsync' in the 'App' component
```

```javascript
// /store/reducer/counterSlice.jsx
import { createSlice } from '@reduxjs/toolkit'; // function or API from redux toolkit

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // this generates 'action creators' for each case reducer function
// asynchronous func
export const incrementAsync = (amount) => (dispatch) => { //higher order function
	setTimeout(()=>{
		dispatch(incrementByAmount(amount));
	}, 2000); //incrementByAmount() will be called using the 'dispatch' which is defaultly gvn by reduxToolkit for using async func
} // we will be calling this 'incrementAsync' in the 'App' component

export default counterSlice.reducer; // this generates 'reducers'
```

