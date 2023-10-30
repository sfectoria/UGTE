import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {
  academicLevels,
  items,
  tunisiaGovernorates,
  universities,
} from "./Constant/igte";
import man from "./assets/images/man.png"
import logo from "./assets/images/logo.jpg"

function App() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [formData, setFormData] = useState({
    nameAr: "",
    nameFr: "",
    gender: "",
    dob: "",
    email: "",
    address: "",
    governorate: "",
    cin: "",
    phoneNumber: "",
    academicLevel: "",
    specialization: "",
    selectedUniversity: "",
    selectedFaculty: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
 
  return (
    <div className="m-5">
      <img src={logo} alt="logo" width={100} height={100} style={{objectFit:"cover"}} className=""/>
    <div className="d-flex">
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={11} lg={11} xs={12}>
          <div className="border border-3 border-primary"></div>

          <Card className="shadow p-3">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-5 text-center">الإستمارة الوطنية</h2>
                
                <Form
                  noValidate
                  validated={validated}
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 text-end" controlId="formBasicNameAr">
                        <Form.Label>
                        الإسم بالعربية
                        </Form.Label>

                        <Form.Control
                          required
                          type="text"
                          placeholder="أدخل الاسم بالعربية"
                          className="text-end"
                        />
                        <Form.Control.Feedback>
                        تبدو جيدة
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        الرجاء اختيار اسم مستخدم.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 text-end" controlId="formBasicNameFr">
                        <Form.Label className="text-center">
                        الإسم بالفرنسية
                        </Form.Label>

                        <Form.Control
                          type="nameFr"
                          required
                          placeholder="أدخل الاسم باللغة الفرنسية"
                          className="text-end"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <Form.Group
                        controlId="kindOfStand "
                        className="d-flex flex-column text-end "
                      >
                        <Form.Label>Gender</Form.Label>
                        <div className="d-flex justify-content-between">
                          <Form.Check
                            value="female"
                            type="radio"
                            aria-label="radio 1"
                            label="Female"
                            // onChange={handleChange}
                            // checked={kindOfStand === "design"}
                          />
                          <Form.Check
                            value="male"
                            type="radio"
                            aria-label="radio 2"
                            label="Male"
                            // onChange={handleChange}
                            // checked={kindOfStand === "male"}
                          />
                          <Form.Check
                            value="female"
                            type="radio"
                            aria-label="radio 1"
                            label="Other"
                            // onChange={handleChange}
                            // checked={kindOfStand === "design"}
                          />
                        </div>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group
                        controlId="kindOfStand "
                        className="d-flex flex-column text-end  "
                      >
                      <Form.Label>اختر التاريخ</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        placeholder="تاريخ الميلاد"
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                      الرجاء اختيار تاريخ ميلادك
                      </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Email"
                          required
                          className="text-end"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your email
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Adress"
                          required
                          className="text-end"

                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your adress.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Governorate</Form.Label>
                        <select
                          class="form-select text-end"
                          id="validationServer04"
                          aria-describedby="validationServer04Feedback"
                          required
                        >
                          <option value="">Select a Governorate</option>
                          {tunisiaGovernorates.map((governorate, index) => (
                            <option key={index} value={governorate}>
                              {governorate}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your adress.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>CIN</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="CIN"
                          className="text-end"

                          required
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your adress.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Phone Number"
                          className="text-end"

                          required
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your adress.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>الصفة الهيكلية</Form.Label>
                        <select
                          class="form-select text-end "
                          id="validationServer05"
                          aria-describedby="validationServer05Feedback"
                          required
                        >
                          <option value="">الصفة الهيكلية</option>
                          {items.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 text-end" controlId="universitySelect">
                        <Form.Label>الجامعات</Form.Label>

                        <select
                          class="form-select "
                          id="validationServer05"
                          aria-describedby="validationServer05Feedback"
                          value={selectedUniversity}
                          onChange={(e) =>
                            setSelectedUniversity(e.target.value)
                          }
                          required
                        >
                          <option value="" className="text-end">اختر الجامعة</option>
                          {universities.map((uni, index) => (
                            <option key={index} value={uni.universityName}>
                              {uni.universityName}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 text-end" controlId="facultySelect">
                        <Form.Label>الكليات والمعاهد</Form.Label>
                        {/* <Form.Select
                          value={selectedFaculty}
                          onChange={(e) => setSelectedFaculty(e.target.value)}
                        > */}
                        <select
                          class="form-select "
                          id="validationServer05"
                          aria-describedby="validationServer05Feedback"
                          value={selectedFaculty}
                          onChange={(e) => setSelectedFaculty(e.target.value)}
                          required
                        >
                          <option value="" className="text-end">اختر الكلية أو المعهد</option>
                          {universities
                            .find(
                              (uni) => uni.universityName === selectedUniversity
                            )
                            ?.facultiesAndInstitutes.map((faculty, index) => (
                              <option key={index} value={faculty}>
                                {faculty}
                              </option>
                            ))}
                          {universities
                            .find((uni) => uni.name === selectedUniversity)
                            ?.institutes.map((institute, index) => (
                              <option key={index} value={institute}>
                                {institute}
                              </option>
                            ))}
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            Please write your address.
                          </Form.Control.Feedback>
                        </select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>المستوى الدراسي</Form.Label>
                        <select
                          class="form-select "
                          // id="validationServer05"
                          aria-describedby="validationServer05Feedback"
                          required
                        >
                          
                          <option value="" className="text-end" >اختر المستوى الدراسي</option>
                          {academicLevels.map((academicLevel, index) => (
                            <option key={index} value={academicLevel}>
                              {academicLevel}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 text-end"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>الإختصاص</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="الإختصاص"
                          required
                          className="text-end"

                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please write your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      onSubmit={handleSubmit}
                    >
                      تقديم الطلب
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <img src={man} alt="footer"  className="col-lg-3 col-md-4 d-none-767 " style={{objectFit:"cover"}} />

    </div>
    </div>
  );
}

export default App;
