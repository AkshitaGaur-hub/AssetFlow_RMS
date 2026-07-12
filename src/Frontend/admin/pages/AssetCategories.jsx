import React, { useEffect, useState } from "react";
import "../admin_css/AssetCategories.css";

import CategoryForm from "./CategoryForm";

const AssetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
   // Backend API
  };

  const handleAddCategory = () => {
    setEditCategory(null);
    setIsModalOpen(true);
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
    setIsModalOpen(true);
  };

  const handleSaveCategory = async (categoryData) => {

    console.log(categoryData);

    // POST / PUT API

    setIsModalOpen(false);
    fetchCategories();
  };

  const handleDeactivateCategory = async (category) => {
    console.log(category);

    // PATCH API
    fetchCategories();

  };

  const filteredCategories = categories.filter((category) =>
    category.categoryName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (

    <div className="asset-categories">

      {/* Header */}
      <div className="category-header">
        <div>
          <h1>Asset Categories</h1>
          <p>
            Create and manage asset categories used across the organization.
          </p>
        </div>

        <button
          className="add-btn"
          onClick={handleAddCategory}
        >
          + Add Category
        </button>
      </div>

      {/* Search */}

      <div className="category-search">
        <input
          type="text"
          placeholder="Search Category..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {/* Table */}

      <div className="category-table">

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {filteredCategories.length === 0 ? (

              <tr>
                <td
                  colSpan="4"
                  className="no-data"
                >
                  No Categories Found
                </td>
              </tr>
            ) : (

              filteredCategories.map((category) => (

                <tr key={category._id}>
                  <td>{category.categoryName}</td>
                  <td>{category.description}</td>
                  <td>{category.status}</td>
                  <td className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEditCategory(category)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDeactivateCategory(category)
                      }
                    >
                      Deactivate
                    </button>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Category Form */}

      <CategoryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCategory}
        editCategory={editCategory}
      />
    </div>
  );
};
export default AssetCategories;