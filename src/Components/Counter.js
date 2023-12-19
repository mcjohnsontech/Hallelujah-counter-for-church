import { useState, useEffect } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import leftArrow from "../left-arrow.png";
import rightArrow from "../right-arrow.png";

function Counter() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [count, setCount] = useState(0);

  const leftHand = () => {
    count > 0 ? setCount(count - 1) : console.log("");
  };
  const rightHand = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "ArrowRight") {
        setCount(count + 1);
      } else if (event.key === "ArrowLeft" && count > 0) {
        setCount(count - 1);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [count]);

  const integer = parseInt(id);

  if (count === integer) {
    navigate(`/conffeti/${integer}`);
    console.log("succeded");
  }
  function addedZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }
  const adjustAccording = id.length;
  const mee = addedZeros(count, adjustAccording);

  let strLetters = [...mee];

  return (
    <div className="App-header">
      <div className="div">
        {strLetters.map((x) => (
          <span>{x}</span>
        ))}
      </div>
      <div className="arrows">
        <button className="App-button-count" onClick={leftHand}>
          -
        </button>
        <button className="App-button-count" onClick={rightHand}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numbers: 0,
//     };
//   }

//   componentDidMount() {
//     document.addEventListener("keyup", this.detectKeyUp, true);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keyup", this.detectKeyUp, true);
//   }

//   detectKeyUp = (e) => {
//     const { numbers } = this.state;

//     switch (e.key) {
//       case "ArrowLeft":
//         if (numbers > 0) {
//           this.setState({ numbers: numbers - 1 });
//         }
//         break;
//       case "ArrowRight":
//         this.setState({ numbers: numbers + 1 });
//         break;
//       default:
//         break;
//     }
//   };

//   render() {
//     const { numbers } = this.state;
//     console.log(this.props);

//     return (
//       <div>
//         <p className="App h1">{numbers}</p>
//       </div>
//     );
//   }
// }
// export default Counter;
