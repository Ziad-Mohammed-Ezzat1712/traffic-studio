// src/Components/Admin/ProductsDashboard.jsx
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductsDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    gallery: [] // ✅ جديد
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = [...products];
      updated[editIndex] = { ...form };
      setProducts(updated);
      setIsEditing(false);
      setEditIndex(null);
      toast.success('Product updated successfully.');
    } else {
      const newProduct = {
        ...form,
        createdAt: new Date().toLocaleString(),
      };
      setProducts([...products, newProduct]);
      toast.success('Product added successfully.');
    }
    setForm({
      name: '',
      price: '',
      image: '',
      description: '',
      category: '',
      gallery: [] // ✅ Reset
    });
  };

  const handleEdit = (index) => {
    setForm({ ...products[index], gallery: products[index].gallery || [] });
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
    toast.error('Product deleted.');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Project Management</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4 mb-10">
        <input
          type="text"
          placeholder="Project Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        

        <input
          type="file"
          accept="image/*"
          className="w-full border p-3 rounded"
          onChange={handleImageChange}
          required={!isEditing}
        />

        <input
          type="file"
          accept="image/*"
          multiple
          className="w-full border p-3 rounded"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            files.forEach((file) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                setForm((prev) => ({
                  ...prev,
                  gallery: [...prev.gallery, reader.result],
                }));
              };
              reader.readAsDataURL(file);
            });
          }}
        />

        {/* ✅ عرض الصور المختارة مع زر حذف */}
        {form.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {form.gallery.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} alt={`Selected ${i}`} className="w-full h-24 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => {
                    const updatedGallery = form.gallery.filter((_, index) => index !== i);
                    setForm({ ...form, gallery: updatedGallery });
                  }}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center hover:bg-red-700"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <select
  className="w-full border p-3 rounded"
  value={form.category}
  onChange={(e) => setForm({ ...form, category: e.target.value })}
  required
>
  <option value="">Select Category</option>
  <option value="Photography">Photography</option>
  <option value="Videography">Videography</option>
  <option value="Video Editing">Video Editing</option>
  <option value="Motion Graphics">Motion Graphics</option>
</select>


        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        ></textarea>

        <button className="bg-orange-600 text-white font-bold px-6 py-2 rounded hover:bg-orange-500">
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* ✅ عرض المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="mt-2">{product.description}</p>
         
            <p className="text-sm text-gray-500 mt-1">Added on: {product.createdAt}</p>

            {/* ✅ عرض الجاليري */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {product.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-24 object-cover rounded" />
                ))}
              </div>
            )}

            <div className="mt-4 flex justify-between">
              <button onClick={() => handleEdit(index)} className="bg-blue-800 p-2 rounded-xl hover:bg-blue-600 font-bold text-white">Edit</button>
              <button onClick={() => handleDelete(index)} className="bg-red-800 p-2 rounded-xl hover:bg-red-600 font-bold text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
