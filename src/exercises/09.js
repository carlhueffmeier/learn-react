// Controlled Form Fields
import React from 'react'

const availableOptions = ['apple', 'grape', 'cherry', 'orange', 'pear', 'peach']
class MyFancyForm extends React.Component {
  state = {
    commaSeparated: '',
    multiline: '',
    multiSelect: [],
  }

  handleCommaSeparatedChange = event => {
    const {value} = event.target
    const allVals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean)
    this.setStateForAllFields(allVals, {commaSeparated: value})
  }

  handleMultilineChange = event => {
    const {value} = event.target
    const allVals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean)
    this.setStateForAllFields(allVals, {multiline: value})
  }

  handleMultiSelectChange = event => {
    const allVals = [...event.target.selectedOptions].map(
      option => option.value,
    )
    this.setStateForAllFields(allVals)
  }

  setStateForAllFields(arrayOfItems, overrides) {
    // I'm leaving this for you because I love you.
    // We love you too Kent
    this.setState({
      commaSeparated: arrayOfItems.join(','),
      multiline: arrayOfItems.join('\n'),
      multiSelect: arrayOfItems.filter(v => availableOptions.includes(v)),
      ...overrides,
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br />
            <input
              value={this.state.commaSeparated}
              onChange={this.handleCommaSeparatedChange}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            multiline values:
            <br />
            <textarea
              value={this.state.multiline}
              onChange={this.handleMultilineChange}
              rows={availableOptions.length}
            />
          </label>
        </div>
        <div>
          <label>
            multiSelect values:
            <br />
            <select
              value={this.state.multiSelect}
              onChange={this.handleMultiSelectChange}
              size={availableOptions.length}
              multiple
            >
              {availableOptions.map(optionValue => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return <MyFancyForm />
}
Usage.title = 'Controlled Form Fields'

export default Usage
