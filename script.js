// script.js
// SELLER_WHATSAPP = 9004130508 (place order via WhatsApp)
// CONTACT_CALL     = 9322830691 (call contact)
const SELLER_WHATSAPP = '919004130508';
const CONTACT_CALL    = '919322830691';

// update floating links
document.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.getElementById('wa-btn');
  const phoneBtn = document.getElementById('phone-btn');
  if (waBtn) waBtn.href = `https://wa.me/${SELLER_WHATSAPP}`;
  if (phoneBtn) phoneBtn.href = `tel:+${CONTACT_CALL.replace(/^\+?/, '')}`;
});

// PRODUCTS — images must be present in assets/stock_images/
const products = [
  { id:1, name:"Fire Alarm (Using Flame Sensor)", price:600, category:"Sensors & Modules", img:"assets/stock_images/fire_alarm_sensor_ki_b292e8d7.jpg"},
  { id:2, name:"Obstacle Detection (Using IR Module & Buzzer)", price:600, category:"Sensors & Modules", img:"assets/stock_images/obstacle_detection_i_f1c4fe1d.jpg"},
  { id:3, name:"Laser Security Alarm (Laser Diode, LDR, etc)", price:600, category:"Sensors & Modules", img:"assets/stock_images/laser_security_alarm_075657c7.jpg"},
  { id:4, name:"Door Opening Alarm (Magnetic Reed Switch)", price:700, category:"Sensors & Modules", img:"assets/stock_images/magnetic_door_sensor_6c915dbc.jpg"},
  { id:5, name:"Wireless Power Transfer", price:800, category:"Sensors & Modules", img:"assets/stock_images/wireless_power_trans_b2636208.jpg"},
  { id:6, name:"PIR Motion Sensor (LED Output)", price:800, category:"Sensors & Modules", img:"assets/stock_images/pir_motion_sensor_de_4b0727f2.jpg"},
  { id:7, name:"Automatic Street Light On/Off", price:800, category:"Sensors & Modules", img:"assets/stock_images/automatic_street_lig_2f9d28fb.jpg"},
  { id:8, name:"LPG Gas Leak Alarm (MQ6)", price:820, category:"Sensors & Modules", img:"assets/stock_images/lpg_gas_leak_detecto_9e97dc1f.jpg"},
  { id:9, name:"Smoke Gas Leak Alarm (MQ2)", price:820, category:"Sensors & Modules", img:"assets/stock_images/smoke_detector_mq2_g_b0d982e0.jpg"},
  { id:10, name:"Automatic Garden Watering System", price:850, category:"Sensors & Modules", img:"assets/stock_images/automatic_garden_wat_2ed6526f.jpg"},
  { id:11, name:"Automatic Hand Sanitizer/Water Dispenser", price:870, category:"Sensors & Modules", img:"assets/stock_images/hand_sanitizer_dispe_5067c7a6.jpg"},
  { id:12, name:"Solar Based Powerbank", price:870, category:"Sensors & Modules", img:"assets/stock_images/solar_power_bank_mob_4f793f46.jpg"},
  { id:13, name:"Single Axis Solar Tracking System", price:1250, category:"Sensors & Modules", img:"assets/stock_images/solar_tracking_syste_2cc6f8d4.jpg"},
  { id:14, name:"Line Following Car (LDR)", price:1350, category:"Sensors & Modules", img:"assets/stock_images/line_following_robot_12a048da.jpg"},
  { id:15, name:"Human Following Car (IR)", price:1350, category:"Sensors & Modules", img:"assets/stock_images/human_following_robo_dbbe73e5.jpg"},
  { id:16, name:"Dual Axis Solar Tracking System", price:1450, category:"Sensors & Modules", img:"assets/stock_images/dual_axis_solar_trac_1946aa18.jpg"},
  { id:17, name:"Fire Fighting Car (non-Arduino)", price:1600, category:"Sensors & Modules", img:"assets/stock_images/fire_fighting_robot__f7731ae9.jpg"},
  { id:18, name:"Automatic Plant Monitoring System / Irrigation (Arduino)", price:3250, category:"Arduino Projects", img:"assets/stock_images/arduino_plant_irriga_948f9a22.jpg"},
  { id:19, name:"Temperature & Humidity Display (Arduino)", price:3250, category:"Arduino Projects", img:"assets/stock_images/temperature_humidity_1ae87976.jpg"},
  { id:20, name:"RFID Based Security Access Control (Arduino)", price:3350, category:"Arduino Projects", img:"assets/stock_images/rfid_security_access_a05baee9.jpg"},
  { id:21, name:"Automatic Door Using Ultrasonic (Arduino)", price:3350, category:"Arduino Projects", img:"assets/stock_images/automatic_door_ultra_18f52dd3.jpg"},
  { id:22, name:"Fire Fighting Car (Arduino)", price:3350, category:"Arduino Projects", img:"assets/stock_images/arduino_fire_fightin_ed1615ac.jpg"},
  { id:23, name:"Human Following Car (Arduino)", price:3350, category:"Arduino Projects", img:"assets/stock_images/arduino_human_follow_12f36cfd.jpg"},
  { id:24, name:"Home Automation Using Bluetooth (Arduino)", price:3350, category:"Arduino Projects", img:"assets/stock_images/home_automation_blue_21b34296.jpg"},
  { id:25, name:"Toll Gate Opening Using Ultrasonic/IR (Arduino)", price:3450, category:"Arduino Projects", img:"assets/stock_images/toll_gate_automatic__182ea085.jpg"},
  { id:26, name:"Obstacle Avoiding Car (Arduino)", price:3600, category:"Arduino Projects", img:"assets/stock_images/obstacle_avoiding_ro_606fa84f.jpg"},
  { id:27, name:"Smart Dustbin (Arduino)", price:3600, category:"Arduino Projects", img:"assets/stock_images/smart_dustbin_automa_d3b9bb03.jpg"},
  { id:28, name:"Bluetooth Controlled Car (Arduino)", price:3600, category:"Arduino Projects", img:"assets/stock_images/bluetooth_controlled_ea055259.jpg"},
  { id:29, name:"RF Controlled Car (Arduino)", price:3650, category:"Arduino Projects", img:"assets/stock_images/rf_remote_control_ca_949d2621.jpg"},
  { id:30, name:"Line Following Car (Arduino)", price:3650, category:"Arduino Projects", img:"assets/stock_images/line_follower_robot__c07a2596.jpg"},
  { id:31, name:"Air Quality Monitoring System (Arduino)", price:3650, category:"Arduino Projects", img:"assets/stock_images/air_quality_monitori_178eb8ef.jpg"},
  { id:32, name:"LPG Gas Leak Detection System (Arduino)", price:3650, category:"Arduino Projects", img:"assets/stock_images/lpg_gas_leak_detecti_d81fc89d.jpg"},
  { id:33, name:"Heart Rate Monitoring System (Arduino)", price:3750, category:"Arduino Projects", img:"assets/stock_images/heart_rate_monitor_a_381aacd7.jpg"},
  { id:34, name:"Smart Door Lock System (Arduino)", price:3750, category:"Arduino Projects", img:"assets/stock_images/smart_door_lock_ardu_a80ab7d1.jpg"},
  { id:35, name:"Automatic Parking System (Arduino)", price:3750, category:"Arduino Projects", img:"assets/stock_images/automatic_parking_sy_3aa57a8e.jpg"},
  { id:36, name:"Automatic Roof Covering Using Rain Sensor (Arduino)", price:3850, category:"Arduino Projects", img:"assets/stock_images/automatic_roof_rain__8c35fa10.jpg"}
];

