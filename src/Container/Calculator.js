import React, { Component } from "react";
import Aux from "../hoc/Auxiliary";
import Number from "../Components/Number/Number";
import Operator from "../Components/Operators/Operator";
import Equals from "../Components/Utilities/Equals/Equals";
import DisplayArea from "../Components/DisplayArea/DisplayArea";
import classes from "./Calculator.module.css";
import PositiveNegative from "../Components/PositiveNegative/PositiveNegative";
import Decimal from "../Components/Decimal/Decimal";
import ClearAll from "../Components/Utilities/ClearAll/ClearAll";
import Backspace from "../Components/Utilities/Backspace/Backspace";
class Calculator extends Component {
  state = {
    inputVal1: 0,
    inputVal2: 0,
    operator: "",
    answer: 0
  };

  handleNumberClick = (value) => {
    console.log(value);

    this.setState((prevState) => {
      if (prevState.operator === "") {
        console.log("Getting val 1");

        if (prevState.inputVal1.toString().length <= 5) {
          if (prevState.inputVal1 === 0) {
            return { answer: 0, inputVal1: parseInt(value) };
          } else {
            return {
              answer: 0,
              inputVal1: prevState.inputVal1 * 10 + parseInt(value)
            };
          }
        }
      } else {
        console.log("Getting val 2");
        if (prevState.inputVal2.toString().length <= 5) {
          if (prevState.inputVal2 === 0) {
            return { answer: 0, inputVal2: parseInt(value) };
          } else {
            return {
              answer: 0,
              inputVal2: prevState.inputVal2 * 10 + parseInt(value)
            };
          }
        }
      }
    });
  };

  handleOperatorClick = (value) => {
    console.log(value);
    this.setState(() => {
      return { operator: value };
    });
  };

  getResult = () => {
    if (this.state.operator === "X") {
      console.log(
        parseInt(this.state.inputVal1) * parseInt(this.state.inputVal2)
      );

      this.setState({
        inputVal1: 0,
        inputVal2: 0,
        operator: "",
        answer: parseInt(this.state.inputVal1) * parseInt(this.state.inputVal2)
      });
    } else if (this.state.operator === "+") {
      this.setState({
        inputVal1: 0,
        inputVal2: 0,
        operator: "",
        answer: parseInt(this.state.inputVal1) + parseInt(this.state.inputVal2)
      });
    } else if (this.state.operator === "-") {
      this.setState({
        inputVal1: 0,
        inputVal2: 0,
        operator: "",
        answer: parseInt(this.state.inputVal1) - parseInt(this.state.inputVal2)
      });
    } else if (this.state.operator === "/") {
      this.setState({
        inputVal1: 0,
        inputVal2: 0,
        operator: "",
        answer: parseInt(this.state.inputVal1) / parseInt(this.state.inputVal2)
      });
    }
  };

  clearAll = () => {
    this.setState({
      answer: 0,
      inputVal1: 0,
      inputVal2: 0,
      operator: ""
    });
  };

  handleDecimalClick = () => {
    this.setState((prevState) => {
      if (prevState.operator === "") {
        return { inputVal1: prevState };
      } else {
      }
    });
  };

  handleBackspace = () => {
    this.setState((prevState) => {
      if (prevState.operator === "") {
        return {
          inputVal1: (prevState.inputVal1 - (prevState.inputVal1 % 10)) / 10
        };
      } else {
        return {
          inputVal2: (prevState.inputVal2 - (prevState.inputVal2 % 10)) / 10
        };
      }
    });
  };

  handleSignChange = () => {
    this.setState((prevState) => {
      if (prevState.operator === "") {
        return {
          inputVal1: -prevState.inputVal1
        };
      } else {
        return {
          inputVal2: -prevState.inputVal2
        };
      }
    });
  };

  render() {
    let display;

    if (this.state.answer !== 0) {
      display = (
        <DisplayArea operator={this.state.operator} value={this.state.answer} />
      );
    } else if (this.state.operator === "") {
      display = (
        <DisplayArea
          operator={this.state.operator}
          value={this.state.inputVal1}
        />
      );
    } else {
      display = (
        <DisplayArea
          operator={this.state.operator}
          value={this.state.inputVal2}
        />
      );
    }

    return (
      <Aux>
        <h1 className={classes.heading}>Calculator App</h1>
        <div className={classes.Calculator}>
          {display}
          <ClearAll handleClear={this.clearAll} value="CLEAR" />
          <Backspace handleBackspace={this.handleBackspace} value="B" />
          <Operator handleOperation={this.handleOperatorClick} value="/" />
          <Number handleClick={this.handleNumberClick} value="1" />
          <Number handleClick={this.handleNumberClick} value="2" />
          <Number handleClick={this.handleNumberClick} value="3" />
          <Operator handleOperation={this.handleOperatorClick} value="X" />
          <Number handleClick={this.handleNumberClick} value="4" />
          <Number handleClick={this.handleNumberClick} value="5" />
          <Number handleClick={this.handleNumberClick} value="6" />
          <Operator handleOperation={this.handleOperatorClick} value="-" />
          <Number handleClick={this.handleNumberClick} value="7" />
          <Number handleClick={this.handleNumberClick} value="8" />
          <Number handleClick={this.handleNumberClick} value="9" />
          <Operator handleOperation={this.handleOperatorClick} value="+" />
          <Number handleClick={this.handleNumberClick} value="0" />
          <PositiveNegative
            handleSignChange={this.handleSignChange}
            value="+/-"
          />
          <Decimal hangleDecimalClick={this.handleDecimalClick} value="." />
          <Equals value="=" handleEquals={this.getResult} />
        </div>
      </Aux>
    );
  }
}

export default Calculator;
