const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? '/next-demo/' : '',
    images: {
        loader: 'akamai',
        path: '',
    },
}