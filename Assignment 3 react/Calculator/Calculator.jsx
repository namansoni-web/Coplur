
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState(""); 
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>

          <div>
            <input 
            type="button" 
            value="AC" 
            style={{ background: "red" }} 
            onClick={(e) => setValue("")} 
            />
            <input
              type="button"
              value="DE"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>

          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="equal"
              value="="
              onClick={(e) => setValue(eval(value))}
            />
          </div>      
          
        <div>
        <input
        type="button"
        value="√"
        onClick={() => {
        try {
          setValue(Math.sqrt(eval(value)).toString());
        } catch {
          setValue("Error");
            }
         }}
         />

        <input  
         type="button"
         value="%"
         onClick={() => {
        try {
          setValue((eval(value) / 100).toString());
        } catch {
          setValue("Error");
        }
        }}
        />
     <input
        type="button"
        value="x²"
        onClick={() => {
          try {
            setValue((eval(value) ** 2).toString());
          } catch {
            setValue("Error");
          }
        }}
        />

        <input
          type="button"
          value="π"
          onClick={() => setValue(value + Math.PI.toFixed(6))}
        />
        </div>

        </form>
      </div>
    </div>
  );
}
export default Calculator;