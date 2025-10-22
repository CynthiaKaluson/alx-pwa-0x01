const fs = require('fs');
const { createCanvas } = require('canvas');

// Create icons directory if it doesn't exist
if (!fs.existsSync('public/icons')) {
  fs.mkdirSync('public/icons', { recursive: true });
}

// Icon sizes and names
const icons = [
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'apple-icon-152x152.png', size: 152 },
  { name: 'ms-icon-310x310.png', size: 310 }
];

icons.forEach(icon => {
  const canvas = createCanvas(icon.size, icon.size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#0070f3';
  ctx.fillRect(0, 0, icon.size, icon.size);
  
  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${icon.size / 5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cine', icon.size / 2, icon.size / 2 - icon.size / 10);
  ctx.fillText('Seek', icon.size / 2, icon.size / 2 + icon.size / 10);
  
  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/icons/${icon.name}`, buffer);
  console.log(`Created: public/icons/${icon.name}`);
});

console.log('All placeholder icons generated!');
