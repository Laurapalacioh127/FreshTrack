import { useState } from "preact/hooks";
import { useFreshTrack } from "../hooks/useFreshTrack";
import { FeaturePage } from "../components/FeaturePage/FeaturePage";

export function InventoryPage() {
  const { inventory, addFood, removeFood } = useFreshTrack();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState("unidades");
  const [expiry, setExpiry] = useState("");

  const submit = (event: Event) => {
    event.preventDefault();
    if (!name.trim() || !expiry) return;
    addFood({ name: name.trim(), category: "General", quantity: Number(quantity), unit, expiry });
    setName("");
    setQuantity("1");
    setExpiry("");
  };

  return (
    <FeaturePage title="Mi inventario" subtitle="Registra y controla los alimentos que tienes en casa.">
      <section className="panel">
        <h2>Agregar alimento</h2>
        <form className="inline-form" onSubmit={submit}>
          <label>Alimento<input value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="Ej. Zanahorias" required /></label>
          <label>Cantidad<input type="number" min="0.1" step="0.1" value={quantity} onInput={(e) => setQuantity(e.currentTarget.value)} required /></label>
          <label>Unidad<select value={unit} onChange={(e) => setUnit(e.currentTarget.value)}><option>unidades</option><option>kg</option><option>gramos</option><option>litros</option><option>paquetes</option></select></label>
          <label>Fecha de vencimiento<input type="date" value={expiry} onInput={(e) => setExpiry(e.currentTarget.value)} required /></label>
          <button className="primary-button" type="submit">+ Agregar</button>
        </form>
      </section>

      <section className="panel">
        <div className="panel-heading"><h2>Alimentos registrados</h2><span className="count-pill">{inventory.length} alimentos</span></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Alimento</th><th>Categoría</th><th>Cantidad</th><th>Vencimiento</th><th>Acción</th></tr></thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.name}</strong></td><td>{item.category}</td><td>{item.quantity} {item.unit}</td><td>{item.expiry}</td>
                  <td><button className="text-button danger-text" onClick={() => removeFood(item.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {inventory.length === 0 && <p className="empty-state">Todavía no has registrado alimentos.</p>}
      </section>
    </FeaturePage>
  );
}
