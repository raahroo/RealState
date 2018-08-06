import React, { Component } from 'react';


class CardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <div className="CardContainer">
        <div>
          { this.state.data ?
            this.state.data.map(movie=>(

                <div className="col-md-3 card">
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description.substring(0,30)}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            )) :
            <h1>No data</h1>
          }
        </div>
      </div>
    );
  }
}

export default CardContainer;
