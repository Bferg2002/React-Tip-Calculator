# Lab — Tip Calculator

Build a tip calculator in React using what you know about props and useState.

---

## What You're Building

A tip calculator that lets a user:

- Enter a bill amount
- Select a tip percentage
- See the tip amount and total bill update automatically

---

## Requirements

### Components

You must build and use the following components:

**`TipCalculator.jsx`**
- Lives in `src/components/`
- This is your main component — it holds all the state and logic
- Accepts a `restaurantName` prop that displays at the top of the calculator

**`TipOption.jsx`**
- Lives in `src/components/`
- Represents a single tip percentage button (15%, 18%, 20%, 25%)
- Accepts a `percentage` prop and an `onSelect` prop
- When clicked, it tells the parent which percentage was selected

### State

Inside `TipCalculator`, you must use `useState` to track:

- The bill amount the user types in
- The currently selected tip percentage

### Calculated Values

Derive these from your state — do not store them in state:

- Tip amount (`bill * tipPercentage`)
- Total (`bill + tipAmount`)

### Display

Your calculator must show:

- The restaurant name (from props)
- An input field for the bill amount
- Tip percentage options (at least 4) rendered using your `TipOption` component
- The calculated tip amount
- The calculated total

### App.jsx

- Import and render `TipCalculator`
- Pass in a `restaurantName` prop of your choice

---

## File Structure

```
tip-calculator/
├── src/
│   ├── components/
│   │   ├── TipCalculator.jsx
│   │   └── TipOption.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---
## Stretch Goals (optional)

- Add a "Split the bill" feature — a number input for how many people, divide the total by that number and display the per-person amount
- Highlight the currently selected tip button so the user knows which one is active
- Add a Reset button that clears the bill and resets the tip to the default
- Display a custom message for different tip amounts (ex: "Generous!" for 25%)

---

## Submitting

1. Commit your work with a clear message (`build tip calculator with props and state`)
2. Push to your GitHub repo
3. Submit your repo link
