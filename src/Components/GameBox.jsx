import { useRef, useState } from "react";
import img from "../Images/OIP-removebg-preview__1_-removebg (1).png";
export default function GameBox() {
  let [case1, setCase1] = useState(false);
  let [case2, setCase2] = useState(false);
  let [case3, setCase3] = useState(false);
  let [case4, setCase4] = useState(false);
  let [case5, setCase5] = useState(false);
  let [case6, setCase6] = useState(false);
  let [case7, setCase7] = useState(false);
  let [case8, setCase8] = useState(false);
  let [case8_case1, setCase8_case1] = useState(false);
  let [case8_case2, setCase8_case2] = useState(false);
  let [case8_case3, setCase8_case3] = useState(false);
  let [case8_case4, setCase8_case4] = useState(false);
  let [case8_case5, setCase8_case5] = useState(false);
  let [case8_case6, setCase8_case6] = useState(false);

  let [onGame, setOnGame] = useState(false);
  let resRef = useRef(null);
  let starRef = useRef(null);
  let stat = "";
  let [arr, setArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  let [counter, setCounter] = useState(0);
  let [PlayerReturn, setPlayerReturn] = useState(false);
  let [position, setPosition] = useState([]);
  let GameStarted = (i, id) => {
    if (onGame && arr[i][id] !== "X" && arr[i][id] !== "O") {
      setArr((p) => [
        [...p[0], (p[i][id] = "O")].slice(0, -1),
        [...p[1]],
        [...p[2]],
      ]);
      setPlayerReturn(false);
      setCounter((p) => p + 1);
      setPosition([i, id]);
    }
  };

  let Restart = () => {
    setArr([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCounter(0);
    setOnGame(false);
    setCase1(false);
    setCase2(false);
    setCase3(false);
    setCase4(false);
    setCase5(false);
    setCase6(false);
    setCase7(false);
    setCase8(false);
    setPlayerReturn(false);
    setCase8_case1(false);
    setCase8_case2(false);
    setCase8_case3(false);
    setCase8_case4(false);
    setCase8_case5(false);
    setCase8_case6(false);
  };
  if (!PlayerReturn && counter === 2) {
    //Case 1-------------------------------------------
    if (position[0] === 1 && position[1] === 0) {
      setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase1(true);
    } else if (position[0] === 2 && position[1] === 0) {
      //Case 2 -----------------------------------------------------
      setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase2(true);
    } else if (position[0] === 0 && position[1] === 1) {
      //Case 3 -----------------------------------------------------
      setArr((p) => [...p, (p[2][0] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase3(true);
    } else if (position[0] === 2 && position[1] === 1) {
      //Case 4 -----------------------------------------------------
      setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase4(true);
    } else if (position[0] === 0 && position[1] === 2) {
      //Case 5 -----------------------------------------------------
      setArr((p) => [...p, (p[2][0] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase5(true);
    } else if (position[0] === 1 && position[1] === 2) {
      //Case 6 -----------------------------------------------------
      setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase6(true);
    } else if (position[0] === 2 && position[1] === 2) {
      //Case 7 -----------------------------------------------------
      setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
      setPlayerReturn(true);
      setCase7(true);
    } else if (position[0] === 1 && position[1] === 1) {
      //Case 8 -----------------------------------------------------
      setArr((p) => [...p, (p[2][2] = "X")].slice(0, -1));
      setCase8(true);
      setPlayerReturn(true);
    }
  }
  if (!PlayerReturn && counter === 3) {
    if (case1) {
      if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[2][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 2 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[0][1] = "X";
        stat = "Win";
      }
    } else if (case2) {
      if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[2][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 0) ||
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 2 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[0][1] = "X";
        stat = "Win";
      }
    } else if (case3) {
      if (position[0] === 1 && position[1] === 0) {
        setArr((p) => [...p, (p[2][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 0 && position[1] === 2) ||
        (position[0] === 2 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[1][0] = "X";
        stat = "Win";
      }
    } else if (case4) {
      if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[1][1] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 1 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[0][1] = "X";
        stat = "Win";
      }
    } else if (case5) {
      if (position[0] === 1 && position[1] === 0) {
        setArr((p) => [...p, (p[2][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 0 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[1][0] = "X";
        stat = "Win";
      }
    } else if (case6) {
      if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[2][0] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 0) ||
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 1) ||
        (position[0] === 2 && position[1] === 2)
      ) {
        arr[0][1] = "X";
        stat = "Win";
      }
    } else if (case7) {
      if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[2][0] = "X")].slice(0, -1));
        setPlayerReturn(true);
      } else if (
        (position[0] === 1 && position[1] === 1) ||
        (position[0] === 1 && position[1] === 2) ||
        (position[0] === 1 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 0) ||
        (position[0] === 2 && position[1] === 1)
      ) {
        arr[0][1] = "X";
        stat = "Win";
      }
    } else if (case8) {
      if (position[0] === 2 && position[1] === 0) {
        setArr((p) => [...p, (p[0][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case1(true);
      } else if (position[0] === 0 && position[1] === 2) {
        setArr((p) => [...p, (p[2][0] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case2(true);
      } else if (position[0] === 1 && position[1] === 0) {
        setArr((p) => [...p, (p[1][2] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case3(true);
      } else if (position[0] === 1 && position[1] === 2) {
        setArr((p) => [...p, (p[1][0] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case4(true);
      } else if (position[0] === 0 && position[1] === 1) {
        setArr((p) => [...p, (p[2][1] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case5(true);
      } else if (position[0] === 2 && position[1] === 1) {
        setArr((p) => [...p, (p[0][1] = "X")].slice(0, -1));
        setPlayerReturn(true);
        setCase8_case6(true);
      }
    }
  }
  if (!PlayerReturn && counter === 4) {
    if (case1) {
      if (position[0] === 1 && position[1] === 1) {
        arr[1][2] = "X";
        stat = "Win";
      } else if (position[0] === 1 && position[1] === 2) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case2) {
      if (position[0] === 1 && position[1] === 1) {
        arr[1][2] = "X";
        stat = "Win";
      } else if (position[0] === 1 && position[1] === 2) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case3) {
      if (position[0] === 1 && position[1] === 1) {
        arr[2][1] = "X";
        stat = "Win";
      } else if (position[0] === 2 && position[1] === 1) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case4) {
      if (position[0] === 2 && position[1] === 0) {
        arr[2][2] = "X";
        stat = "Win";
      } else if (position[0] === 2 && position[1] === 2) {
        arr[2][0] = "X";
        stat = "Win";
      } else {
        arr[2][0] = "X";
        stat = "Win";
      }
    } else if (case5) {
      if (position[0] === 1 && position[1] === 1) {
        arr[2][1] = "X";
        stat = "Win";
      } else if (position[0] === 2 && position[1] === 1) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case6) {
      if (position[0] === 1 && position[1] === 1) {
        arr[1][0] = "X";
        stat = "Win";
      } else if (position[0] === 1 && position[1] === 0) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case7) {
      if (position[0] === 1 && position[1] === 1) {
        arr[1][0] = "X";
        stat = "Win";
      } else if (position[0] === 1 && position[1] === 0) {
        arr[1][1] = "X";
        stat = "Win";
      } else {
        arr[1][1] = "X";
        stat = "Win";
      }
    } else if (case8) {
      if (case8_case1) {
        if (position[0] === 1 && position[1] === 2) {
          arr[0][1] = "X";
          stat = "Win";
        } else if (position[0] === 0 && position[1] === 1) {
          arr[1][2] = "X";
          stat = "Win";
        } else {
          arr[1][2] = "X";
          stat = "Win";
        }
      } else if (case8_case2) {
        if (position[0] === 1 && position[1] === 0) {
          arr[2][1] = "X";
          stat = "Win";
        } else if (position[0] === 2 && position[1] === 1) {
          arr[1][0] = "X";
          stat = "Win";
        } else {
          arr[1][0] = "X";
          stat = "Win";
        }
      } else if (case8_case3) {
        if (position[0] === 0 && position[1] === 2) {
          arr[2][0] = "X";
          setPlayerReturn(true);
        } else {
          arr[0][2] = "X";
          stat = "Win";
        }
      } else if (case8_case4) {
        if (position[0] === 2 && position[1] === 0) {
          arr[0][2] = "X";
          setPlayerReturn(true);
        } else {
          arr[2][0] = "X";
          stat = "Win";
        }
      } else if (case8_case5) {
        if (position[0] === 2 && position[1] === 0) {
          arr[0][2] = "X";
          setPlayerReturn(true);
        } else {
          arr[2][0] = "X";
          stat = "Win";
        }
      } else if (case8_case6) {
        if (position[0] === 0 && position[1] === 2) {
          arr[2][0] = "X";
          setPlayerReturn(true);
        } else {
          arr[0][2] = "X";
          stat = "Win";
        }
      }
    }
  }
  if (!PlayerReturn && counter === 5) {
    if (case8) {
      if (case8_case3) {
        if (position[0] === 2 && position[1] === 1) {
          arr[0][1] = "X"; //==> Daw
          stat = "Draw";
        } else {
          arr[2][1] = "X";
          stat = "Win";
        }
      } else if (case8_case4) {
        if (position[0] === 0 && position[1] === 1) {
          arr[2][1] = "X"; //=> Daw
          stat = "Draw";
        } else {
          arr[0][1] = "X";
          stat = "Win";
        }
      } else if (case8_case5) {
        if (position[0] === 1 && position[1] === 2) {
          arr[1][0] = "X"; //=> Daw
          stat = "Draw";
        } else {
          arr[1][2] = "X";
          stat = "Win";
        }
      } else if (case8_case6) {
        if (position[0] === 1 && position[1] === 0) {
          arr[1][2] = "X"; //=> Daw
          stat = "Draw";
        } else {
          arr[1][0] = "X";
          stat = "Win";
        }
      }
    }
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (starRef?.current?.style?.display === "block")
        starRef?.current?.click();
      if (resRef?.current?.style?.display === "block") resRef?.current?.click();
    }
  });
  // if (Notification.permission === "granted") {
  //   let interval;
  //   let notification;
  //   document.addEventListener("visibilitychange", () => {
  //     if (document.visibilityState === "hidden") {
  //       let timeLeave = new Date();
  //       interval = setInterval(() => {
  //         notification = new Notification("Mayza", {
  //           body: `Oh come on ,Are You Afraid of defeating You ? You have been gone for ${Math.floor(
  //             (new Date() - timeLeave) / 1000
  //           )} second`,
  //           icon: img,
  //         });
  //       }, 1000);
  //     } else {
  //       if (interval) clearInterval(interval);
  //       if (notification) notification.close();
  //     }
  //   });
  // } else {
  //   Notification.requestPermission();
  // }
  let [active, setActive] = useState("");
  let winStat = [0, 0, 0];
  if (stat === "Win") {
    Notification.requestPermission().then((per) => {
      if (per === "granted") {
        let notf = new Notification("Mayza", {
          icon: img,
          body: `I beat You, Don't cry little kide , let's play again !!`,
        });
      } else {
        Notification.requestPermission();
        setActive(" but Please Allow Mayza to send Notifications");
      }
    });

    if (arr[0][0] === "X" && arr[0][1] === "X" && arr[0][2] === "X") {
      winStat = [
        [1, 1],
        [1, 2],
        [1, 3],
      ];
    } else if (arr[1][0] === "X" && arr[1][1] === "X" && arr[1][2] === "X") {
      winStat = [
        [2, 1],
        [2, 2],
        [2, 3],
      ];
    } else if (arr[2][0] === "X" && arr[2][1] === "X" && arr[2][2] === "X") {
      winStat = [
        [3, 1],
        [3, 2],
        [3, 3],
      ];
    } else if (arr[0][0] === "X" && arr[1][0] === "X" && arr[2][0] === "X") {
      winStat = [
        [1, 1],
        [2, 1],
        [3, 1],
      ];
    } else if (arr[0][1] === "X" && arr[1][1] === "X" && arr[2][1] === "X") {
      winStat = [
        [1, 2],
        [2, 2],
        [3, 2],
      ];
    } else if (arr[0][2] === "X" && arr[1][2] === "X" && arr[2][2] === "X") {
      winStat = [
        [1, 3],
        [2, 3],
        [3, 3],
      ];
    } else if (arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") {
      winStat = [
        [1, 1],
        [2, 2],
        [3, 3],
      ];
    } else if (arr[0][2] === "X" && arr[1][1] === "X" && arr[2][0] === "X") {
      winStat = [
        [1, 3],
        [2, 2],
        [3, 1],
      ];
    }
  }

  return (
    <div className="d-flex-col">
      <section
        className="game-box"
        style={{ pointerEvents: PlayerReturn ? "all" : "none" }}
      >
        {arr.map((m, i) => (
          <div className="row" key={i}>
            {m.map((x, id) => (
              <div
                className="sqr"
                id={id}
                style={{
                  backgroundColor:
                    (i + 1 === winStat[0][0] && id + 1 === winStat[0][1]) ||
                    (i + 1 === winStat[1][0] && id + 1 === winStat[1][1]) ||
                    (i + 1 === winStat[2][0] && id + 1 === winStat[2][1])
                      ? "var(--Prcl)"
                      : "",
                  color:
                    (i + 1 === winStat[0][0] && id + 1 === winStat[0][1]) ||
                    (i + 1 === winStat[1][0] && id + 1 === winStat[1][1]) ||
                    (i + 1 === winStat[2][0] && id + 1 === winStat[2][1])
                      ? "var(--white)"
                      : "",
                }}
                key={id}
                onClick={() => {
                  GameStarted(i, id);
                }}
              >
                {" "}
                <p className="sqr-content" key={id + i}>
                  {" "}
                  {x}{" "}
                </p>
              </div>
            ))}
          </div>
        ))}{" "}
      </section>
      <button
        className="start"
        onClick={() => {
          setOnGame(true);
          setArr((p) => [
            [...p[0], (p[0][0] = "X")].slice(0, -1),
            [...p[1]],
            [...p[2]],
          ]);
          setPlayerReturn(true);
          setCounter((p) => p + 1);
        }}
        style={{ display: onGame ? "none" : "block" }}
        ref={starRef}
      >
        <i style={{ paddingRight: "10px" }} className="fa-solid fa-play"></i>{" "}
        Start playing
      </button>
      <button
        className="start"
        onClick={Restart}
        style={{ display: onGame ? "block" : "none" }}
        ref={resRef}
      >
        <i
          style={{ paddingRight: "10px" }}
          className="fa-solid fa-arrow-rotate-right"
        ></i>{" "}
        Restart
      </button>
      <p className="winstat">
        {stat === "Win"
          ? "Mayza Wins, I told You that You can't win " + active
          : stat == "Draw"
          ? "It's Draw , Try Again!! And I will win"
          : ""}{" "}
      </p>
    </div>
  );
}
