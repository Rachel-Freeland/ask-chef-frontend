import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';

const RecipeRow = ({recipes}) => {
  return (
    <Row style={{justifyContent: 'center'}}>
      <Col style={{display: 'flex', justifyContent: 'center'}}>
        <RecipeCard />
      </Col>
      <Col style={{display: 'flex', justifyContent: 'center'}}>
        <RecipeCard />
      </Col>
      <Col style={{display: 'flex', justifyContent: 'center'}}>
        <RecipeCard />
      </Col>
    </Row>
  );
};

export default RecipeRow;
