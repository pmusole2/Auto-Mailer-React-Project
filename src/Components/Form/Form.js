import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      errorCode: "",
      errorDesc: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState( { [e.target.name]: e.target.value } )
  };

  render() {
    return (
      <form className="text-center">
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
        <button type="submit" onClick={this.handleChange} className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
