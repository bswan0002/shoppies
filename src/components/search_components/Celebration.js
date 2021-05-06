// Libraries
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Modal, Button } from "react-bootstrap";

const Celebration = ({ showCelebration, setShowCelebration }) => {
  const { width, height } = useWindowSize();

  return (
    <>
      {showCelebration && <Confetti width={width} height={height} />}
      <Modal show={showCelebration} onHide={() => setShowCelebration(false)}>
        <Modal.Header closeButton>
          <Modal.Title>You've Made 5 Nominations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your nominations. The academy looks forward to reviewing
          your selections.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCelebration(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Celebration;
