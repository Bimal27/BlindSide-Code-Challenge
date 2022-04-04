import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Details = ({ match }) => {
  const [movie, setMovie] = useState(null)
  const [showComment, setShowComment] = useState(false)

  useEffect(() => {
    const movies = async () => {
      let id = match.params.imdbID
      if (id) {
        let response = await fetch(
          'https://www.omdbapi.com/?apikey=f7c25f33&i=' + id,
        )
        let data = await response.json()
        setMovie(data)
      }
    }
    movies()
  }, [match.params.imdbID])
  return (
    <div>
      <h2 className="text-center my-4">Movie Details...</h2>
      {movie && (
        <div className="text-center">
          <img src={movie.Poster} alt="movie poster" />
          <h4 className="mt-3">
            {movie.Title} ( {movie.Actors} )
          </h4>
          <div>
            <p>
              {movie.Released} - {movie.Runtime}
            </p>
          </div>
          <p className="mx-5">{movie.Plot}</p>
          <p>
            Ratings: {movie.Ratings[0].Source} ({movie.Ratings[0].Value})
          </p>
        </div>
      )}
      <div className="commentSection"></div>
      <div className="text-center">
        <button className="mb-3" onClick={(e) => setShowComment(!showComment)}>
          Comments (Click me!!)
        </button>

        {showComment && (
          <>
            <div>
              <li>Nice Movie</li>
              <li>Fantastic</li>
            </div>
            <form className="mt-3">
              <div className="form-group">
                <label className="mb-2 mr-2">Comment:</label>
                <input
                  type="text"
                  className="formControl"
                  placeholder="Add comments...."
                />
              </div>
              <Button variant="primary" className="mr-3" type="submit">
                Add
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Details