// DOM references
const grid = document.getElementById('products-grid');
const filters = Array.from(document.querySelectorAll('.filter'));
const searchInput = document.getElementById('search');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart');
const placeOrderBtn = document.getElementById('place-order');

let cart = JSON.parse(localStorage.getItem('aistemiq_cart') || '{}');

function saveCart(){ localStorage.setItem('aistemiq_cart', JSON.stringify(cart)); updateCartUI(); }
function addToCart(id){ cart[id] = (cart[id]||0) + 1; saveCart(); }
function removeFromCart(id){ delete cart[id]; saveCart(); }
function clearCart(){ cart = {}; saveCart(); }
function cartCount(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartTotal(){ let total = 0; Object.keys(cart).forEach(id=>{ const p = products.find(x=>x.id===+id); if(p) total += p.price * cart[id]; }); return total; }
function productById(id){ return products.find(p=>p.id===+id); }

function buildCard(p){
  const el = document.createElement('div'); el.className='card';
  el.innerHTML = `
    <img loading="lazy" src="${p.img}" alt="${escapeHtml(p.name)}" onerror="this.style.filter='grayscale(1)';this.style.opacity='0.9'">
    <div class="card-body">
      <h4>${escapeHtml(p.name)}</h4>
      <p class="desc">${escapeHtml(p.category)}</p>
      <div class="card-actions">
        <div class="price">₹${p.price}</div>
        <div style="margin-left:auto;display:flex;gap:8px">
          <button class="btn small ghost" data-id="${p.id}" data-action="add">Add to Cart</button>
          <button class="btn small primary" data-id="${p.id}" data-action="order">Place Order</button>
        </div>
      </div>
    </div>
  `;
  return el;
}

function renderGrid(list){
  grid.innerHTML='';
  if(!list.length){ grid.innerHTML='<div style="grid-column:1/-1;color:var(--muted);padding:20px">No products found</div>'; return; }
  list.forEach(p=> grid.appendChild(buildCard(p)));
}

function applyFilters(){
  const active = document.querySelector('.filter.active')?.dataset.cat || 'all';
  const q = (searchInput.value||'').trim().toLowerCase();
  let list = products.filter(p => active==='all' || p.category === active);
  if(q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  renderGrid(list);
}

// product button events (delegation)
grid.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const action = btn.getAttribute('data-action');
  const id = +btn.getAttribute('data-id');
  if(btn.classList.contains('primary')){ btn.classList.add('clicked'); setTimeout(()=>btn.classList.remove('clicked'), 600); }
  if(action==='add'){ addToCart(id); animateAdded(btn); }
  if(action==='order'){ openWhatsAppOrderSingle(id); }
});

