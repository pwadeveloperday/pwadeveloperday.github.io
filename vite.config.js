import { sveltekit } from '@sveltejs/kit/vite'
import fs from 'fs';

/** @type {import('vite').UserConfig} **/
const config = {
	server: {
    https: {
      key: fs.readFileSync('cert/webmlmeet.key'),
      cert: fs.readFileSync('cert/webmlmeet.crt'),
    },
  },
	plugins: [sveltekit()],
};

export default config