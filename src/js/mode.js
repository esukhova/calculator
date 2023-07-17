export const changeMode = () => {
  if (localStorage.getItem("mode")) {
    calculator.className = localStorage.getItem("mode");
  } else {
    calculator.className = 'black';
  }

  const mode = localStorage.getItem("mode");

  document.getElementById("mode").onclick = () => {
    if (calculator.className === "black") {
      calculator.className = "square";
      localStorage.setItem("mode", "square");
    } else {
      if (calculator.className === "square") {
        calculator.className = "brown";
        localStorage.setItem("mode", "brown");
      } else {
        if (calculator.className === "brown") {
          calculator.className = "pink";
          localStorage.setItem("mode", "pink");
        } else {
          calculator.className = "black";
          localStorage.setItem("mode", "black");
        }
      }
    }
  };
};
