import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, } from '@fortawesome/free-solid-svg-icons'
import Review from '../Review/Review';

class BookList extends Component {

    data = [
        {
            id: 1,
            img: 'https://picsum.photos/id/237/100/100',
            title: "Now you see me",
            author: "John Smith",
            price: 20,
            rating: 5,
            summary: "A book about seeing youself"
        },
        {
            id: 2,
            img: 'https://picsum.photos/id/454/100/100',
            title: "Mastering React",
            author: "John Doe",
            price: 205,
            rating: 3,
            summary: "Learning react from beginner to advance"
        },
        {
            id: 3,
            img: 'https://picsum.photos/id/134/100/100',
            title: "Climbing the moutain top",
            author: "Mary Joseph",
            price: 200,
            rating: 1,
            summary: "Moutain climbing"
        },
        {
            id: 4,
            img: 'https://picsum.photos/id/211/100/100',
            title: "Run away rat",
            author: "Joseph J",
            price: 50,
            rating: 4,
            summary: "How to catch a rat"
        },
        {
            id:5,
            img: 'https://picsum.photos/id/100/100/100',
            title: "Travelling to the unknown",
            author: "Matthew John",
            price: 30,
            rating: 2,
            summary: "How to find what you are looking for"
        },
    ];

    state = { 
        books: [],
        title: 'My list of books'
    }
    

    componentDidMount(){
        this.setState({books:this.data});
    }

    

    render() { 
        return ( 
        <div className="container">
        <h1>{this.state.title}</h1>
        <div className="row">
            {this.state.books.map(book => <div className="col-md-4 mb-2" key={book.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <p>{book.author}</p>
                        <Card.Text>
                         {book.summary}
                        </Card.Text>
                        <Button variant="primary">$ {book.price}</Button><br/>
                       {(book.rating === 1) ? 
                            <div>
                                <FontAwesomeIcon icon={faStar}  color="gold"/> 
                                <FontAwesomeIcon icon={faStar}  color="grey"/> 
                                <FontAwesomeIcon icon={faStar}  color="grey"/> 
                                <FontAwesomeIcon icon={faStar}  color="grey"/> 
                                <FontAwesomeIcon icon={faStar}  color="grey"/> 
                            </div>
                            : 
                            (book.rating === 2) ?
                            <div>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar}  color="gold"/>
                                <FontAwesomeIcon icon={faStar}  color="grey"/>
                                <FontAwesomeIcon icon={faStar}  color="grey"/>
                                <FontAwesomeIcon icon={faStar}  color="grey"/>
                            </div> :
                            (book.rating == 3) ?
                            <div>
                                <FontAwesomeIcon icon={faStar} color="gold" />
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="grey"/>
                                <FontAwesomeIcon icon={faStar} color="grey"/>
                            </div> :
                            (book.rating === 4) ?
                            <div>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="grey"/>
                            </div> :
                            <div>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                            </div> 
                        }
                        <Review book={1}/>
                    </Card.Body>
                </Card>
            </div>)}
        </div>
        </div>
             );
    }
}
 
export default BookList;