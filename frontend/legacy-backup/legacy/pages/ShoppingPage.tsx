import { useState } from "preact/hooks";
import { useFreshTrack } from "../hooks/useFreshTrack";
import { FeaturePage } from "../components/FeaturePage/FeaturePage";

export function ShoppingPage() {
  const { shoppingList, addShoppingItem, toggleShoppingItem } = useFreshTrack();
  const [name, setName] = useState("");

  const submit = (event: Event) => {
    event.preventDefault();
    addShoppingItem(name);
    setName("");
  };

  return (
    <FeaturePage title="Lista de mercado" subtitle="Organiza tus próximas compras y marca lo que ya conseguiste.">
      <section className="panel">
        <h2>Agregar a la lista</h2>
        <form className="inline-form" onSubmit={submit}>
          <label className="grow">Producto<input value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="¿Qué necesitas comprar?" required /></label>
          <button className="primary-button" type="submit">+ Agregar producto</button>
        </form>
      </section>
      <section className="panel">
        <div className="panel-heading"><h2>Mis compras</h2><span className="count-pill">{shoppingList.filter((item) => !item.checked).length} pendientes</span></div>
        {shoppingList.map((item) => (
          <label className={`shopping-row ${item.checked ? "shopping-done" : ""}`} key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => toggleShoppingItem(item.id)} />
            <span className="shopping-name">{item.name}</span><span className="muted">{item.quantity}</span>
          </label>
        ))}
      </section>
    </FeaturePage>
  );
}
