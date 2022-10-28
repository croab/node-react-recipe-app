import React from "react";
import homeStyles from './home.module.css'

function Home() {
  return (
    <main class={homeStyles.wrapper}>
      <div class={homeStyles.homeWrapper}>
        <div class={homeStyles.homeTextContent}>
          <h1>COOKBOOK!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro tenetur laudantium nostrum ab molestiae beatae.</p>
          <a class={homeStyles.homeBtn} href="#">Get Help Today</a>
        </div>
        <div class={homeStyles.homeImg}></div>
      </div>

    </main>
  )
}

export default Home;