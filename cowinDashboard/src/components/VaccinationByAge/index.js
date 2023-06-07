// Write your code here
// Write your code here
import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

class VaccinationByAge extends Component {
  render() {
    const {vaccinationByAge} = this.props

    return (
      <div className="vaccinationByAgeDiv">
        <h1 className="byGenderHeading">Vaccination by Age</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={1000} height={300}>
            <Pie
              cx="50%"
              cy="50%"
              stroke="0"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill=" #2d87bb" />
              <Cell
                name="44-60"
                fill="#a3df9f
"
              />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend
              iconType="square"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationByAge
