import ProductCard from '../components/ProductCard';
import '../App.css';

// Dữ liệu mẫu sản phẩm
const mockProducts = [
	{
		id: 1,
		name: 'Gundam RX-78-2',
		price: 500000,
		image: 'https://i.imgur.com/1.jpg',
		brand: 'Bandai',
	},
	{
		id: 2,
		name: 'Zaku II',
		price: 450000,
		image: 'https://i.imgur.com/2.jpg',
		brand: 'Bandai',
	},
	{
		id: 3,
		name: 'Strike Freedom',
		price: 650000,
		image: 'https://i.imgur.com/3.jpg',
		brand: 'Bandai',
	},
];

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="banner" style={{background:'#fff',padding:'32px 0 16px 0',textAlign:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.03)', marginBottom: 16}}>
        <img src="https://herogame.vn/static/media/logo.2b1e2e7e.png" alt="Herogame Logo" style={{height: 60, marginBottom: 8}} />
        <h1 style={{color:'#222', fontWeight:700, fontSize:28, margin:'8px 0 4px 0'}}>Herogame - Shop Đồ Chơi & Game Chính Hãng</h1>
        <p style={{color:'#444', fontSize:17}}>Khám phá các mẫu mô hình, máy chơi game, phụ kiện chính hãng, giá tốt!</p>
      </div>
      {/* Sản phẩm nổi bật */}
      <div className="container responsive-container">
        <h2 style={{marginBottom:16, color:'#222', fontWeight:600, fontSize:22, borderLeft:'4px solid #ffd600', paddingLeft:10}}>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <style>{`
        .responsive-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px 0 16px;
        }
        .product-list {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .responsive-container { max-width: 100%; padding: 20px 8px 0 8px; }
          .product-list { gap: 16px; }
        }
        @media (max-width: 600px) {
          .responsive-container { padding: 12px 2vw 0 2vw; }
          .product-list { gap: 8px; }
        }
      `}</style>
    </div>
  );
}
