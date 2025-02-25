import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {firstName: event.target.firstName.value, lastName: event.target.lastName.value}
    let dataArray = [...this.state.submittedData, formData]
    this.setState({
      submittedData: dataArray
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(element => {return <div><span>{element.firstName}</span><span>{element.lastName}</span></div>})
  }

  render() {
    return (
    <div>
      <form onSubmit={(event) => this.handleSubmit(event)} >
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
      {this.listOfSubmissions()}
    </div>
    )
  }
}

export default Form;