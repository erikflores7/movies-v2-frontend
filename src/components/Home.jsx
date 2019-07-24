import React, { Component } from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';
import MovieList from "./MovieList";

export default class Home extends Component{
    render(){
        return(
            <Container>
                <MovieList/>
            </Container>
        )
    }
}
