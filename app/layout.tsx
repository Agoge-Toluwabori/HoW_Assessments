import './styles.css';
export const metadata={title:'I Know Your Works Assessment',description:'House of Wonders Sunday School assessment'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><div className="brand"><span className="mark">HoW</span><div><strong>House of Wonders</strong><small>Sunday School</small></div></div><a href="/activity">Activity</a></header>{children}</body></html>}