filters.forEach(f=>{
  f.addEventListener('click', ()=>{
    filters.forEach(x=>x.classList.remove('active')); f.classList.add('active'); applyFilters();
  });
});
searchInput && searchInput.addEventListener('input', debounce(applyFilters, 220));

openCartBtn.addEventListener('click', ()=>cartDrawer.classList.add('open'));
closeCartBtn.addEventListener('click', ()=>cartDrawer.classList.remove('open'));
clearCartBtn.addEventListener('click', ()=>{ clearCart(); });

function updateCartUI(){
  cartCountEl.textContent = cartCount();
  cartItemsEl.innerHTML = '';
  const ids = Object.keys(cart).map(Number);
  if(ids.length===0){ cartItemsEl.innerHTML = '<div style="color:var(--muted);padding:12px">Cart empty</div>'; cartTotalEl.textContent='₹0'; return; }
  ids.forEach(id=>{
    const p = productById(id);
    if(!p) return;
    const qty = cart[id];
    const item = document.createElement('div'); item.className='cart-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${escapeHtml(p.name)}">
      <div style="flex:1">
        <div style="font-weight:700">${escapeHtml(p.name)}</div>
        <div style="color:var(--muted);font-size:13px">₹${p.price} × ${qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button class="btn small ghost" data-action="remove" data-id="${id}">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(item);
  });

  cartItemsEl.querySelectorAll('button[data-action="remove"]').forEach(b=>{
    b.addEventListener('click', ()=>{ removeFromCart(b.dataset.id); });
  });

  cartTotalEl.textContent = `₹${cartTotal()}`;
  cartCountEl.textContent = cartCount();
}

placeOrderBtn.addEventListener('click', ()=>{
  if(cartCount() === 0){ alert('Cart is empty — add at least one product.'); return; }
  const lines = ['Hi 👋 I want to order from AISTEMiQ:'];
  Object.keys(cart).forEach(id=>{
    const p = productById(id);
    if(!p) return;
    lines.push(`${cart[id]} × ${p.name} — ₹${p.price * cart[id]}`);
  });
  lines.push(`Total: ₹${cartTotal()}`);
  lines.push(`Contact: +${CONTACT_CALL}`);
  const text = encodeURIComponent(lines.join('\n'));
  const wa = `https://wa.me/${SELLER_WHATSAPP}?text=${text}`;
  window.open(wa, '_blank');
});

function openWhatsAppOrderSingle(id){
  const p = productById(id);
  const text = encodeURIComponent(`Hi 👋 I want to order: ${p.name} — ₹${p.price} (AISTEMiQ)`);
  const wa = `https://wa.me/${SELLER_WHATSAPP}?text=${text}`;
  window.open(wa, '_blank');
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function debounce(fn, t){ let z; return (...a)=>{ clearTimeout(z); z=setTimeout(()=>fn(...a),t) } }
function animateAdded(btn){ const original = btn.textContent; btn.textContent = 'Added'; setTimeout(()=> btn.textContent = original, 900); }

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  renderGrid(products);
  updateCartUI();

  // smooth scroll for nav links
  Array.from(document.querySelectorAll('.nav-link')).forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
/* =========================
   THEME TOGGLE: light | dark | neon
   ========================= */

(function(){
  const THEME_KEY = 'aistemiq_theme';
  const defaultTheme = 'dark'; // site default
  const body = document.body;
  const buttons = Array.from(document.querySelectorAll('.theme-btn'));

  function applyTheme(theme){
    // remove existing theme-* classes
    ['theme-light','theme-dark','theme-neon'].forEach(c => body.classList.remove(c));
    body.classList.add('theme-' + theme);

    // set active button
    buttons.forEach(btn => {
      const t = btn.dataset.theme;
      if(t === theme){ btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
      else { btn.classList.remove('active'); btn.setAttribute('aria-pressed', 'false'); }
    });

    // persist
    try { localStorage.setItem(THEME_KEY, theme); } catch(e){ /* ignore */ }
  }

  // init from storage
  const saved = (function(){
    try { return localStorage.getItem(THEME_KEY); } catch(e){ return null; }
  })();
  const initial = saved || defaultTheme;
  applyTheme(initial);

  // attach listeners
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });

  // Accessibility: allow keyboard on toggle (left/right)
  let idx = buttons.findIndex(b => b.classList.contains('active'));
  if(idx < 0) idx = 0;
  document.addEventListener('keydown', (e) => {
    if(document.activeElement && document.activeElement.classList.contains('theme-btn')) {
      if(e.key === 'ArrowRight'){ idx = (idx + 1) % buttons.length; buttons[idx].focus(); buttons[idx].click(); }
      if(e.key === 'ArrowLeft'){ idx = (idx - 1 + buttons.length) % buttons.length; buttons[idx].focus(); buttons[idx].click(); }
    }
  });
})();


