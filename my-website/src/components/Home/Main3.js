import React from 'react'
import {Link} from 'react-router-dom'
import "../style.css"

const img1 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/135839271_1179744149122377_5912920449128970734_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=kLUFk2lKbP4AX9gOzwr&_nc_ht=scontent-del1-1.xx&oh=c8900b896508c846097b4088e364d21d&oe=6020A64B"

const img3 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/136374943_1179773875786071_7891782408923484502_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=h1ofbXgNEasAX_fbvyr&_nc_oc=AQnN6Ywmedlj6YZiHbNYeDgGN0_M4zf0qtkLxBBYZw4z65Lf612vdPLgUF2fSsVuZ80&_nc_ht=scontent-del1-1.xx&oh=24848049f8ca76af4aa42dbf80369bad&oe=601E5F68"

const img2 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/135835650_1179784109118381_3203309990222587651_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=5ip823gowBkAX8xweCt&_nc_ht=scontent-del1-1.xx&oh=2e7660404b9d744701a1d3505cc9d1be&oe=601E9A60"

const Main3 = () => {
      return (
      <section class="s1">
            <div class="main-container">
                  <h3 style={{ textAlign: 'center'}}>Some of my past projects</h3>

                  <div class="post-wrapper">
                        <div>
                              <div class="post">
                                    <img class="thumbnail" src={img1} alt="pic"/>
                                    <div class="post-preview">
                                          <h6 class="post-title">Chomp-Champ Food delivery App</h6>
                                          <p class="post-intro">Designed built & mantained a food delivery app as my very first projects </p>
                                          <Link to="/post1">Read More</Link>
                                    </div>
                              </div>
                        </div>

                        <div>
                              <div class="post">
                                    <img class="thumbnail" src={img2} alt="pic"/>
                                    <div class="post-preview">
                                          <h6 class="post-title">Plan Your Trip - hotel system</h6>
                                          <p class="post-intro">Online hotel booking  and  planning your trips App with the help of React js </p>
                                          <Link to="/post2">Read More</Link>
                                    </div>
                              </div>
                        </div>

                        <div>
                              <div class="post">
                                    <img class="thumbnail" src={img3} alt="pic"/>
                                    <div class="post-preview">
                                          <h6 class="post-title">M-Tube</h6>
                                          <p class="post-intro">Created an App Similar to Youube app using youtube API with React js and Redux</p>
                                          <Link to="/post3">Read More</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
		</div>
	</section>
      )
}

export default Main3
