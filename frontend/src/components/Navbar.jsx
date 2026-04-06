import React from 'react';

const Navbar = () => (
	<nav style={{background:'#fff',borderBottom:'2px solid #ffd600',padding:'0',boxShadow:'0 2px 8px rgba(0,0,0,0.03)'}}>
		<div style={{maxWidth:1300,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 18px',height:70}}>
			{/* Logo */}
			<div style={{display:'flex',alignItems:'center',gap:10}}>
				<img src="https://herogame.vn/static/media/logo.2b1e2e7e.png" alt="Herogame Logo" style={{height:44}} />
			</div>
			{/* Search + menu */}
			<div style={{flex:1,marginLeft:32,marginRight:32,display:'flex',alignItems:'center',gap:12}}>
				<select style={{height:36,border:'1px solid #ccc',borderRadius:4,padding:'0 8px',fontSize:15}}>
					<option>Sản phẩm</option>
					<option>Nintendo</option>
					<option>Playstation</option>
					<option>Gundam</option>
				</select>
				<input type="text" placeholder="Nhập từ khóa cần tìm..." style={{flex:1,height:36,border:'1px solid #ccc',borderRadius:4,padding:'0 12px',fontSize:15}} />
				<button style={{height:36,background:'#ffd600',border:'none',borderRadius:4,padding:'0 18px',fontWeight:600,cursor:'pointer'}}>Tìm kiếm</button>
			</div>
			{/* Nút menu, đăng nhập, giỏ hàng */}
			<div style={{display:'flex',alignItems:'center',gap:16}}>
				<button style={{background:'#e3e3e3',border:'none',borderRadius:4,padding:'6px 16px',fontWeight:600,cursor:'pointer'}}>Đăng nhập</button>
				<button style={{background:'#ffd600',border:'none',borderRadius:4,padding:'6px 16px',fontWeight:600,cursor:'pointer'}}>Đăng ký</button>
				<div style={{position:'relative'}}>
					<img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" style={{width:28}} />
					<span style={{position:'absolute',top:-6,right:-8,background:'#e53935',color:'#fff',borderRadius:'50%',fontSize:12,padding:'2px 6px',fontWeight:700}}>2</span>
				</div>
			</div>
		</div>
		{/* Menu dưới */}
		<div style={{background:'#222',color:'#fff',fontWeight:500,fontSize:15}}>
			<div style={{maxWidth:1300,margin:'0 auto',display:'flex',alignItems:'center',gap:24,padding:'0 18px',height:40}}>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>TRANG CHỦ</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>NINTENDO</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>PLAYSTATION</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>XBOX - PC HANDHELD</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>KINH VR</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>GUNDAM</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>POKEMON</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>HOBBY</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>THẺ BÀI TCG</a>
				<a href="#" style={{color:'#fff',textDecoration:'none'}}>TIN TỨC - HƯỚNG DẪN</a>
			</div>
		</div>
	</nav>
);

export default Navbar;
