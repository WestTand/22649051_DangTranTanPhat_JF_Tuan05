function Body(){
    const recipes = [
        { id: 1, name: 'Italian-style tomato salad', time: '15 minutes', image: 'tomato-salad.jpg' },
        { id: 2, name: 'Vegetable and shrimp spaghetti', time: '15 minutes', image: 'shrimp-spaghetti.jpg' },
        { id: 3, name: 'Lotus delight salad', time: '20 minutes', image: 'lotus-salad.jpg' },
        { id: 4, name: 'Snack cakes', time: '21 minutes', image: 'snack-cakes.jpg' }
      ];
    return (
   
        <div className="bg-gray-50 min-h-screen p-8">
            
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Emma Gonzalez's Recipe Box</h1>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Share</button>
          </header>
          <p className="text-gray-600 mb-6">
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times...
          </p>
          <nav className="flex space-x-4 mb-6">
            <button className="text-pink-500 border-b-2 border-pink-500 pb-2">Saved Recipes</button>
            <button className="text-gray-600">Folders</button>
            <button className="text-gray-600">Recipes by Genevieve</button>
          </nav>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{recipe.name}</h2>
                  <p className="text-pink-500 text-sm">{recipe.time}</p>
                </div>
              </div>
            ))}
          </div>
          <footer className="flex justify-center space-x-2 mt-8">
            <button className="bg-pink-500 text-white px-3 py-1 rounded-full">1</button>
            <button className="text-gray-600 px-3 py-1 rounded-full">2</button>
            <button className="text-gray-600 px-3 py-1 rounded-full">3</button>
            <button className="text-gray-600 px-3 py-1 rounded-full">...</button>
            <button className="text-gray-600 px-3 py-1 rounded-full">11</button>
          </footer>
        </div>
      );
}export default Body;