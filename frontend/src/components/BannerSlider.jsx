import React from 'react';

const banners = [
  'https://herogame.vn/media/banner/slider-gunpla-2024.jpg',
  'https://herogame.vn/media/banner/slider-nintendo-2024.jpg',
  'https://herogame.vn/media/banner/slider-ps5-2024.jpg'
];

const BannerSlider = () => {
  // Đơn giản: chỉ hiển thị 3 ảnh, có thể nâng cấp thành slider động sau
  return (
    <div style={{background:'#111',padding:'24px 0',display:'flex',justifyContent:'center',gap:24}}>
      {banners.map((src, idx) => (
        <img key={idx} src={src} alt={`Banner ${idx+1}`} style={{width:380,height:200,objectFit:'cover',borderRadius:12,boxShadow:'0 2px 12px #0006'}} />
      ))}
    </div>
  );
};

export default BannerSlider;
