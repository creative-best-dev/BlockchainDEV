import './app/styles/index.scss';

import { ReactLenis } from '@studio-freight/react-lenis';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App.tsx';
import { MediaQueryProvider } from '@/app/poviders/MediaQueryProvider';
import { ThemeProvider } from '@/app/poviders/ThemeProvider';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(
   <StrictMode>
      <BrowserRouter>
         <MediaQueryProvider>
            <ThemeProvider>
               <ReactLenis root>
                  <App />
               </ReactLenis>
            </ThemeProvider>
         </MediaQueryProvider>
      </BrowserRouter>
   </StrictMode>,
);
