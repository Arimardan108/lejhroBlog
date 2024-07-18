import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogPost = ({ title, author, content, imgUrl }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imgUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {author}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;
