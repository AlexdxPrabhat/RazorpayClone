import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  // Remove tailwindcss from plugins
  server: {
    host: '0.0.0.0',  // Allow external network access
    port: 3000         // You can change the port if needed
  }

  
});


/*server: {
    host: '0.0.0.0',  // Allow external network access
    port: 3000         // You can change the port if needed
  }
  */