import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import { Row, Col, Container } from "react-bootstrap";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstname: "",
                lastname: "",
                email: ""
            }
        };
    }

    handleChange = event => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }));
    };

    handleSubmit = () => {
        this.props.addUserToState(this.state.user);
        this.setState({ user:[ ]});
    };

    render () {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <label htmlFor="firstname" className="mt-2">Imię</label>
                        <input name="firstname" value={this.state.user.firstname || ""} className="form-control" onChange={this.handleChange} />
                    </Col>
                    <Col xs={12} md={4}>
                        <label htmlFor="lastname" className="mt-2">Nazwisko</label>
                        <input name="lastname" value={this.state.user.lastname || ""} className="form-control" onChange={this.handleChange} />
                    </Col>
                    <Col xs={12} md={4}>
                        <label htmlFor="email" className="mt-2">E-mail</label>
                        <input name="email" value={this.state.user.email || ""} className="form-control mt-2" onChange={this.handleChange} />
                    </Col>
                    <Col xs={12}>
                        <button className="btn btn-primary btn-lg btn-block mt-2" onClick={this.handleSubmit}>Dodaj użytkownika</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserToState: user => {
            dispatch(addUser(user));
        }
    };
};

export default connect(null, mapDispatchToProps)(Add);
