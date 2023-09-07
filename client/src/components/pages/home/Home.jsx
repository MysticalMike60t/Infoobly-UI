import React from 'react'
import { Link } from 'react-router-dom'
import { UnderConstruction } from '../../global'

const Home = () => {
  return (
    <div className="container__page home">
        <div className="page__wrapper">
            <div className="wrapper__title">
                <h1 className="title__h1">
                    Inf<span>oo</span>bly <span>UI</span>
                </h1>
            </div>
            <div className="wrapper__links">
              <Link className="links__Link" to="/docs">Docs</Link>
            </div>
            <UnderConstruction />
        </div>
    </div>
  )
}

export default Home