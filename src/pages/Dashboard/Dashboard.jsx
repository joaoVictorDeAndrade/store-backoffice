import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Card";
import {Chart} from "react-google-charts";
import Colors from "../../Theme/Colors";

import {Container, Content} from "./Dashboard.styles";

export const data = [
  ["Meses", "Vendas", "Gastos"],
  ["SET", 1000, 400],
  ["OUT", 1170, 460],
  ["NOV", 660, 1120],
  ["DEZ", 1030, 540],
];

export const options = {
  title: "Julie Store Lucros",
  hAxis: {title: "Meses", titleTextStyle: {color: "#333"}},
  vAxis: {minValue: 0},
  chartArea: {width: "50%", height: "70%"},
  backgroundColor: "transparent",
  colors: [`${Colors.primary}`, `${Colors.tertiary}`],
};

export default function Dashboard() {
  return (
    <Container>
      <Header></Header>
      <SideBar></SideBar>
      <Content>
        <div className="card">
          <Chart
            chartType="AreaChart"
            data={data}
            options={options}
            legendToggle
          />
        </div>

        <div className="card">
          <Chart
            chartType="AreaChart"
            data={data}
            options={options}
            legendToggle
          />
        </div>

        <div className="card" style={{gridColumn: "1 / -1"}}>
          <Chart
            chartType="AreaChart"
            data={data}
            options={options}
            legendToggle
          />
        </div>
      </Content>
    </Container>
  );
}

const CardStyle = {
  gridColumn: "1 / -1",
  backgroundColor: Colors.shape,
  margin: "0 80px",
};
