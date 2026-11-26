const fs = require('fs');
for (const f of ['game-asesmen.html', 'pages/game-asesmen.html']) {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<script>([\s\S]*)<\/script>/);
  let status = 'OK';
  try { new Function(m[1]); } catch (e) { status = 'ERROR: ' + e.message; }
  console.log('== ' + f, '| JS:', status);
  console.log('   H/GY:', /H = (\d+), GY = (\d+)/.exec(c).slice(1).join('/'),
    '| skala seragam:', c.includes('Math.min(cv.width / W, cv.height / H)'),
    '| dpr:', c.includes('devicePixelRatio'));
  console.log('   bulan pakai cam:', c.includes('mx = 620 - cam'), '| letterbox:', c.includes('#3B1D7A'));
}
