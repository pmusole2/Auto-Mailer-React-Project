import React from "react";
import axios from 'axios'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      errorCode: "",
      errorDesc: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    e.preventDefault();
    this.setState( { [e.target.name]: e.target.value } )
  };

  async handleSubmit(e){
      e.preventDefault()
      const { date, time, errorCode, errorDesc } = this.state

      const form = await axios.post('/api/form', {
          date,
          time,
          errorCode,
          errorDesc
      })
  }

  render() {
    return (
      <form className="text-center" onSubmit={this.handleSubmit}>
        <div className="form-group row jumbotron">
          <div className="col">
            <label htmlFor="date">Date </label>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control form-control-sm"
              onChange={this.handleChange}
            />
          </div>
          <div className="col ml-2">
            <label htmlFor="time">Time </label>
            <input
              type="time"
              name="time"
              id="time"
              className="form-control form-control-sm"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row jumbotron">
          <div className="col">
            <label htmlFor="error-code">Error Code</label>
            <input
              type="text"
              name="errorCode"
              id="error-code"
              className="form-control form-control-sm"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row jumbotron">
          <div className="col">
            <label htmlFor="error-desc">Error Description</label>
            <textarea
              id="error-desc"
              className="form-control"
              placeholder="Error Description"
              onChange={this.handleChange}
              name="errorDesc"
              required
            />
          </div>
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
