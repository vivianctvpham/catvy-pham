import React from "react";
import { Formik, Form, Field } from "formik";
import contactSchema from "./contactSchema";
import Swal from "sweetalert2";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleSubmit = (data, { resetForm }) => {
    console.log("data", data);
    let template_params = {
      reply_to: data.email,
      from_name: data.name,
      message_html: data.message,
      firstName: "Vivian",
    };

    let template_id = "new_message";

    this.sendFeedback(template_id, template_params);

    resetForm(this.state.formData);
  };

  sendFeedback = (templateId, data) => {
    window.emailjs
      .send("gmail", templateId, data)
      .then(this.feedBackSuccess)
      .catch(this.feedBackFail);
  };

  feedBackSuccess = (res) => {
    console.log(res);
    Swal.fire(
      "Message Sent!",
      "Thank you for reaching out. Talk to you soon!",
      "success"
    );
  };

  feedBackFail = (err) => {
    console.log(err);
    Swal.fire(
      "Oh no!",
      "Something went wrong! Please try again later.",
      "error"
    );
  };
  render() {
    return (
      <>
        <div id="contact">
          <div className="container">
            <Formik
              initialValues={this.state.formData}
              validationSchema={contactSchema.info}
              onSubmit={this.handleSubmit}
              render={({
                values,
                errors,
                touched,
                handleSubmit,
                isValid,
                isSubmitting,
              }) => {
                return (
                  <div className="col-md-8">
                    <div className="row">
                      <div className="section-title">
                        <h2>Talk to me!</h2>
                        <p>
                          Please fill out the form below to send me a message
                          and I will try get back to you as soon as possible.
                        </p>
                      </div>
                      <Form
                        onSubmit={handleSubmit}
                        name="sentMessage"
                        id="contactForm"
                        noValidate
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                className={
                                  errors.name && touched.name
                                    ? "form-control error"
                                    : "form-control"
                                }
                                name="name"
                                value={values.name}
                                placeholder="Name"
                              />
                              {errors.name && touched.name && (
                                <span className="text-danger">
                                  {errors.name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                className={
                                  errors.email && touched.email
                                    ? "form-control error"
                                    : "form-control"
                                }
                                name="email"
                                value={values.email}
                                placeholder="Email"
                              />
                              {errors.email && touched.email && (
                                <span className="text-danger">
                                  {errors.email}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <Field
                            component="textarea"
                            className={
                              errors.message && touched.message
                                ? "form-control error"
                                : "form-control"
                            }
                            rows="4"
                            name="message"
                            value={values.message}
                            placeholder={"Message"}
                          />
                          {errors.message && touched.message && (
                            <span>
                              <i className="fa fa-exclamation-circle"></i>
                              {errors.message}
                            </span>
                          )}
                        </div>
                        <div id="success"></div>
                        <button
                          type="submit"
                          className="btn btn-custom btn-lg"
                          disabled={!isValid || isSubmitting}
                        >
                          Send Message
                        </button>
                      </Form>
                    </div>
                  </div>
                );
              }}
            />
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Location
                  </span>
                  Orange County, CA
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>
                  vivianctvpham@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/vivianctvpham">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/vivianctvpham">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/vivianctvpham">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
