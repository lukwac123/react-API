import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

class ListUsers extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {this.props.usersCurrent.map(user => (
                        <Col md={4} key={user.id}>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">{ user.firstname }</h5>
                                    <p className="card-text">{ user.email }</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        usersCurrent: state.usersReducer.users
    };
};

export default connect(mapStateToProps)(ListUsers);
