import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Tile = ({ subject, totalTest, validity, isLast, testCode }) => {
  return (
    <div
      className={`shadow p-3 mt-1 mx-3 bg-body rounded text-start ${isLast ? 'bottom-container' : 'mb-2'}`}
      //* extra bottom margin for last element
    >
      <Card.Body>
        <Button
          size="sm"
          className="float-end fw-bold bg-btn-color"
          variant="outline-primary"
        >
          <Link className="text-decoration-none" to={`/mockTestList/${testCode}`}>Explore</Link>
        </Button>
        <Card.Title className="fs-6">{subject}</Card.Title>
        <Card.Text>
          <small className="text-muted">
            <table>
              <tbody>
                <tr>
                  <td>No of tests</td>
                  <td>&nbsp;&nbsp;{totalTest}</td>
                </tr>
                <tr>
                  <td>Validity</td>
                  <td>&nbsp;&nbsp;{validity}</td>
                </tr>
              </tbody>
            </table>
          </small>
        </Card.Text>
      </Card.Body>
    </div>
  );
};
