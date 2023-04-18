import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router"
import { axiosReq } from "../../api/axiosDefaults";
import ChoiceDropdown from "../../components/ChoiceDropdown"
import { useRedirect } from "../../hooks/useRedirect";

function ProductCreateForm() {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    link: "",
    location: "",
    price: "",
    category: "",
    image: "",
  });
  const { name, description, link, location, price, category, image } = productData;

  const imageInput = useRef(null)
  const history = useHistory();

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setProductData({
        ...productData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("category_type", category);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/products/", formData);
      history.push(`/products/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Link (if online)</Form.Label>
        <Form.Control
          type="text"
          name="link"
          value={link}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location (if in-store)</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          placeholder="no need for the £ sign"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.price?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"         
          name="category"
          value={category}
          onChange={handleChange}
        >
          <ChoiceDropdown />

        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

    
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        post
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
            {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset 
                    src={Upload} 
                    message="Click or tap to upload an image" />
                </Form.Label>
              )}

                <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ProductCreateForm;