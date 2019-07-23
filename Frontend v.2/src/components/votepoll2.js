import React from "react";
import axios from "axios";

import "./viewPoll.css";

var Poll = props => (
  <span>

  </span>
);

class VotePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      option: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  pollList() {
    return this.state.polls.map(function(i) {
      return <Poll key={i} />;
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`option: ${this.state.option}`);

    var newVote = {
      option: this.state.option
    };

    axios
      .post("http://localhost:3050/votes/add", newVote)
      .then(res => console.log(res.data));

    this.setState({
      option: ""
    });

    alert(`You chose the ${this.state.option} pizza.`);
  }

  render() {
    return (
      <div className="RoadtoReact mt-3">
        <h3 className="title" style={{ textAlign: "center" }}>
          Vote Poll
        </h3>
        {this.state.polls.map(item => (
          <div key={item.i}>
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
                                name="option"
                                type="radio"
                                value={item.option1}
                                checked={this.state.option === item.option1}
                                onChange={this.onChange}
                                required
                              />
                              {item.option1}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                name="option"
                                type="radio"
                                value={item.option2}
                                checked={this.state.option === item.option2}
                                onChange={this.onChange}
                                required
                              />
                              {item.option2}
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                name="option"
                                type="radio"
                                value={item.option3}
                                checked={this.state.option === item.option3}
                                onChange={this.onChange}
                                required
                              />
                              {item.option3}
                            </label>
                          </div>

                          <input
                            type="submit"
                            value="Post"
                            className="btn btn-primary"
                          />
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
