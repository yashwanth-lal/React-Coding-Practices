// Write your code here
// Write your code here
import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

class VaccinationByGender extends Component {
  render() {
    const {vaccinationByGender} = this.props

    return (
      <div className="vaccinationByGenderDiv">
        <h1 className="byGenderHeading">Vaccination by gender</h1>

        <ResponsiveContainer className="jd" width="100%" height={300}>
          <PieChart width={1000} height={300}>
            <Pie
              className="recharts-surface"
              cx="50%"
              cy="50%"
              data={vaccinationByGender}
              startAngle={180}
              endAngle={0}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill=" #f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
