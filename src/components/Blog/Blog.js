import { Button } from "react-bootstrap";
import "./Blog.scss";

function blogLinkClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function Blog() {
  return (
    <div className="Blog" id="blogs">
      <h1 className="about-header" style={{ textAlign: "center" }}>
        Blogs
      </h1>
      <hr
        className="divider"
        style={{
          margin: "auto"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 auto"
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="images/blog2.png"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">
            Google clone using React Firebase and google search Api
            </h4>
            <p className="blog-desc">
            In this article, we will make the Google Clone using React.
             We will also be using Firebase for Hosting. ...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://medium.com/@bhartianubha9/google-clone-a6e0f65e9c0"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div> 
      </div>
    </div>
  );
}

export default Blog;
