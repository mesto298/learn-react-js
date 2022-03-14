import React from "react";
import Journey from "./Journey";
import day1_img from '../../img/day_1.jpg';
import day2_img from '../../img/day_2.jpg';
import day3_img from '../../img/day_3.jpg';
import day4_img from '../../img/day_4.jpg';
import day5_img from '../../img/day_5.png';


export default  function MainContent() {

  return (
    <div className="main-content">
      <button className="start-button">Start</button>
      <h1>learning react</h1>
      <h1>learning react</h1>
      <ul className='reason-list'>
        <li>It's is popular library, so I'll be able to fit in with the cool kids</li>
        <li>I'm more likely to get a job as a dev if I know React</li>
      </ul>
      <div className="journey-list">
        <Journey
          img={day1_img}
          title="MY FIRST DAY LEARNING REACT"
          date="March. 14, 2022"
          desc="This is my first day learning react and I start learning from freecodecamp"
          continue="Continue reading..."
        />
        <Journey
          img={day2_img}
          title="DAY 2 - TOO MANY TUTORIALS"
          date="March. 15, 2022"
          desc="Alright. So it’s safe to say that I’m bored AF of watching Udemy “lectures”. Not that the course i'm..."
          continue="Continue reading..."
        />
        <Journey
          img={day3_img}
          title="DAY 3 - IMPORT 'REACT-ROUTER-DOM"
          date="March. 16, 2022"
          desc="Nothing Special today :(. Honestly pretty much all I did was learn about routing in React, and implemented..."
          continue="Continue reading..."
        />
        <Journey
          img={day4_img}
          title="DAY 4 - GOING HARD"
          date="March. 17, 2022"
          desc="Okay, so today I went hard in the paint.I basically finished the entire blog detail portion of the app...."
          continue="Continue reading..."
        />
        <Journey
          img={day5_img}
          title="DAY 5 - IT'S ALL COMING TOGETHER"
          date="March. 18, 2022"
          desc="I added functionality to the Other Posts portion of the detail page. Also, I fixed a glitch where the..."
          continue="Continue reading..."
        />
      </div>
    </div>
  );
}
