import React from 'react'

export default function test() {
  return (
    <div>
        <Container>
            <Col md={6} lg={4} className="mb-4">
              <img src="" alt="" />
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Row>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </Row>
              <Row>
                 <ul className="service-features">
                                      {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                          <FaCheckCircle className="text-primary me-2" />
                                          {feature}
                                        </li>
                                      ))}
                  </ul>
              </Row>
              <Row>
                <button>book now</button>
              </Row>
            </Col>
        </Container>
    </div>
  )
}
