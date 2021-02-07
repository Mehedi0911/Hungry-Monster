const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    const mealInput = document.getElementById("mealInput").value;    
    const mealInputFirstLeter = mealInput.charAt(0);
    console.log(mealInputFirstLeter);

fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+mealInputFirstLeter+'')
.then(response => response.json())
.then(data => displayMeals(data.meals));

    const displayMeals = meals =>{
    const mealContainer = document.getElementById("mealContainer");
    mealContainer.innerHTML = "";
    meals.forEach(meal => {
        console.log(meal);
        const newMeal = document.createElement('div');
        let mealInfo = `<div>
             <img src=${meal.strMealThumb}>
             <h6>${meal.strMeal}</h6>
             </div>`
        newMeal.innerHTML = mealInfo;
        mealContainer.appendChild(newMeal);

        newMeal.addEventListener('click', function(){
            mealInfo = `<div>
            <img src=${meal.strMealThumb}>
            <h5>${meal.strMeal}</h5>
            <h6>Ingredients</h6>
            <p>${meal.strMeasure1 + " " + meal.strIngredient1}</P>
            <p>${meal.strMeasure2 + " " + meal.strIngredient2}</P>
            <p>${meal.strMeasure3 + " " + meal.strIngredient3}</P>
            <p>${meal.strMeasure4 + " " + meal.strIngredient4}</P>
            <p>${meal.strMeasure5 + " " + meal.strIngredient5}</P>
            <p>${meal.strMeasure6 + " " + meal.strIngredient6}</P>
            <p>${meal.strMeasure7 + " " + meal.strIngredient7}</P>
            <p>${meal.strMeasure8 + " " + meal.strIngredient8}</P>
            <p>${meal.strMeasure9 + " " + meal.strIngredient9}</P>
            <p>${meal.strMeasure10 + " " + meal.strIngredient10}</P>
        
            </div>`
            newMeal.innerHTML = mealInfo;
        })

        
    });
    
    }

    
})





