import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish = dish => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  renderComments = comments => {
    if (!comments) {
      return <div />;
    }

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <React.Fragment>
                <li>{comment.comment}</li>
                <li>{`-- ${comment.author}, ${comment.date}`}</li>
                <br />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  };
  render() {
    const { dish } = this.props;
    if (!dish) {
      return <div />;
    }

    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(dish.comments)}
      </div>
    );
  }
}

export default Dishdetail;
