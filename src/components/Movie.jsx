import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Movie extends Component{
    constructor(props){
        super(props);

        this.state = {
            isVisible: true,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState( (state) => ({ isVisible: !state.isVisible }))
    };

    //TODO: Add components such as ratings and poster and other stuff

    render(){
        const movies = this.props.value;
        if(this.state.isVisible){
            return (
                <Row style={{height: '300px', overflow: 'auto'}}>
                    <Poster posterURL={movies.posterURL} error={this.toggle.bind(this)}/>
                    <Col>
                        <Row><Title title={movies.title}/></Row>
                        <Row><Col><Rating/></Col><Col>Release Date</Col></Row>
                    </Col>
                    <Col>Trailer</Col>
                </Row>
            );
        }else{
            return null;
        }
    }
}

export default Movie;

class Poster extends Component{
    render(){
        return(
            <Image src={this.props.posterURL} fluid style={{maxHeight:'100%', maxWidth:'100%', paddingRight:'10px'}} onError={this.props.error} />

        );
    }
}

class Title extends Component{
    render(){
        return(
            <b>{this.props.title}</b>
        );
    }
}

class Rating extends Component{
    render(){
        return(
            <p>imdb tomatoes critic</p>
        );
    }
}