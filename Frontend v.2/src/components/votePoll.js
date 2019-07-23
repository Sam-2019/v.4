import React from "react";
import axios from "axios";

import "./viewPoll.css";

class VotePoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: [],
      option: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3050/polls/")
      .then(res => {
        this.setState({ polls: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChange(e) {
    this.setState({
      option: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`option: ${this.state.option}`);
  }

  dismiss(id) {
    var updatedPoll = this.state.polls.filter(item => item._id !== id);
    this.setState({ polls: updatedPoll });
    alert(`Thanks for your vote: ${this.state.option}`);
  }

  onDismiss(id) {
    if (this.state.option === "") {
      alert("Please Vote");
    } else this.dismiss(id);

    var newVote = {
      option: this.state.option
    };

    axios
      .post("http://localhost:3050/votes/add", newVote)
      .then(res => console.log(res.data));

    this.setState({
      option: ""
    });
  }

  render() {
    return (
      <div className="RoadtoReact mt-3">
        <h3 className="title" style={{ textAlign: "center" }}>
          Vote Poll
        </h3>
        {this.state.polls.map(item => (
          <div key={item._id}>
            <div className="container col-md-5 mt-3 mb-4">
              <div className="row">
                <div className="col">
                  <div className="card-group">
                    <div className="card shadow p-2 border-0">
                      <div className="card-header border-0 ">
                        <div className="media ">
                          <div className="media-body">
                            <h5 className="mb-0">Sam</h5>
                            <figcaption className="figure-caption one">
                              @SammyM
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                          <h5 className="card-title">{item.question}</h5>
                          <div>
                            <label>
                              <input
                                className="mr-1"
                                name="option"
                                type="radio"
                                value={item.option1}
                                checked={this.state.option === item.option1}
                                onChange={this.onChange}
                              />
                              {item.option1}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                className="mr-1"
                                name="option"
                                type="radio"
                                value={item.option2}
                                checked={this.state.option === item.option2}
                                onChange={this.onChange}
                              />
                              {item.option2}
                            </label>
                          </div>
                          <div className="mb-3">
                            <label>
                              <input
                                className="mr-1"
                                name="option"
                                type="radio"
                                value={item.option3}
                                checked={this.state.option === item.option3}
                                onChange={this.onChange}
                              />
                              {item.option3}
                            </label>
                          </div>
                          <button
                            className="btn btn-primary "
                            onClick={() => this.onDismiss(item._id)}
                            value="Vote"
                          >
                            Vote
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VotePoll;