import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import WebFont from 'webfontloader';
import html2canvas from 'html2canvas';

const PrescriptionTemplate = () => {
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(14);
  const [clinicName, setClinicName] = useState('Modern Hospital');
  const [header, setHeader] = useState('Prescription');
  const [footer, setFooter] = useState('Thank you for visiting!');

  // Load Google Fonts
  WebFont.load({
    google: {
      families: [font],
    },
  });

  const templateStyles = {
    fontFamily: font,
    fontSize: `${fontSize}px`,
    border: '1px solid #000',
    padding: '20px',
    marginTop: '20px',
  };

  const handleDownload = () => {
    const element = document.getElementById('prescription-preview');
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'prescription.png';
      link.click();
    });
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Prescription Template Settings</Card.Title>

              {/* Clinic Name */}
              <Form.Group controlId="clinicName">
                <Form.Label>Clinic</Form.Label>
                <Form.Control 
                  type="text" 
                  value={clinicName} 
                  onChange={(e) => setClinicName(e.target.value)} 
                />
              </Form.Group>

              {/* Font Selection */}
              <Form.Group controlId="font">
                <Form.Label>Font</Form.Label>
                <Form.Control 
                  as="select" 
                  value={font} 
                  onChange={(e) => setFont(e.target.value)}
                >
                  <option>Arial</option>
                  <option>Times New Roman</option>
                  <option>Courier New</option>
                </Form.Control>
              </Form.Group>

              {/* Font Size */}
              <Form.Group controlId="fontSize">
                <Form.Label>Font Size</Form.Label>
                <Form.Control 
                  type="number" 
                  value={fontSize} 
                  onChange={(e) => setFontSize(Number(e.target.value))} 
                />
              </Form.Group>

              {/* Header */}
              <Form.Group controlId="header">
                <Form.Label>Header</Form.Label>
                <Form.Control 
                  type="text" 
                  value={header} 
                  onChange={(e) => setHeader(e.target.value)} 
                />
              </Form.Group>

              {/* Footer */}
              <Form.Group controlId="footer">
                <Form.Label>Footer</Form.Label>
                <Form.Control 
                  type="text" 
                  value={footer} 
                  onChange={(e) => setFooter(e.target.value)} 
                />
              </Form.Group>

              <Button variant="primary" onClick={handleDownload}>
                Generate Prescription
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <div id="prescription-preview" style={templateStyles}>
            <h2>{clinicName}</h2>
            <h3>{header}</h3>
            <p>This is a prescription template.</p>
            <p>Footer: {footer}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PrescriptionTemplate;
