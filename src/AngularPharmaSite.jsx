import React, { useState } from 'react';
const PRODUCTS = [
  { id:1, name:'Rebglar DSR', code:'RG-001', pack:'10x10', desc:'Sample product' },
  { id:2, name:'Axonguard', code:'AX-002', pack:'10x10', desc:'Sample product' },
  { id:3, name:'Montglar', code:'MT-003', pack:'10x10', desc:'Sample product' }
];
export default function AngularPharmaSite(){
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(null);
  const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.code.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{fontFamily:'Arial,Helvetica,sans-serif',background:'#f7f7fb',minHeight:'100vh',color:'#1f2937'}}>
      <header style={{background:'#fff',padding:'18px 24px',boxShadow:'0 1px 3px rgba(0,0,0,0.06)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:44,height:44,borderRadius:8,background:'linear-gradient(45deg,#ef4444,#f97316)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>AP</div>
            <div>
              <div style={{fontSize:18,fontWeight:600}}>Angular Pharmaceuticals</div>
              <div style={{fontSize:12,color:'#6b7280'}}>Trusted healthcare products</div>
            </div>
          </div>
          <nav style={{display:'flex',gap:16,fontSize:14}}>
            <a href="#products">Products</a>
            <a href="#verify">Verify</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main style={{maxWidth:1100,margin:'28px auto',padding:'0 18px'}}>
        <section style={{display:'flex',gap:20,alignItems:'center'}}>
          <div style={{flex:1}}>
            <h1 style={{fontSize:32,margin:0}}>Trusted pharmaceutical products for every home</h1>
            <p style={{color:'#6b7280',marginTop:12}}>Angular Pharmaceuticals manufactures safe and effective medicines. Verify authenticity using QR on strip.</p>
            <div style={{marginTop:16,display:'flex',gap:12}}>
              <a href="#products" style={{background:'#ef4444',color:'#fff',padding:'10px 14px',borderRadius:8,textDecoration:'none'}}>View Products</a>
              <a href="#verify" style={{padding:'10px 14px',borderRadius:8,border:'1px solid #e5e7eb',textDecoration:'none'}}>Verify Product</a>
            </div>
          </div>
          <div style={{width:300,background:'#fff',padding:16,borderRadius:12,boxShadow:'0 6px 18px rgba(15,23,42,0.06)'}}>
            <div style={{height:160,background:'#f3f4f6',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
              Product mockup
            </div>
            <div style={{marginTop:12}}>
              <div style={{fontWeight:700}}>Rebglar DSR</div>
              <div style={{fontSize:13,color:'#6b7280'}}>10x10 • Tablet</div>
            </div>
          </div>
        </section>
        <section id="products" style={{marginTop:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <h2 style={{margin:0}}>Our Products</h2>
              <div style={{color:'#6b7280',fontSize:13}}>Click a product to view details and QR verification.</div>
            </div>
            <div>
              <input placeholder="Search name or code" value={q} onChange={e=>setQ(e.target.value)} style={{padding:'8px 10px',borderRadius:8,border:'1px solid #e5e7eb'}} />
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:12}}>
            {filtered.map(p=>(
              <div key={p.id} style={{background:'#fff',padding:12,borderRadius:10,boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                <div style={{height:120,background:'#f8fafc',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>Image</div>
                <div style={{marginTop:10}}>
                  <div style={{fontWeight:700}}>{p.name}</div>
                  <div style={{fontSize:12,color:'#6b7280'}}>Code: {p.code}</div>
                  <div style={{marginTop:8,color:'#374151'}}>{p.desc}</div>
                  <div style={{marginTop:10,display:'flex',gap:8}}>
                    <button onClick={()=>setSel(p)} style={{padding:'8px 10px',borderRadius:8,border:'1px solid #e5e7eb'}}>View</button>
                    <a href="#verify" style={{padding:'8px 10px',background:'#ef4444',color:'#fff',borderRadius:8,textDecoration:'none'}}>Verify</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="verify" style={{marginTop:28,background:'#fff',padding:16,borderRadius:10}}>
          <h3 style={{margin:0}}>Verify Product</h3>
          <p style={{color:'#6b7280'}}>Scan the QR on the blister or enter code to check authenticity.</p>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:160,height:160,background:'#f3f4f6',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>QR code</div>
            <div style={{flex:1}}>
              <input placeholder="Enter product code e.g. RG-001-AB12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e5e7eb'}} />
              <div style={{marginTop:8,color:'#6b7280'}}>If code is invalid contact support.</div>
            </div>
          </div>
        </section>
        <section id="contact" style={{marginTop:28,display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <div style={{background:'#fff',padding:16,borderRadius:10}}>
            <h3 style={{margin:0}}>About Angular Pharmaceuticals</h3>
            <p style={{color:'#6b7280'}}>Committed to producing affordable, high-quality medicines. Our units follow GMP and strict QA.</p>
          </div>
          <div style={{background:'#fff',padding:16,borderRadius:10}}>
            <h3 style={{margin:0}}>Contact</h3>
            <div style={{fontSize:13,color:'#374151'}}>Phone: +91 98765 43210</div>
            <div style={{fontSize:13,color:'#374151',marginTop:6}}>Email: hello@angularpharma.in</div>
            <form style={{marginTop:10,display:'grid',gap:8'}}>
              <input placeholder='Your name' style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
              <input placeholder='Phone or email' style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
              <textarea placeholder='Message' style={{padding:8,borderRadius:6,border:'1px solid #e5e7eb'}}></textarea>
              <div style={{textAlign:'right'}}><button type="button" style={{padding:'8px 12px',borderRadius:8,background:'#ef4444',color:'#fff'}}>Send Message</button></div>
            </form>
          </div>
        </section>
      </main>
      <footer style={{background:'#fff',padding:14,marginTop:28}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
          <div>© {new Date().getFullYear()} Angular Pharmaceuticals</div>
          <div>Designed for Dinu</div>
        </div>
      </footer>
      {sel && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setSel(null)}>
          <div style={{background:'#fff',padding:18,borderRadius:8,maxWidth:520,width:'90%'}} onClick={e=>e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div><strong>{sel.name}</strong><div style={{fontSize:12,color:'#6b7280'}}>Code: {sel.code}</div></div>
              <button onClick={()=>setSel(null)}>Close</button>
            </div>
            <div style={{marginTop:8}}>
              <div>Batch: AB1234</div>
              <div>Mfg: 01-2025</div>
              <div>Exp: 01-2027</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}