import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { removeUser } from "../../actions/userActions";

class ListUsers extends Component {
    handleRemove = id => {
        this.props.remove(id);
    };

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
                                    <p className="card-text">
                                        <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(user.id)}>Usuń</button>
                                    </p>
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

const mapDispatchToProps = dispatch => {
    return {
        remove: id => {
            dispatch(removeUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
