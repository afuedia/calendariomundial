// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://calendario-mundial.netlify.app/", //poner aquí el dominio
  image: {
    responsiveStyles: true,        
    layout: 'constrained'
  },
});
