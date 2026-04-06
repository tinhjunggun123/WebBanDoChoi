export default function ProductCard({ product }) {
	return (
		<div style={{border:'1px solid #eee',borderRadius:8,padding:16,width:240,background:'#fff',boxShadow:'0 2px 8px #0001'}}>
			<img src={product.image} alt={product.name} style={{width:'100%',height:180,objectFit:'cover',borderRadius:4}} />
			<h3 style={{margin:'12px 0 4px'}}>{product.name}</h3>
			<div style={{color:'#888',fontSize:14,marginBottom:8}}>{product.brand}</div>
			<div style={{fontWeight:'bold',fontSize:18,marginBottom:12}}>{product.price.toLocaleString()} đ</div>
			<button style={{padding:'8px 16px',background:'#1976d2',color:'#fff',border:'none',borderRadius:4,cursor:'pointer'}}>
				Xem chi tiết
			</button>
		</div>
	);
}
