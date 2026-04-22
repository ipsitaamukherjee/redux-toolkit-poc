# Redux Toolkit POC

This project is a Proof of Concept (POC) demonstrating how to use **Redux Toolkit** for state management in a modern React application, built with [Vite](https://vitejs.dev/) for fast development and hot module replacement (HMR).

## Features

- **React** functional components
- **Redux Toolkit** for simplified state management
- **React-Redux** hooks (`useSelector`, `useDispatch`)
- Example counter page with increment/decrement functionality
- Modular Redux slice structure
- ESLint integration for code quality
- Modern, responsive UI styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
src/
  pages/
    Counter.jsx        # Main counter page using Redux state
  redux/
    slice/
      CounterSlice.js  # Redux slice for counter logic
  App.jsx
  main.jsx
  styles.css           # Global and component styles
```

## How It Works

- The **Counter** page uses `useSelector` to read the current count from the Redux store and `useDispatch` to send increment/decrement actions.
- The Redux logic is encapsulated in a slice (`CounterSlice.js`) using Redux Toolkit's `createSlice`.
- All state changes are managed in a predictable, testable way.

## Why Redux Toolkit?

Redux Toolkit simplifies Redux usage by reducing boilerplate and providing best practices out of the box. It is the recommended approach for writing Redux logic in modern React apps.

## License

This project is for demonstration purposes.