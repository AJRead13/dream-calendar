import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

const Calendar = () => {
  // Sample data for demonstration purposes
  const sampleEvents = [
    { date: '2024-01-06', title: 'Dream 1' },
    { date: '2024-01-15', title: 'Dream 2' },
    // Add more dream events as needed
  ];
  //modal handling
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setShowModal(true);
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <Container>
      <Row>
        {sampleEvents.map((event) => (
          <Col key={event.date} className="text-center">
            <Button variant="outline-primary" onClick={() => handleDateClick(event.date)}>
              {event.title}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Modal for displaying details of the selected date */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDate}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* You can display additional details or the dream content here */}
          <p>Dream details go here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Calendar;
