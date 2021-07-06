import React, { Component } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewList from '../ReviewList/ReviewList';

class Review extends Component {
    state = {  }
    

    render() { 
        return ( <div>
            <ReviewList/>
            <ReviewForm book={this.props.book} />
        </div> );
    }
}
 
export default Review;