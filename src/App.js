import logo from "./logo.svg";
import "./App.css";

class Article {
  constructor(images, text) {
    this.images = images;
    this.text = text;
  }
}

const developerverse_images = [
  { title: "developerverse_1", link: "https://i.imgur.com/Jx7TWrS.jpg" },
  { title: "developerverse_2", link: "https://i.imgur.com/ZC8QNxo.jpg" },
  { title: "developerverse_3", link: "https://i.imgur.com/ktfVK98.jpg" },
];

const developerverse_text =
  "Potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana ";

let developerverse = new Article(developerverse_images, developerverse_text);

console.log(developerverse.images[0]);

const mernolith_images = [
  { title: "mernolith_1", link: "https://i.imgur.com/QGz1ura.jpg" },
  { title: "mernolith_2", link: "https://i.imgur.com/1TZgdzy.jpg" },
  { title: "mernolith_3", link: "https://i.imgur.com/ufWwZiw.jpg" },
];

const mernolith_text =
  "Potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana ";

let mernolith = new Article(mernolith_images, mernolith_text);

const pokereact_images = [
  { title: "pokereact_1", link: "https://i.imgur.com/EYxXGhR.jpg" },
  { title: "pokereact_2", link: "https://i.imgur.com/eptKykl.jpg" },
];

const pokereact_text =
  "Potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana ";

let pokereact = new Article(pokereact_images, pokereact_text);

const raindrops_images = [
  { title: "raindrops_1", link: "https://i.imgur.com/7OYbonq.jpg" },
  { title: "raindrops_2", link: "https://i.imgur.com/ZOagcm8.jpg" },
];

const raindrops_text =
  "Potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana potato banana ";

let raindrops = new Article(raindrops_images, raindrops_text);

