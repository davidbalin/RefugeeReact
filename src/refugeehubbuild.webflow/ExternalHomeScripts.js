// import React, { useEffect } from 'react';

// const ExternalHomeScripts = () => {
//   useEffect(() => {
//     // Code to load external scripts
//     const script1 = document.createElement('script');
//     script1.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
//     script1.type = 'text/javascript';
//     script1.async = true; // Add async attribute to allow scripts to load asynchronously

//     script1.onload = () => {
//       // Code to execute after script1 has finished loading
//       const script2 = document.createElement('script');
//       script2.innerHTML = `WebFont.load({ google: { families: ["Inter:regular,500,600,700,800,900"] }});`;
//       document.body.appendChild(script2);

//       const script3 = document.createElement('script');
//       script3.innerHTML = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;
//       document.body.appendChild(script3);
//     };

//     document.body.appendChild(script1);

//     // Cleanup function to remove the scripts when the component unmounts
//     return () => {
//       document.body.removeChild(script1);
//     };
//   }, []);

//   return null; // You can return null since this component doesn't render anything
// };

// export default ExternalHomeScripts;

import React, { useEffect } from 'react';

const ExternalHomeScripts = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ExternalHomeScripts; 
