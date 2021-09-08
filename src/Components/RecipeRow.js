import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';

const RecipeRow = (props) => {
  return (
    <Row style={{ justifyContent: 'center' }}>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        {props.recipes[0] && <RecipeCard isProfileCard={props.isProfileCardRow} recipe={props.recipes[0]} />}
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        {props.recipes[1] && <RecipeCard isProfileCard={props.isProfileCardRow} recipe={props.recipes[1]} />}
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        {props.recipes[2] && <RecipeCard isProfileCard={props.isProfileCardRow} recipe={props.recipes[2]} />}
      </Col>
    </Row>
  );
};

export default RecipeRow;
