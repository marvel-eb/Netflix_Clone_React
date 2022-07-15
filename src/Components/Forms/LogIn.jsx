import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import logo from "../Assets/Netflix_Logo_RGB.png";

export default function LoginPage() {
  const [checkbox, setCheckbox] = useState(false);

  function handleChange() {
    setCheckbox(!checkbox);
    // console.log(checkbox);
  }

  return (
    <div className="container login-page mt-5 py-4 px-3">
      <h1 className="mb-4">Inloggen</h1>
      <Form className="text-center loginForm">
        <Form.Group className="form-group mb-3 loginForm">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="form-group mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="secondary btn--login" size="lg" type="submit">
          Inloggen
        </Button>
        <hr />

        <div class="row">
          <div class="col-md-6">
            {" "}
            <label>
              Mijn gegevens onthouden
              <input
                type="checkbox"
                name="rememberCheck"
                id="rememberCheck"
                value={checkbox}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class="col-md-6">
            {" "}
            <a href="#">Hulp nodig?</a>
          </div>
        </div>
      </Form>

      <div>
        <img src="" alt="" />
        <a href="#">Inloggen met Facebook</a>
      </div>
      <div>
        <p>
          Is Netflix nieuw voor jou? <a href="#">Registreer je nu</a>.
        </p>
      </div>
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="#">Lees meer informatie</a>.
      </p>
    </div>
  );
}
