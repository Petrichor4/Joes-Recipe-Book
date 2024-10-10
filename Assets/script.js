const newRecipe = document.getElementById('newRecipe');
const recipeContainer = document.getElementById('recipes-container');

// insert new recipe
newRecipe.addEventListener('click', function() {
  const makeRecipeCard = document.createElement('section')
  makeRecipeCard.classList.add('shadow-md', 'm-8', 'w-11/12', 'min-[700px]:w-5/12', 'min-[700px]:min-w-[375px]', 'bg-stone-100', 'p-4', 'flex', 'h-56', 'max-w-[450px]');
    makeRecipeCard.innerHTML = `
          <img src="./Assets/Photos/landscape-placeholder.svg" alt="" class="w-4/12 h-auto">
          
          <div class="infopanel flex flex-col m-4 flex-1">
            <h2 contenteditbile="true">Enter Title Here</h2>
            <textarea name="desc" id="recipeDesc" placeholder="Enter description Here" class="flex-1 bg-transparent resize-none outline-none"></textarea>
          </div>

    `;
    recipeContainer.appendChild(makeRecipeCard);
});

