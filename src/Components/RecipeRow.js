import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';

const RecipeRow = (props) => {
  return (
    <Row style={{ justifyContent: 'center' }}>
      {props.recipes.map((recipe) => {
        return (
          <Col key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <RecipeCard isProfileCard={props.isProfileCardRow} recipe={recipe} />
          </Col>
        );
      })}
    </Row>
  );
};

export default RecipeRow;
