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
            <p>${meal.strMeasure1 + meal.strIngredient1}</P>
        
            </div>`
        })

        
    });
    
    }

    
})





