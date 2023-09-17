import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    value: countryAndCapitalsList[0].id,
  }

  event = event => {
    this.setState({value: event.target.value})
  }

  capitalValue = () => {
    const {value} = this.state
    const getCountry = countryAndCapitalsList.find(each => each.id === value)

    return getCountry.country
  }

  render() {
    const country = this.capitalValue()
    const {value} = this.state
    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="h1">Countries And Capitals</h1>
          <div className="bg3">
            <select
              id="select"
              className="bg4"
              onChange={this.event}
              value={value}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <label htmlFor="select">
              <p className="p">is capital of which country</p>
            </label>
          </div>
          <p className="c">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
