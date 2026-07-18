import Image from 'next/image';import './styles.css';
export const metadata={title:'I Know Your Works Assessment',description:'House of Wonders Sunday School assessment'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><div className="brand"><Image src="/house-of-wonders-logo.webp" width={52} height={52} alt="House of Wonders" priority/><div><strong>House of Wonders</strong><small>Sunday School</small></div></div><a href="/activity">Activity</a></header>{children}</body></html>}
