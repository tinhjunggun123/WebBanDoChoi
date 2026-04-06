import React from "react";

const footerStyle = {
	background: "#fff",
	borderTop: "1px solid #eee",
	marginTop: "40px",
	fontFamily: "Arial, sans-serif",
	width: "100vw",
	position: "relative",
	left: "50%",
	right: "50%",
	marginLeft: "-50vw",
	marginRight: "-50vw",
};
const containerStyle = {
	maxWidth: "1400px",
	margin: "0 auto",
};
const topBarStyle = {
	background: "#ffd600",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "20px 40px",
	flexWrap: "wrap",
	fontWeight: 600,
	fontSize: "18px",
};
const mainStyle = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	padding: "40px 40px 20px 40px",
	flexWrap: "wrap",
	background: "#fff",
};
const colStyle = {
	flex: "1 1 220px",
	margin: "0 20px 20px 0",
	minWidth: "220px",
};
const socialStyle = {
	display: "flex",
	gap: "16px",
	marginTop: "10px",
};
const iconStyle = {
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	background: "#f5f5f5",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "24px",
	color: "#222",
	boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
};
const hotlineStyle = {
	color: "#e53935",
	fontWeight: 700,
	fontSize: "18px",
};
const bottomStyle = {
	borderTop: "1px dotted #ccc",
	textAlign: "center",
	padding: "16px 0 8px 0",
	color: "#888",
	fontSize: "15px",
	background: "#fff",
};


const responsiveStyle = `
@media (max-width: 1024px) {
	.footer-main { flex-direction: column; padding: 32px 10px 10px 10px !important; }
	.footer-col { margin-right: 0 !important; min-width: 0 !important; }
	.footer-top { flex-direction: column; padding: 20px 10px !important; }
}
@media (max-width: 600px) {
	.footer-main { padding: 16px 2vw 8px 2vw !important; }
	.footer-top { padding: 12px 2vw !important; font-size: 15px !important; }
}
`;

const Footer = () => (
	<footer style={footerStyle}>
		<style>{responsiveStyle}</style>
		<div style={containerStyle}>
			{/* Top yellow bar */}
			<div className="footer-top" style={topBarStyle}>
				<div>
					GIAO HÀNG SIÊU TỐC
					<div style={{ fontWeight: 400, fontSize: 15 }}>Thanh toán khi nhận hàng</div>
				</div>
				<div>
					MUA HÀNG TÍCH LŨY ĐIỂM
					<div style={{ fontWeight: 400, fontSize: 15 }}>Giảm giá khi mua hàng</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Genuine" style={{ width: 32, marginRight: 8 }} />
					SẢN PHẨM CHÍNH HÃNG
				</div>
				<div>
					HỖ TRỢ TRỰC TUYẾN<br />
					<span style={{ color: "#222", fontWeight: 700, fontSize: 18 }}>090.292.3986</span>
				</div>
			</div>

			{/* Main footer content */}
			<div className="footer-main" style={mainStyle}>
				{/* Social */}
				<div className="footer-col" style={colStyle}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>THEO DÕI HEROGAME</div>
					<div style={socialStyle}>
						<a href="#" style={iconStyle}><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: 28 }} /></a>
						<a href="#" style={iconStyle}><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{ width: 28 }} /></a>
						<a href="#" style={iconStyle}><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={{ width: 28 }} /></a>
						<a href="#" style={iconStyle}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: 28 }} /></a>
					</div>
				</div>

				{/* Contact */}
				<div className="footer-col" style={colStyle}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>LIÊN HỆ</div>
					<div style={{ fontSize: 15, lineHeight: 1.7 }}>
						Giới Thiệu Herogame<br />
						<b>Hero HCM</b>: 200 Nguyễn Trọng Tuyển, P8, Q.Phú Nhuận<br />
						<b>Hero HN</b>: 20 Ngọc Khánh, Q Ba Đình<br />
						<b>Sales</b>: shop.herogame@gmail.com<br />
						<b>Khiếu nại & Hỗ trợ</b>: hotro.herogame@gmail.com
					</div>
				</div>

				{/* Hotline */}
				<div className="footer-col" style={colStyle}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>HOTLINE</div>
					<div style={{ fontSize: 15, lineHeight: 1.7 }}>
						Mở cửa 9:00 - 20:00<br />
						<span style={hotlineStyle}>TP. HỒ CHÍ MINH</span><br />
						090.292.3986<br />
						<span style={hotlineStyle}>HÀ NỘI</span><br />
						0937.666.822
					</div>
				</div>

				{/* Customer Support */}
				<div className="footer-col" style={colStyle}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>HỖ TRỢ KHÁCH HÀNG</div>
					<div style={{ fontSize: 15, lineHeight: 1.7 }}>
						<div>Điều khoản giao dịch</div>
						<div>Chính sách bảo mật thông tin</div>
						<div>Phương thức giao hàng</div>
						<div>Chính sách đổi trả</div>
						<div>Chính sách bảo hành</div>
						<div>Phương thức thanh toán</div>
						<div>Phương thức trả góp</div>
					</div>
				</div>

				{/* About */}
				<div className="footer-col" style={colStyle}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>VỀ HERO GAME</div>
					<div style={{ fontSize: 15, lineHeight: 1.7 }}>
						Liên hệ<br />
						Giới thiệu Herogame<br />
						MST: 0319353881, GCNDK Công Ty TNHH Thương Mại Hero Game, cấp ngày 13/01/2026 tại Sở tài chính TP. Hồ Chí Minh.<br />
						Cửa hàng kinh doanh các sản phẩm máy chơi game Chính Hãng Nintendo, Playstation, Bandai ..., ra mắt 2024 & chuyển đổi lên hệ thống doanh nghiệp từ 2026 để phục vụ khách hàng tốt hơn<br />
					</div>
				</div>
			</div>

			{/* Bottom copyright */}
			<div style={bottomStyle}>
				Copyright © 2025 Herogame powered by Herogame
			</div>
		</div>
	</footer>
);

export default Footer;
