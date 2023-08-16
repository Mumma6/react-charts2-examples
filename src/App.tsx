import "./App.css"
import { registerCharts } from "./registerCharts"
import LineChart from "./graphs/LineChart"
import BarChart from "./graphs/BarChart"
import DoughnutChart from "./graphs/DoughnutChart"
import ScatterChart from "./graphs/ScatterChart"

registerCharts()

function App() {
  return (
    <div className="container">
      <h1>React charts examples</h1>
      <div className="graph-container">
        <LineChart />
      </div>
      <div className="graph-container">
        <BarChart />
      </div>
      <div className="graph-container">
        <DoughnutChart />
      </div>
      <div className="graph-container">
        <ScatterChart />
      </div>
    </div>
  )
}

export default App
