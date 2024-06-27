const withColor =
  (Element) =>
  ({ color }) =>
    (
      <Element
        style={{ backgroundColor: color, height: "20px", width: "100px" }}
      />
    );

const Button = (props) => {
  return <button {...props}></button>;
};

const ColoredButton = withColor(Button);

function App() {
  return (
    <div>
      <ColoredButton color="yellow"></ColoredButton>
      <ColoredButton color="green"></ColoredButton>
      <ColoredButton color="blue"></ColoredButton>
    </div>
  );
}

export default App;
