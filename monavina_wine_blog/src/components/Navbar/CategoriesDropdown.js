import React from 'react';

const CategoriesDropdown = () => {
  // Define your categories and link to their respective pages
  const categories = [
    { name: 'Category 1', link: '/category1' },
    { name: 'Category 2', link: '/category2' },
    // Add more categories as needed
  ];

  return (
    <div>
      <h2>Blog Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <a href={category.link}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesDropdown;
