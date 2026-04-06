import React from 'react';

const brandLogos = [
  'https://herogame.vn/media/brand/hg.png',
  'https://herogame.vn/media/brand/rg.png',
  'https://herogame.vn/media/brand/mg.png',
  'https://herogame.vn/media/brand/sd.png',
  'https://herogame.vn/media/brand/bandai.png',
  'https://herogame.vn/media/brand/nintendo.png',
  'https://herogame.vn/media/brand/playstation.png',
  'https://herogame.vn/media/brand/xbox.png',
  'https://herogame.vn/media/brand/pokemon.png',
  'https://herogame.vn/media/brand/tamiya.png',
];

const BrandSection = () => (
  <div style={{background:'#fff',margin:'32px auto 0',maxWidth:1300,borderRadius:8,padding:'24px 0',boxShadow:'0 2px 8px #0001',display:'flex',flexWrap:'wrap',justifyContent:'center',gap:32}}>
    {brandLogos.map((src, idx) => (
      <img key={idx} src={src} alt="brand" style={{height:54,objectFit:'contain',background:'#f9f9f9',borderRadius:6,padding:'6px 18px'}} />
    ))}
  </div>
);

export default BrandSection;
