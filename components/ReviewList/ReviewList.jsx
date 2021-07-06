import React, { Component } from 'react';

class ReviewList extends Component {
    state = { 
        reviews:[]
     }

    data = [
        // {
        //     name: "Mayowa",
        //     review: "This book is out of this world"
        // },
        // {
        //     name: "Smith",
        //     review: "Boring book, will not recommend"
        // },
        // {
        //     name: "Mary",
        //     review: "I love it"
        // },
    ];

    componentDidMount() {
        this.setState({reviews: this.data})
    }
    render() { 
        return (
            <div>
            
                <hr/>
                {this.state.reviews.map(review => 
                <div>
                    <h4>{review.name}</h4>
                    <p>{review.review}</p>
                    <hr/>
                </div>
                )}
        </div> 
        );
    }
}
 
export default ReviewList;