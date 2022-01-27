import React from 'react'
import BlockHeader from '../../components/BlockHeader/BlockHeader'
import BlockTable from '../../components/BlockTable/BlockTable'

import react from '../../img/react.jpg'
import graphQL from '../../img/graphQL.jpeg'
import mobx from '../../img/mobx.jpg'
import mongoDB from '../../img/mongoDB.png'

import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <BlockHeader>
        About the project
      </BlockHeader>
      <BlockTable>
        <h2>This SPA was created with help of:</h2>
        <p>- React</p>
        <p>- MobX</p>
        <p>- GraphQL</p>
        <p>- MongoDB</p>
        <p>- Node.js</p>
        <h2>The following functionality is implemented in this project:</h2>
        <p>- Add, edit and delete notes</p>
        <p>- Weekly and monthly calendar</p>
        <p>- Filter notes by adding time</p>
        <p>- Distribution notes by category. Each category has own color. Name of the category user add personally</p>
        <p>- Adaptive design for pad and laptop</p>
        <p>- Sidebar contains block with notes on current day</p>
        <img className="Home__img" src={react}  alt="react"/>
        <img className="Home__img" src={graphQL}  alt="graphQL"/>
        <img className="Home__img" src={mobx}  alt="mobx"/>
        <img className="Home__img" src={mongoDB}  alt="mobx"/>

      </BlockTable>
    </div>
  )
}

export default Home