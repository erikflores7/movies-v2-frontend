import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Movie from "./Movie"
import Row from "react-bootstrap/Row";

export default class MovieList extends Component{

    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            movies: []
        };
    }

    componentDidMount(){
       // fetch("http://localhost:8080/api/GetMovieRequest",{
        fetch("https://erikflores.me:8443/api/GetMovieRequest",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // TODO: Change to use whatever is passed down from parent
                id: "123145adad",
                title: "Avengers",
                releaseDate: "123141"
            })
        }).then(res => res.json()).then((result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.movies
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render(){
        const{error, isLoaded, movies} = this.state;
        if(error){
            return <Alert variant={"danger"}>Error! {error.message} </Alert>
        }else if(!isLoaded){
            return(
            <Spinner animation={"border"} role={"status"}>
                <span className={"sr-only"}>Loading...</span>
            </Spinner>
            );
        }else if(movies.length === 0){
            return <Alert variant={"warning"} dismissible>
                Found no results!
                I feel so empty :(
            </Alert>
        }
        return(
            <Container>
                <Header/>
                {movies.map((item, key) =>
                <Movie value={item} key={key}/> )}
            </Container>
        );
    }

}

class Header extends Component{
    render(){
        return(
            <Row><h2>Movies</h2></Row>
        );
    }
}