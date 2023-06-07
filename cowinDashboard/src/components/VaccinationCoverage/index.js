// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

class VaccinationCoverage extends Component {
  render() {
    const {last7DaysVaccination} = this.props
    // console.log(last7DaysVaccination)
    const data = last7DaysVaccination.map(each => ({
      vaccineDate: each.vaccine_date,
      dose1: each.dose_1,
      dose2: each.dose_2,
    }))
    console.log(data)

    return (
      <div className="vaccianntionCoverageDiv">
        <h1 className="vaccineCovPara">Vaccination Coverage</h1>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              dataKey="vaccineDate"
              tick={{
                stroke: 'gray',
                strokeWidth: 1,
              }}
            />
            <YAxis
              //   tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose1" name="Dose1" fill="#1f77b4" barSize="20%" />
            <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationCoverage
