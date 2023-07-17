export const calculation = () => {
  let a = "";
  let b = "";
  let sign = "";
  let finish = false;

  const digit = Array.from("0123456789.");
  const action = ["÷", "x", "—", "+"];
  const out = document.getElementById("screen_text");

  function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
    console.log(a, b, sign);
  }

  function changeSign() {
    if (finish===false && b==="") {
      a = +a;
      a = -a;
      out.textContent = a;
      console.log(a, b, sign);
    } else if (finish===false && b!==""){
      b= +b;
      b = -b;
      out.textContent = b;
      console.log(a, b, sign);
    }
    if (finish===true) {
      a = +a;
      a = -a;
      b = "";
      finish = false;
      out.textContent = a;
      console.log(a, b, sign);
    }
  }

  function takePercent() {
    a = +a / 100;
    b = "";
    out.textContent = a.toFixed(2);
    console.log(a, b, sign);
  }

  calculator.onclick = (event) => {
    if (!event.target.tagName.toLowerCase() === "button") return;
    if (event.target.id === "AC") clearAll();
    if (event.target.id === "plusminus") changeSign();
    if (event.target.id === "percent") takePercent();
    if (event.target.id === "mode") {
      return;
    }

    //получаю нажатую кнопку - key:
    const key = event.target.textContent;

    // нажата 0-9 или .:
    if (digit.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        if (a > 99999999) {
          out.textContent = "Too big";
        } else if (a.length > 9) {
          a = (+a).toFixed(2);
          out.textContent = a;
        } else {
          out.textContent = a;
        }  
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        out.textContent = b;
      } else {
        b += key;
        if (b > 99999999) {
          out.textContent = "Too big";
        } else if (b.length > 9) {
          b = (+b).toFixed(2);
          out.textContent = b;
        } else {
          out.textContent = b;
        }
      }
      console.log(a, b, sign);
    }
    // нажата +, -, x или /
    else if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.log(a, b, sign);
    }
    // нажата =:
    else if (key === "=") {
      if (a !== "" && b === "") b = a;
      if (a === "" && b === "") a = 0;
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "—":
          a = a - b;
          break;
        case "x":
          a = a * b;
          break;
        case "÷":
          if (b === "0") {
            out.textContent = "Mistake";
            a = "";
            b = "";
            sign = "";
            return;
          }
          a = a / b;
          a = +a.toFixed(2);
          break;
      }
      finish = true;
      if (a > 9999999) {
        out.textContent = "Too big";
      } else {
        out.textContent = a;
      }
      
      console.log(a, b, sign);
    }
  };
};