function App() {
  return (
    <div className="App">
      <header className="app_Header flex_column">
        <div className="header_text flex_column">
          <img className="portrait"></img>
          <h1 style={{ color: "black" }}>Chris Blendermann</h1>
          <div className="article_title" style={{ background: "black" }}>
            <h3 style={{ paddingTop: "20px" }}>Web Design Portfolio</h3>
          </div>
        </div>
        <div className="body_article">
          <div className="article_content flex_row">
            <div className="content_text">
              <h3>Introduction</h3>
              <p>
                Throughout my career, human factors and user experience has been
                my focus. From my education in game development and design, to
                my professional work in web development and interface design, I
                have always concentrated on producing efficient graphical and
                textual solutions. Serving as the liason between project
                leadership and Air Force clients for Triangle Experience Group
                strengthened my skills in wireframing and concept of operations
                documentation, and my web development work at each of my
                positions has benefited from my ability to apply game theory to
                the UX design process.
                <br />
                <br />
                Most recently, I’ve zeroed in on development of web-based
                interfaces, completing General Assembly’s full-stack development
                program. In the final project for General Assembly, I led the
                front-end development team, and created the design brief,
                mockups, and best practices that were used by all team members
                to complete development tasks in parallel. Rapid, iterative
                prototyping is my comfort zone, which allows me to meet requests
                with products that are clear, easy to use, and engaging.
              </p>
              <div className="flex_column" style={{ paddingTop: "50px" }}>
                <h3>Explore my projects below!</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="app_Background">
        <div className="background_image"></div>
      </div>
      <div className="app_Body flex_column">
        <div className="body_container">
          {/*  */}
          {/* ARTICLE ONE */}
          <div className="body_article flex_column">
            <div
              className="article_head flex_column"
              style={{
                backgroundImage: "url(https://i.imgur.com/V15Qgbe.jpg)",
              }}
            >
              <div className="article_banner">
                <img></img>
              </div>
              <div className="article_title">
                <h2>&lt;Developer_Verse/&gt;</h2>
              </div>
            </div>

            <div className="article_content flex_column">
              {/*  */}
              {/* BEGIN ARTICLE CONTENT BLOCK */}
              <div className="content_text">
                <div className="content_grid">
                  <p>
                    <h3>DeveloperVerse - GA Final Project</h3>
                    The final project for General Assembly's Software
                    Engineering Immersive cohort #39 was a team project. We
                    titled our project "DeveloperVerse", intending to create a
                    website with the premise of bringing developers together, to
                    connect, learn, and network. I led the front-end development
                    team, and was solely responsible for developing the visual
                    style of the site. I created the color palette and site
                    styleguide, and created mocks for my team members and myself
                    to use in completing development tasks.
                  </p>
                  <img
                    src={developerverse.images[0].link}
                    alt="developerverse homepage layout overview"
                    className="content_image"
                  ></img>
                </div>
              </div>
              {/* END ARTICLE CONTENT BLOCK */}
              {/*  */}
              <div className="content_text">
                <div className="content_grid">
                  <img
                    src={developerverse.images[2].link}
                    alt="developerverse homepage layout overview"
                    className="content_image"
                  ></img>
                  <p>
                    <h3>90's Retrofuturism</h3>
                    DeveloperVerse draws style elements from the "retrofuturism"
                    design movement. It calls back to cultural touchstones like
                    Star Trek: Next Generation and The Matrix. Retrofuturism is
                    an interesting genre of design, with the most common example
                    being the Fallout game franchise. Whereas Fallout is
                    retrofuturism via the 1950's, DeveloperVerse kicks things up
                    a few decades by building what I described in my
                    documentation as "retrofuturism via the 90's." The site's
                    dark theme is easy on the eyes, and its styling evokes the
                    output of a Terminal interface and the HTML language that
                    the web is built on.
                  </p>
                </div>
                <br />
                <br />
                <div className="flex_column">
                  <h3 className="button_black">Explore DeveloperVerse!</h3>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          {/* ARTICLE TWO */}
          <div className="body_article flex_column">
            <div
              className="article_head flex_column"
              style={{
                backgroundImage: "url(https://i.imgur.com/hIzaOx9.jpg)",
              }}
            >
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>MERNOLITH</h2>
              </div>
            </div>
            <div className="article_content flex_column">
              {/* BEGIN ARTICLE CONTENT BLOCK */}
              <div className="content_text">
                <div className="content_grid">
                  <p>
                    <h3>MERNOLITH - The M.E.R.N. Monolith</h3>
                    This project was completed for General Assembly's software
                    engineering program. For this project, I was placed on a
                    team with two of my classmates. Our concept for the project
                    was to create a working film database site with full RESTful
                    API functionality, using the "M.E.R.N." development
                    pipeline. Our project represented a curated repository of
                    information accessible to the public, and so for our project
                    name I suggested a twist on the iconic "Monolith" from 2001:
                    A Space Odyssey - I suggested we go with "MERNOLITH". "MERN"
                    stands for "MongoDB, Express, React, Node" and is one of the
                    most commonly used pipelines for JavaScript application
                    development - it was used for this project, and so the name
                    stuck.
                    <br />
                    <br />
                    MongoDB is a JavaScript database platform. Express handles
                    communication between front and back-end services. React is
                    a modular JavaScript programming platform, and Node.js is
                    the package handler that supports the other three services.
                    With their powers combined, developers can easily create
                    full-stack JS applications for web deployment, which is
                    exactly what we did.
                  </p>
                  <img
                    src={mernolith.images[0].link}
                    alt="developerverse homepage layout overview"
                    className="content_image"
                  ></img>
                </div>
              </div>
              {/* END ARTICLE CONTENT BLOCK */}
              {/* BEGIN ARTICLE CONTENT BLOCK */}
              <div className="content_text">
                <div className="content_grid">
                  <img
                    src={mernolith.images[2].link}
                    alt="developerverse homepage layout overview"
                    className="content_image"
                  ></img>
                  <p>
                    <h3>Vertical Development</h3>
                    One of the benefits of the format of our project was that
                    each team member could take responsibility for a vertical
                    slice of development work, by claiming a couple of film
                    directors to produce content for. For each director, image
                    and text resources had to be gathered, added to the
                    database, and programmatically added to the front-end
                    display. One of my team members led the development of the
                    back-end services, with myself and our third member
                    providing task completion, while I led the development of
                    the front-end design, with my two team members also pitching
                    in to complete tasks on that side. In the end, we were
                    satisfied with the distribution of work and felt we had all
                    had a chance to grow our skills in all areas of the
                    project's development lifecycle.
                  </p>
                </div>
              </div>
              {/* END ARTICLE CONTENT BLOCK */}
            </div>
          </div>

          {/*  */}
          {/* ARTICLE THREE */}
          <div className="body_article flex_column">
            <div
              className="article_head flex_column"
              style={{
                backgroundImage: "url(https://i.imgur.com/rthmUhW.jpg)",
              }}
            >
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>PokÉ-React</h2>
              </div>
            </div>
            <div className="article_content flex_column">
              <div className="content_text">
                <h3>TEXT</h3>
              </div>
              <div className="content_image">
                <h3>TEXT</h3>
              </div>
              <div className="content_text">
                <h3>TEXT</h3>
              </div>
            </div>
          </div>

          {/*  */}
          {/* ARTICLE FOUR */}
          <div className="body_article flex_column">
            <div
              className="article_head flex_column"
              style={{
                backgroundImage: "url(https://i.imgur.com/yAwz1xq.jpg)",
              }}
            >
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>Raindrops</h2>
              </div>
            </div>
            <div className="article_content flex_column">
              <div className="content_text">
                <h3>TEXT</h3>
              </div>
              <div className="content_image">
                <h3>TEXT</h3>
              </div>
              <div className="content_text">
                <h3>TEXT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
