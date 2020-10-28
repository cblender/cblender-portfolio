import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app_Header flex_column">
        <div className="header_text flex_column">
          <h1>cblender</h1>
          <h2>web design portfolio</h2>
        </div>
        <div className="body_article">
          <div className="article_content flex_row">
            <div className="content_text">
              <h3>Description</h3>
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
            <div className="article_head">
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>Article Title</h2>
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
          {/* ARTICLE TWO */}
          <div className="body_article flex_column">
            <div className="article_head">
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>Article Title</h2>
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
            <div className="article_head">
              <div className="article_banner"></div>
              <div className="article_title">
                <h2>Article Title</h2>
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
