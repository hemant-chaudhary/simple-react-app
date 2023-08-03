const heading = React.createElement(
  "h1",
  { id: "heading", class: "head", style: {color: "blue",  fontSize: "18"  } },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
