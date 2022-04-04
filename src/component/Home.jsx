import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { BsPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=f7c25f33&s=love&romance`,
      )
      let data = await response.json()
      setMovies(data.Search)
      setIsLoading(false)
      console.log(movies)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <Container fluid>
        <div className="d-flex wrap mt-4">
          <BsPencilFill className="pencil" />
          <h4>
            <strong className="ml-3">Highlights</strong>
          </h4>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <Row>
            {movies.map((m) => (
              <Col xs={12} md={4} lg={3} key={m.imdbID}>
                <Card className="movieCard">
                  <Link to={'/details/' + m.imdbID}>
                    <Card.Img
                      variant="top"
                      className="moviePoster"
                      src={m.Poster}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title
                      className="movieName"
                      style={{ color: 'black' }}
                    >
                      {m.Title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default Home
