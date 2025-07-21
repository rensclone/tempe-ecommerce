document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = document.getElementById('productForm');
  const formData = new FormData(form);

const res = await fetch(`/api/products/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    description,
    price: parseInt(price),
    stock: parseInt(stock)
  })
});


  if (res.ok) {
    alert("Produk berhasil ditambahkan!");
    form.reset();
  } else {
    alert("Gagal menambahkan produk.");
  }
});
