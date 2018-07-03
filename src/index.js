import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Test extends React.Component {
  constructor() {
    super();
    this.state = { rounds: [] };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
    )
      .then(res => res.json())
      .then(data => {
        console.log("ok");
        console.log(data.rounds);
        this.setState({
          rounds: data.rounds
        });
      })
      .catch(() => {});
  }
  render() {
    const { rounds } = this.state;
    return (
      <div>
        <h1>Rounds</h1>
        {rounds.map((item, key) => {
          console.log(item.name);
          return (
            <div key={key}>
              <h2>{item.name}</h2>
              <h3>Matchs</h3>
              <div>
                {item.matches.map((match, keyMatch) => {
                  console.log(match);
                  return (
                    <div>
                      <div key={keyMatch}>
                        {match.team1.name} - {match.team2.name} <br /> Score :{" "}
                        {match.score1} - {match.score2} <br />
                        {match.group} <br /> {match.stadium.name} <br />{" "}
                        {match.date} {match.time} {match.timezone}
                      </div>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
