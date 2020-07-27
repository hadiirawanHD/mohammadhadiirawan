import Head from 'next/head'
import Menu from '../components/menu';
export default function Tentang() {
return (
<div>
<Head>
<title>Tentang Kami</title>
</Head>
<Menu />
<div>
<h1>Tentang Kami</h1>
<h5>Mahasiswa Stikom Banyuwangi</h5>
<p>Nama  : Mohammad Hadi Irawan</p>
<p>Tempat, Tgl Lahir : Banyuwangi, 29 November 1999</p>
<p>Jenis Kelamin : Laki-Laki</p>
<p>Agama : Islam</p>
<p>Alamat : Jl.Citarum 34 Panderejo Banyuwangi</p>
<p>Kelas : SM4.1 (S1 Reguler Sore)</p>
<p>Email : hadiirawan155@gmail.com</p>
</div>
</div>
);
}
