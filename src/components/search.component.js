import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import React, { Component } from "react";
import Profile from "./profile.component";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userData: [],
      returnedData: true,
      loading: false,
    };
  }

  onUserValueChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const user = this.state.username;
    const URI = `https://api.github.com/users/${user}`;

    axios
      .get(URI)
      .then((res) => {
        if (res.status !== 200) {
          this.setState({
            userData: res.data,
            returnedData: false,
            loading: false,
          });
        } else {
          this.setState({
            userData: res.data,
            returnedData: true,
            loading: false,
          });
        }
      })
      .catch((err) =>
        this.setState({
          returnedData: false,
          loading: false,
        })
      );
  };

  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center">
          <Form className="mt-3" inline onSubmit={this.handleFormSubmit}>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="Usernam" srOnly>
                  Username
                </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="username"
                  placeholder="Enter Github Username"
                  autoComplete="false"
                  value={this.state.username}
                  onChange={this.onUserValueChange}
                />
              </Col>
              <Col xs="auto">
                <Button
                  type="submit"
                  className="mb-2"
                  variant="outline-primary"
                >
                  {this.state.loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      variant="primary"
                    />
                  ) : (
                    "Search"
                  )}
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <div className="container mt-2 d-flex justify-content-center">
          {!this.state.returnedData && <p>User profile does not exist</p>}

          {this.state.returnedData &&
            Object.keys(this.state.userData).length > 0 && (
              <Profile
                gravatar={this.state.userData.avatar_url}
                username={this.state.userData.name}
                userbio={this.state.userData.bio}
                repos={this.state.userData.public_repos}
                followers={this.state.userData.followers}
                giturl={this.state.userData.html_url}
              />
            )}
        </div>
      </div>
    );
  }
}
