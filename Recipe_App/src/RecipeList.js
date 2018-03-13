import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
              title: "Spaghetti", 
              ingredients: ['pasta', '8 cups water', '1box spaghetti'],
              instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
              img: "spaghetti.jpg"
            },
            {
          title: "Milkshake" ,
          ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
          instructions: "Combine ice creame and milk. Blen until creamy",
          img: "milkshake.jpg"
            },
            {
          title: "Avocado Toast",
          ingredients: ['2 slices of bread', '1 Avocado', '1 table spoon olive oil', '1 pinch of salt', 'pepper'],
          instructions: "Toast Bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
          img: "avocado_toast.jpg"
            }
        ]
    }
    
    static propTypes= {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
          ));
          
        return (
            <div className="recipe-list">
              {recipes}
            </div>
          )
        
    }
}

export default RecipeList;