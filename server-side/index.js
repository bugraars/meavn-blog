const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

const blogRoutes = require('./routes/routesBlog/index');
const adminRoutes = require('./routes/routesAdmin/index.js');

app.use(cors());
const os = require('os');

// Bilgisayarın ağ bağlantılarını alın
const networkInterfaces = os.networkInterfaces();

// Tüm ağ bağlantılarını döngüye alın
Object.keys(networkInterfaces).forEach((interfaceName) => {
  const interface = networkInterfaces[interfaceName];
  
  // Her bir ağ bağlantısının IP adresini alın
  interface.forEach((ipInfo) => {
    if (ipInfo.family === 'IPv4' && !ipInfo.internal) {
      console.log(`Makina IP adresi: ${ipInfo.address}`);
    }
  });
});

app.use('/admin', adminRoutes);
app.use('/', blogRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
