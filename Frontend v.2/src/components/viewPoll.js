import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./viewPoll.css";

var Poll = props => (
  <div>
    <div>{props.poll.question}</div>
    <div>{props.poll.option1}</div>
    <div>{props.poll.option2}</div>
    <div>{props.poll.option3}</div>
    <div>
      {" "}
      <Link to={"/edit/" + props.poll._id} />{" "}
    </div>
  </div>
);

class PollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { polls: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3050/polls/")
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:3050/polls/")
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  pollList() {
    return this.state.polls.map(function(currentPoll, i) {
      return <Poll poll={currentPoll} key={i} />;
    });
  }

  render() {
    return (
      <div className="RoadtoReact mt-3">
        <h3 className="title" style={{ textAlign: "center" }}>
          View Poll
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
                        <h5 className="card-title">{item.question}</h5>

                        <form id="vote-poll">
                          <div>
                            <input
                              type="radio"
                              name="poll"
                              id="option1"
                              value="Option1"
                            />
                            <label for="Option1">{item.option1}</label>
                          </div>

                          <div>
                            <input
                              type="radio"
                              name="poll"
                              id="option2"
                              value="Option2"
                            />
                            <label for="Option2">{item.option2}</label>
                          </div>

                          <div className="mb-3">
                            <input
                              type="radio"
                              name="poll"
                              id="option3"
                              value="Option3"
                            />
                            <label for="Option3">{item.option3}</label>
                          </div>

                          <div className=" border-0 form-check-inline">
                            <a
                              className="btn btn-info mr-2"
                              href={"/edit/" + item._id}
                              role="button"
                            >
                              Edit
                            </a>

                            <figcaption className="figure-caption one">
                              <small className="text-muted"> 4 votes</small>
                            </figcaption>
                          </div>
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

export default PollView;
