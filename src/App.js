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
            <h3>web design portfolio</h3>
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
              <div className="flex_column">
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
                backgroundImage: "url(" + developerverse.images[0].link + ")",
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
              <div className="content_text">
                <h3>General Assembly - Final Project</h3>
                <p>
                  The final project for General Assembly's Software Engineering
                  Immersive cohort #39 was a team project. We titled our project
                  "DeveloperVerse", intending to create a website with the
                  premise of bringing developers together, to connect, learn,
                  and network. I led the front-end development team, and was
                  solely responsible for developing the visual style of the
                  site. I created the color palette and site styleguide, and
                  created mocks for my team members and myself to use in
                  completing development tasks.
                </p>
              </div>
              <div className="content_image">
                <img></img>
              </div>
              <div className="content_text">
                <p>
                  DeveloperVerse draws style elements from retrofuturism. It
                  calls back to cultural touchstones like Star Trek: Next
                  Generation and The Matrix. Retrofuturism is an interesting
                  genre of design, with the most common example being the
                  Fallout game franchise. Whereas Fallout is retrofuturism via
                  the 1950's, DeveloperVerse kicks things up a few decades by
                  building what I described in my documentation as
                  "retrofuturism via the 90's." The site's dark theme is easy on
                  the eyes, and its styling evokes the output of a Terminal
                  interface and the HTML language that the web is built on.
                </p>
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
                backgroundImage: "url(" + mernolith.images[0].link + ")",
              }}
            >
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>MERNOLITH</h2>
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
          {/* ARTICLE THREE */}
          <div className="body_article flex_column">
            <div
              className="article_head flex_column"
              style={{
                backgroundImage: "url(" + pokereact.images[0].link + ")",
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
                backgroundImage: "url(" + raindrops.images[0].link + ")",
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
