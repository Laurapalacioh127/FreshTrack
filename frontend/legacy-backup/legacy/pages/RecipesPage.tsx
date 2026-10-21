import { FeaturePage } from "../components/FeaturePage/FeaturePage";
import { useFreshTrack } from "../hooks/useFreshTrack";

export function RecipesPage() {
  const { recipes } = useFreshTrack();

  return (
    <FeaturePage title="Recetas" subtitle="Encuentra ideas sencillas para aprovechar tus ingredientes.">
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <article className="recipe-card" key={recipe.id}>
            <div className={`recipe-art recipe-art-${index % 3}`}>{["♧", "◉", "✿"][index % 3]}</div>
            <div className="recipe-content">
              <span className="category-label">{recipe.category}</span>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <div className="recipe-meta">◷ {recipe.time}</div>
              <button className="secondary-button" onClick={() => window.alert(`Receta de demostración: ${recipe.name}`)}>Ver receta</button>
            </div>
          </article>
        ))}
      </div>
    </FeaturePage>
  );
}
