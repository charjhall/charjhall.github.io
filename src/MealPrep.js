import React from "react";

export default function MealPrep() {
    const meals = {
        "Korean BBQ": [
            "2.25 lb ribeye steak, or any other well-marbled, tender cut",
            "1.5 onion, 1/2 roughly chopped and 1/2 thinly sliced",
            "5 garlic cloves",
            "3/4 pear, peeled and roughly chopped",
            "5 spring onions, 2 cut into pieces and 3 sliced into 1/4-inch rounds",
            "4.5 tablespoons brown sugar",
            "1.5 teaspoon black pepper",
            "1/2 cup soy sauce",
            "4.5 tablespoons sesame oil",
            "1.5 tablespoon canola oil",
            "1.5 teaspoon sesame seed, for serving",
            "3 cups cooked rice, for serving",
            "Banchan (Korean side dishes), for serving (optional)",
        ], 
        "Dijon Chicken": [
            "1/3 cup butter",
            "3 Tbsp Dijon mustard",
            "1/2 tsp sea salt",
            "1/2 tsp ground sage",
            "sea salt, black pepper, garlic powder, onion powder to taste",
            "6-8 skin-on, bone-in, chicken thighs",
            "1 head of kale",
        ],
        "Tuna Salad": [
            "8 (5 ounce) cans tuna packed in water drained",
            "2 cup mayonnaise (or less to taste)",
            "2/3 cup finely chopped celery about 2 ribs",
            "4 tablespoons red onion minced, about 4 small slices",
            "4 tablespoon sweet pickle relish or dill relish",
            "2 tablespoon fresh lemon juice",
            "2 clove garlic minced",
            "salt and freshly ground black pepper",
        ],
        "Chili Mac": [
            "8 oz (250g) dry weight elbow or macaroni pasta, cooked to al dente and drained",
            "1 tablespoon olive oil",
            "1 large yellow onion, diced",
            "1/2 green pepper (capsicum), seeded and diced",
            "4 cloves garlic, minced (or 1 tablespoon minced garlic)",
            "1 pound (500g) lean ground beef",
            "1 tablespoon each ground cumin and red chili powder or Cayenne (adjust to your tastes)",
            "1/2 teaspoon smoked paprika (or sweet paprika)",
            "1/2 teaspoon salt",
            "7 oz (200g) crushed tomatoes",
            "7 oz (210g) tomato puree (or Passata, condensed tomato soup for Aussies)",
            "1 cup (250 ml) beef or chicken broth",
            "1 tablespoon tomato paste",
            "14 oz (400g) red kidney beans, drained",
            "7 oz (200g) black beans, drained",
            "1 cup shredded Cheddar Cheese (or Monterey Jack)",
            "1 cup shredded mozzarella cheese",
        ],
        "Red Curry Chicken Chili": [
            "4 tablespoons vegetable oil",
            "2 pound ground chicken",
            "1 cup reduced-sodium chicken broth, divided",
            "2 cup chopped sweet onion",
            "2 tablespoon finely chopped garlic",
            "2 teaspoon grated fresh ginger",
            "6 tablespoons red curry paste, divided",
            "4 teaspoons garam masala",
            "1 teaspoon chili powder",
            "2 teaspoon salt",
            "2 can (13.5 oz each) lite coconut milk",
            "2 can (15 oz each) garbanzo beans, drained, rinsed",
            "2 can (14.5 oz each) Hunt's Diced Tomatoes, drained",
            "2 tablespoon cornstarch",
            "Chopped cilantro, plain greek yogurt and warm naan bread, optional",
        ],
        "BYOP": [
            "Crust",
            "Sauce",
            "Mozzarella ",
            "toppings",
        ],
        "Sausage Pasta": [
            "2 sausage packs",
            "1 box of pasta",
            "1 alfredo sauce",
            "1 onion",
        ],
        "Stir Fry": [
            "Onion",
            "Green beans",
            "Broccoli",
            "Chicken",
            "Sauces",
        ],
        "Pork burritos": [
            "Jalapeño ",
            "Lime",
            "Avocado ",
            "Pork",
            "Tortillas ",
            "Taco seasoning",
            "Triblend beans",
            "Mexican rice",
            "Tortilla chips",
            "Shredded cheese",
        ],
        "Lasagna": [
            "Noodles",
            "Jimmy dean sausage",
            "Ricotta",
            "Sauce",
            "Mozzarella ",
            "Onion",
        ]
    }

    const [selectedMeals, setSelectedMeals] = React.useState({});

      return (
        <div>
          <p>Meal Prep</p>
          <ul>
            {Object.keys(meals).map(((meal, index) => {
                        return <li key={index} onClick={()=>{
                            let newSelectedMeals = selectedMeals;
                            newSelectedMeals[meal] = meals[meal]
                            setSelectedMeals(newSelectedMeals);
                            console.log(selectedMeals)
                        }}>
                            <input type="checkbox" id="cb"/>
                            <label>{meal}</label>
                        </li>
                    }))
            }
          </ul>
        </div>
      );
    
  }