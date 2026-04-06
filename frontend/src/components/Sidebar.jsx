import React from 'react';

const categories = [
  'Máy game Nintendo',
  'Máy Sony Playstation',
  'Máy Xbox',
  'GAME',
  'Phụ kiện Gaming',
  'Kính Thực Tế Ảo',
  'Gundam',
  'Hobby',
  'Pokemon Center',
  'Thẻ Bài TCG',
  'PC Handheld',
  'Màn hình LCD mini',
  'Hàng Cũ, Đã Qua Sử Dụng'
];

const Sidebar = () => (
  <aside style={{background:'#fff',borderRadius:8,padding:'18px 0',boxShadow:'0 2px 8px #0001',width:220,minWidth:180}}>
    <div style={{fontWeight:700,fontSize:18,color:'#e53935',padding:'0 24px 12px'}}>Danh mục</div>
    <ul style={{listStyle:'none',padding:0,margin:0}}>
      {categories.map((cat, idx) => (
        <li key={idx} style={{padding:'10px 24px',borderBottom:'1px solid #f0f0f0',fontSize:15,cursor:'pointer',color:'#222',transition:'background 0.2s'}}
            onMouseOver={e=>e.currentTarget.style.background='#ffe082'}
            onMouseOut={e=>e.currentTarget.style.background='transparent'}>
          {cat}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
