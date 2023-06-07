import {Component} from 'react'
import './index.css'

const employmentFilterList = []

class FiltersPart extends Component {
  employmentFiltersSelected = e => {
    const {setFilter} = this.props
    const ETValue = e.target.value
    if (e.target.checked === true) {
      employmentFilterList.push(ETValue)
      //   employmentFilterList.push(ETValue.toUpperCase().replace(' ', ''))
    } else {
      const checkAge = each => each === ETValue

      const removedElement = employmentFilterList.findIndex(checkAge)
      //   console.log(removedElement)
      employmentFilterList.splice(removedElement, 1)
    }
    // console.log(employmentFilterList)
    const finalEmploymentFilterList = employmentFilterList.map(eachItem =>
      eachItem.toUpperCase().replace(' ', ''),
    )
    const filterFinalValue = finalEmploymentFilterList.join(',')
    setFilter(filterFinalValue)
  }

  salaryFiltersSelected = e => {
    const {setPackage} = this.props
    console.log('flterssss')

    console.log(e.target.checked)
    if (e.target.checked) {
      const thePackage = e.target.value
      setPackage(thePackage)
    } else {
      const theEmptyPackage = ''
      setPackage(theEmptyPackage)
    }
  }

  render() {
    const {employmentTypesList, salaryRangesList} = this.props
    console.log('employmentTypesList')

    console.log(employmentTypesList)

    return (
      <div className="fullFilterOuter">
        <hr className="lineBreak" />
        <h1 className="fullFilterPara1">Type of Employment</h1>
        <ul className="ulEl1">
          {employmentTypesList.map(each => (
            <li className="listEl" key={each.employmentTypeId}>
              <input
                onClick={this.employmentFiltersSelected}
                id={each.employmentTypeId}
                type="checkbox"
                className="checkboxEl"
                value={each.label}
              />
              <label className="labelEl" htmlFor={each.employmentTypeId}>
                {each.label}
              </label>
            </li>
          ))}
        </ul>

        <hr className="lineBreak" />
        <h1 className="fullFilterPara1">Salary Range</h1>
        <ul className="ulEl1">
          {salaryRangesList.map(each => (
            <li className="listEl" key={each.salaryRangeId}>
              <input
                onClick={this.salaryFiltersSelected}
                id={each.salaryRangeId}
                type="checkbox"
                className="checkboxEl"
                value={each.salaryRangeId}
              />
              <label className="labelEl" htmlFor={each.salaryRangeId}>
                {each.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default FiltersPart
