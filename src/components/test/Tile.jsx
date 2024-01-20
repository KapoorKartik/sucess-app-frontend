import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

export const Tile = ({ subject, totalTest, validity, isLast, testCode }) => {
  const obj =  {subject, totalTest, validity, isLast, testCode} ;
  // console.log('params:', params)
  // const encParams = btoa(params);
  // console.log('encParams:', encParams)
  // const decParams = atob(encParams);
  // console.log('decParams:', decParams)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mockTestList', { state: { obj } });
  }
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
          onClick={handleClick}
        >Explore
    {/* <Link className="text-decoration-none" to={{pathname :'/mockTestList' , state : {obj}}}>Explore</Link> */}
          {/* <Link to={{ pathname: '/child', state: { myObject } }}>Go to Child</Link> */}
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
