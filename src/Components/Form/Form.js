import React from 'react'

class Form extends React.Component {
    constructor(){
        super()
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log('Clicked')
    }

    render(){
        return (
            <form className="text-center" onSubmit={this.handleChange}>
                <div className="form-group row jumbotron">
                    <div className="col">
                        <label htmlFor="date">Date </label>
                        <input type="date" name="" id="date" className="form-control form-control-sm"/>
                    </div>
                    <div className="col ml-2">
                        <label htmlFor="time">Time </label>
                        <input type="time" name="" id="time" className="form-control form-control-sm"/>
                    </div>
                </div>
                <div className="form-group row jumbotron">
                    <div className="col">
                        <label htmlFor="error-code">Error Code</label>
                        <input type="text" name="" id="error-code" className="form-control form-control-sm"/>
                    </div>
                </div>
                <div className="form-group row jumbotron">
                    <div className="col">
                        <label htmlFor="error-desc">Error Description</label>
                        <textarea id="error-desc" className="form-control" placeholder="Error Description" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Form