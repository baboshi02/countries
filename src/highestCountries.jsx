import { tenHighestPopulation } from "./populatedCountries.js";

const worldPopulation = tenHighestPopulation[0].population;

const containerStyle = {
  display: "flex",
  alignItems: "enter",
  justifyContent: "center",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "auto 400px auto ",
  gap: "3px",
  textAlign: "left",
};
const Entry = () => {
  let list = tenHighestPopulation.map((entry) => {
    let percentage = (entry.population / worldPopulation) * 100;
    return (
      <>
        <div>{entry.country}</div>
        <div
          style={{ backgroundColor: "orange", width: `${percentage}%` }}
        ></div>
        <div>{entry.population.toLocaleString("en-US")}</div>
      </>
    );
  });
  return list;
};
const Container = () => {
  return (
    <div style={containerStyle}>
      <div style={gridContainer}>
        <Entry />
      </div>
    </div>
  );
};

export function HighestCountries() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Montserrat",
        backgroundColor: "#2F3C7E",
        color: "#FBEAEB",
      }}
    >
      <h3>World Population</h3>
      <small>Ten Most Populated Countries</small>
      <Container />
    </div>
  );
}
