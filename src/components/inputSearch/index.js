import { Form } from "react-bootstrap";

const InputSearch = () => {
    
  return (
    <>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </>
  );
};

export { InputSearch };
