import React from 'react';

const mockProducts = [
  { id: 1, name: 'Gundam RX-78-2', price: 500000, image: 'https://i.imgur.com/1.jpg', brand: 'Bandai' },
  { id: 2, name: 'Zaku II', price: 450000, image: 'https://i.imgur.com/2.jpg', brand: 'Bandai' },
  { id: 3, name: 'Strike Freedom', price: 650000, image: 'https://i.imgur.com/3.jpg', brand: 'Bandai' },
  { id: 4, name: 'MGEX Strike Freedom', price: 1200000, image: 'https://i.imgur.com/4.jpg', brand: 'Bandai' },
  { id: 5, name: 'SD Gundam', price: 200000, image: 'https://i.imgur.com/5.jpg', brand: 'Bandai' },
  { id: 6, name: 'Gundam Barbatos', price: 700000, image: 'https://i.imgur.com/6.jpg', brand: 'Bandai' },
  { id: 7, name: 'Gundam Unicorn', price: 800000, image: 'https://i.imgur.com/7.jpg', brand: 'Bandai' },
  { id: 8, name: 'Gundam Exia', price: 600000, image: 'https://i.imgur.com/8.jpg', brand: 'Bandai' }
];

const ProductCard = ({ product }) => (
  <div style={{border:'1px solid #eee',borderRadius:8,padding:16,width:220,background:'#fff',boxShadow:'0 2px 8px #0001',margin:'0 auto'}}>
    <img src={product.image} alt={product.name} style={{width:'100%',height:140,objectFit:'cover',borderRadius:4}} />
    <h3 style={{margin:'12px 0 4px',fontSize:17}}>{product.name}</h3>
    <div style={{color:'#888',fontSize:14,marginBottom:8}}>{product.brand}</div>
    <div style={{fontWeight:'bold',fontSize:18,marginBottom:12}}>{product.price.toLocaleString()} đ</div>
    <button style={{padding:'8px 16px',background:'#1976d2',color:'#fff',border:'none',borderRadius:4,cursor:'pointer'}}>
      Xem chi tiết
    </button>
  </div>
);

const ProductGrid = () => (
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:24}}>
    {mockProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
