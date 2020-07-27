import Head from 'next/head'
import Menu from '../components/menu';
export default function Home() {
return (
<div>
<Head>
<title>Home</title>
</Head>
<Menu />
<div>
<h1>Selamat Datang di LikesStore</h1>
<p> LikesStore adalah brand lokal yang dibuat untuk memenuhi gaya hidup. LikesStore ini bergerak
dalam bidang industri yang mengutamakan menggunakan bahan² lokal.
Dikarenakan di masa ini dimana tekhnologi yang semakin maju dan permintaan pasar yang
semakin besar, mempengaruhi lambatnya perkembangan usaha dalam bidang industri. Oleh
karena itu dibuatlah program ini yang dimana nantinya akan mempermudah usaha di bidang
industri.</p>
</div>
</div>
);
}