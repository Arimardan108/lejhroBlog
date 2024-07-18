import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

function App() {
  const blogPosts = [
    {
      title: "Statistical Approaches for Data Privacy",
      author: "Divya Singh",
      content:
        "Data privacy is a crucial concern in the modern age where massive amounts of personal information are collected and processed. Ensuring data privacy involves safeguarding data from unauthorized access and breaches...",
      imgUrl:
        "https://www.lejhro.com/images/blogs/statistical-approaches-for-data-privacy.jpg",
    },
    {
      title: "Understanding React Hooks",
      author: "John Doe",
      content:
        "React Hooks are functions that let you use state and other React features without writing a class. This article explains the basics of React Hooks and how you can use them in your projects...",
      imgUrl: "https://reactjs.org/logo-og.png",
    },
  ];

  return (
    <div>
      <NavigationBar />
      <Container className="my-5">
        <Row>
          <Col md={8} className="mx-auto">
            {blogPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                author={post.author}
                content={post.content}
                imgUrl={post.imgUrl}
              />
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
