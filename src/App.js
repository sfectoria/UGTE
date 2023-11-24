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
import man from "./assets/images/man.png";
import logo from "./assets/images/logo.jpg";
import logoTun from "./assets/images/logoTun.png";
import photoHeader from "./assets/images/photoHeader.jpg";
import Footer from "./components/Footer";

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
    <div className="  d-flex flex-column " style={{ direction: "rtl" }}>
       <div className="d-flex  justify-content-center  align-items-center p-5 ">
        <img
          src={logoTun}
          alt="logoTun"
          width={90}
          height={90}
          style={{ objectFit: "cover" }}
          className=""
        />

        <h1 className="text-center">
          Union Générale Tunisienne des Etudiants(UGTE) -الإتحاد العام التونسي
          للطلبة{" "}
        </h1>
        <img
          src={logo}
          alt="logo"
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
          className=""
        />
  </div> 

      <Container >
        {/* <Row className="vh-100 d-flex justify-content-center align-items-center"> */}

        {/* <div className="border border-3 border-primary"></div> */}

        <Card className="shadow ">
          <img
            src={photoHeader}
            alt="HeaderPhoto"
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "0.5%",
              borderTopRightRadius: "0.5%",
            }}
            className=""
          />

          {/* <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.8,
            borderBottom: "5px solid #42b1bb",
          }}
          className="orange"
        /> */}
          <Card.Body>
            <div className="mb-3 mt-4">
              <h2 className="fw-bold mb-5 text-center">
                الإستمارة الوطنية للإنخراط
              </h2>

              <Form
                noValidate
                validated={validated}
                className="mb-3"
                onSubmit={handleSubmit}
              >
                <Row style={{ padding: 0 }}>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameAr"
                  >
                    <Form.Label>الإسم بالعربية</Form.Label>

                    <Form.Control
                      required
                      type="text"
                      placeholder="أدخل الاسم بالعربية"
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الاسم بالعربية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicNameFr"
                  >
                    <Form.Label className="text-center">
                      اللقب بالعربية
                    </Form.Label>

                    <Form.Control
                      type="nameFr"
                      required
                      placeholder="أدخل اللقب بالعربية"
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال االلقب بالعربية
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameAr"
                  >
                    <Form.Label>الإسم بالفرنسية</Form.Label>

                    <Form.Control
                      required
                      type="text"
                      placeholder="أدخل الاسم باللغة الفرنسية"
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الإسم بالفرنسية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameFr"
                  >
                    <Form.Label className="text-center">
                      اللقب بالفرنسية
                    </Form.Label>

                    <Form.Control
                      type="nameFr"
                      required
                      placeholder="أدخل اللقب باللغة الفرنسية"
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال اللقب بالفرنسية
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    controlId="kindOfStand "
                    className="d-flex flex-column  col-lg-6"
                  >
                    <Form.Label>الجنس</Form.Label>
                    <div className="d-flex  gap-5">
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
                    </div>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجنس
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="kindOfStand "
                    className="d-flex flex-column  col-lg-6 "
                  >
                    <Form.Label>تاريخ الميلاد</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="تاريخ الميلاد"
                      className="text-end"
                      required
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>

                    <Form.Control.Feedback type="invalid">
                      الرجاء اختيار تاريخ ميلادك
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>البريد الإلكتروني</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=" أدخل البريد الإلكتروني"
                      required
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال البريد الإلكتروني
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>العنوان</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="أدخل العنوان"
                      required
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال العنوان
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الولاية</Form.Label>
                    <select
                      class="form-select "
                      id="validationServer04"
                      aria-describedby="validationServer04Feedback"
                      required
                    >
                      <option value="">إختر الولاية </option>
                      {tunisiaGovernorates.map((governorate, index) => (
                        <option key={index} value={governorate}>
                          {governorate}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الولاية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>رقم بطاقة التعريف</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="أدخل رقم بطاقة التعريف"
                      className=""
                      required
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال رقم بطاقة التعريف
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>رقم الهاتف</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="أدخل رقم الهاتف"
                      className=""
                      required
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال رقم الهاتف
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الصفة الهيكلية</Form.Label>
                    <select
                      class="form-select  "
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
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الصفة الهيكلية
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="universitySelect"
                  >
                    <Form.Label>الجامعة</Form.Label>

                    <select
                      class="form-select "
                      id="validationServer05"
                      aria-describedby="validationServer05Feedback"
                      value={selectedUniversity}
                      onChange={(e) => setSelectedUniversity(e.target.value)}
                      required
                    >
                      <option value="" className="">
                        اختر الجامعة
                      </option>
                      {universities.map((uni, index) => (
                        <option key={index} value={uni.universityName}>
                          {uni.universityName}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجامعة
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="facultySelect"
                  >
                    <Form.Label>الجزء الجامعي</Form.Label>
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
                      <option value="" className="">
                        إختر الجزء الجامعي
                      </option>
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
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجزء الجامعي
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>المستوى الدراسي</Form.Label>
                    <select
                      class="form-select "
                      // id="validationServer05"
                      aria-describedby="validationServer05Feedback"
                      required
                    >
                      <option value="" className="">
                        إختر المستوي الدراسي
                      </option>
                      {academicLevels.map((academicLevel, index) => (
                        <option key={index} value={academicLevel}>
                          {academicLevel}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيارالمستوي الدراسي
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الإختصاص</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="أدخل الإختصاص
                          "
                      required
                      className=""
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الإختصاص
                    </Form.Control.Feedback>
                  </Form.Group>
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
      </Container>
      <Footer />
    </div>
  );
}

export default App;
