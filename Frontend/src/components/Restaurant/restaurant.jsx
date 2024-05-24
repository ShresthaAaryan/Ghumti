import React, { useState, useEffect } from 'react';
import foods from '../../assets/menu.json';
import catering from '../../assets/catering.json';
import './restaurant.css';
import Navbar from '../Navbar/navbar';

const FilterableTable = () => {
  const [filterText, setFilterText] = useState('');
  const [activeTab, setActiveTab] = useState("menu");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');
    setFilterText(searchTerm || '');
  }, []);

  const handleFilterChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);
  };
  
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(filterText)
  );
  const filteredCatering = catering.filter((cater) =>
    cater.name.toLowerCase().includes(filterText)
  );

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <nav className="tab-nav">
          <button
            className={`tab-nav-button ${activeTab === "menu" && "active"}`}
            onClick={() => setActiveTab("menu")}
          >
            Menu Items
          </button>
          <button
            className={`tab-nav-button ${activeTab === "cater" && "active"}`}
            onClick={() => setActiveTab("cater")}
          >
            Catering Items
          </button>
        </nav>
        <main className="dashboard-main">
          {activeTab === "menu" && (
            <div className="container" id='menu'>
              <div className="input-container">
                <h1>Menu Items</h1>
                <input
                  type="text"
                  name="text"
                  className="input"
                  value={filterText}
                  onChange={handleFilterChange}
                  placeholder="Search..."
                />
              </div>
              <div className="food-items-container">
                {filteredFoods.map((food) => (
                  <div key={food.id} className="food-item"><br/><br/>
                    <div className="card">
                      <div className="card-image" style={{ backgroundImage: `url(${require(`../../assets/Photos/${food.id}.jpg`)})`, alt: `Best ${food.name} in allawah, sydney` }}></div>
                      <div className="card-description">
                        <p className="text-title">{food.name}</p>
                        <p className="text-body">{food.category}</p>
                        <p className="text-body">{food.price}</p>
                        <p className="text-body">Popularity: <span>{food.popularity}</span></p>
                      </div>
                    </div><br/><br/>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cater" && (
            <div className="container" id='cater'>
              <div className="input-container">
                <h1>Catering Items</h1>
                <input
                  type="text"
                  name="text"
                  className="input"
                  value={filterText}
                  onChange={handleFilterChange}
                  placeholder="Search..."
                />
              </div>
              <div className="food-items-container">
                {filteredCatering.map((cater) => (
                  <div key={cater.id} className="food-item"><br/><br/>
                    <div className="card">
                      <div className="card-image" style={{alt: `Best ${cater.name} in allawah, sydney` }}></div>
                      <div className="card-description-cater">
                        <p className="text-title">{cater.name}</p>
                        <p className="text-body">{cater.category}</p>
                        <p className="text-body">{cater.price}</p>
                        <p className="text-body">{cater.description}</p>
                      </div>
                    </div><br/><br/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default FilterableTable;
