import Footer from './components/Footer';
import BrandSection from './components/BrandSection';

import React from 'react';
import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div style={{fontFamily:'Arial,Helvetica,sans-serif',background:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderTop />
      <Navbar />
      <BannerSlider />
      <div style={{maxWidth:1300,margin:'32px auto',display:'flex',gap:32,alignItems:'flex-start',padding:'0 12px'}}>
        <Sidebar />
        <div style={{flex:1}}>
          <div style={{fontWeight:700,fontSize:20,marginBottom:18,color:'#e53935'}}>Mô hình GUNDAM chính hãng</div>
          <ProductGrid />
        </div>
      </div>
      <BrandSection />
      <Footer />
    </div>
  );
}

export default App;
