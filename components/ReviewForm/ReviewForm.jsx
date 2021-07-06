import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ReviewForm extends Component {
    state = { 
        data: {
            name: '',
            review:'',
            rating:''
        }
     }

   
    handleChange = (e) => {
        let data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({data});
    }

    handleSubmit = (e) => {

    }

    render() { 
        console.log('review-form', this.props)
        return ( 
            <Form className="container">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleChange} name='name' type="text" placeholder="Your name" value={this.state.data.name} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review</Form.Label>
                    <Form.Control  onChange={this.handleChange} name='review' type="text" placeholder="Enter your review here" value={this.state.data.review}/>                   
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control  onChange={this.handleChange} name='rating' type="text" placeholder="Enter the rating here" value={this.state.data.rating}/>                   
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}
 
export default ReviewForm;