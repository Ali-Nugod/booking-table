
import React from "react";

const menuItems = [
  { name: "Spaghetti Bolognese", price: "$12", image: "https://source.unsplash.com/400x300/?pasta" },
  { name: "Greek Salad", price: "$8", image: "https://source.unsplash.com/400x300/?salad" },
  { name: "Lemon Chicken", price: "$14", image: "https://source.unsplash.com/400x300/?chicken" },
];

function Menu() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Our Menu</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {menuItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
