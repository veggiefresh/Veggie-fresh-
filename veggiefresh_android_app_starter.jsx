import { useState } from 'react';

export default function VeggieFreshApp() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [phone, setPhone] = useState('');
  const products = [
    {
      id: 1,
      name: 'Tomato',
      price: '₹30/kg',
      image:
        'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Potato',
      price: '₹35/kg',
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Onion',
      price: '₹40/kg',
      image:
        'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Spinach',
      price: '₹20/bundle',
      image:
        'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <header className="bg-green-600 text-white p-5 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">VeggieFresh 🥬</h1>
            <p className="text-sm opacity-90">
              Fresh Vegetables Delivered Daily
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-800 text-white px-4 py-2 rounded-xl font-semibold shadow"
            >
              Login
            </button>

            <button
              onClick={() => setShowCheckout(true)}
              className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold shadow"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-8 text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">
            Farm Fresh Vegetables At Your Doorstep 🚚
          </h2>

          <p className="text-lg max-w-2xl mb-6">
            Order fresh vegetables, fruits, and daily essentials directly
            from VeggieFresh.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-green-700 px-6 py-3 rounded-2xl font-bold shadow-lg">
              Shop Now
            </button>

            <button className="bg-green-800 px-6 py-3 rounded-2xl font-bold shadow-lg">
              Today's Offers
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search fresh vegetables..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-2xl border border-green-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <h3 className="text-2xl font-bold mb-5">Categories</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Vegetables', 'Fruits', 'Leafy Greens', 'Organic'].map(
            (category) => (
              <div
                key={category}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition"
              >
                <div className="text-4xl mb-3">🥦</div>
                <p className="font-semibold">{category}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Best Sellers</h3>

          <button className="text-green-700 font-semibold">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-xl font-bold mb-2">{product.name}</h4>

                <div className="flex items-center justify-between">
                  <p className="text-green-700 font-bold text-lg">
                    {product.price}
                  </p>

                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="text-5xl mb-4">🚚</div>
            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-600">
              Quick doorstep delivery for all fresh vegetables.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="text-5xl mb-4">🥬</div>
            <h4 className="text-xl font-bold mb-2">Fresh Products</h4>
            <p className="text-gray-600">
              Handpicked vegetables sourced fresh every morning.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="text-5xl mb-4">💳</div>
            <h4 className="text-xl font-bold mb-2">Easy Payments</h4>
            <p className="text-gray-600">
              UPI, COD, PhonePe, Google Pay, and cards supported.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Get ₹50 OFF On Your First Order 🎉
          </h3>

          <p className="text-gray-600 mb-6">
            Order today and enjoy fresh vegetables delivered to your home.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
            Order Now
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">Today's Offers 🔥</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Family Combo Pack</h4>
            <p className="mb-5">
              Tomato, Onion, Potato & Chilli Combo at special pricing.
            </p>
            <button className="bg-white text-orange-600 px-5 py-3 rounded-2xl font-bold">
              Buy Now
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Free Delivery Offer</h4>
            <p className="mb-5">
              Enjoy free delivery on orders above ₹499.
            </p>
            <button className="bg-white text-green-700 px-5 py-3 rounded-2xl font-bold">
              Shop Today
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Customer Reviews ⭐
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-2xl p-5">
              <p className="mb-4 text-gray-700">
                “Very fresh vegetables and fast delivery service.”
              </p>
              <h4 className="font-bold">Rahul</h4>
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <p className="mb-4 text-gray-700">
                “Affordable prices and excellent quality.”
              </p>
              <h4 className="font-bold">Priya</h4>
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <p className="mb-4 text-gray-700">
                “Easy ordering experience through VeggieFresh.”
              </p>
              <h4 className="font-bold">Arjun</h4>
            </div>
          </div>
        </div>
      </section>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Login To VeggieFresh 🥬
            </h3>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 border rounded-2xl mb-4"
            />

            <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold mb-3">
              Send OTP
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full bg-gray-200 py-4 rounded-2xl font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-5 text-center">
              Checkout 🛒
            </h3>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-2xl"
              />

              <input
                type="text"
                placeholder="Delivery Address"
                className="w-full p-4 border rounded-2xl"
              />

              <select className="w-full p-4 border rounded-2xl">
                <option>UPI Payment</option>
                <option>Cash On Delivery</option>
                <option>Google Pay</option>
                <option>PhonePe</option>
              </select>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold mb-3">
              Place Order
            </button>

            <button
              onClick={() => setShowCheckout(false)}
              className="w-full bg-gray-200 py-4 rounded-2xl font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <footer className="bg-green-700 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-3">VeggieFresh</h4>
            <p className="opacity-90">
              Fresh vegetables and groceries delivered quickly.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>Home</li>
              <li>Products</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Contact</h4>
            <p className="opacity-90">WhatsApp Orders Available</p>
            <p className="opacity-90">UPI & COD Supported</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
