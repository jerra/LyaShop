export default function ShoppingList({ items }) {

  return items.map(item => <li key={item}>{item}</li>);
}