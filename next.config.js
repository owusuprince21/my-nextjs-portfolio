/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            'res.cloudinary.com',
            'imbo.vgc.no',
            'imageio.forbes.com',
            'phantom-elmundo.unidadeditorial.es',
            'biztoc.com',
            'media.drive.com.au', 
            'wm.observador.pt',
            'cleantechnica.com',
            'image.cnbcfm.com',
            'cdn.mos.cms.futurecdn.net',
            'images.aftonbladet-cdn.se',
            'cdn.vox-cdn.com'
            

        ],
        
    }
}
// next.config.js

// module.exports = {
//     images: {
//         domains: ['imbo.vgc.no'], // Add the hostname of the external image
//     },
// };

module.exports = nextConfig
