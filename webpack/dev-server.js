import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.development';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    filename: config.output.filename,
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
    }
}).listen(3000, '0.0.0.0', function(err){
    if (err) {
        console.error(err);
    } else {
        console.log('webpack dev server listening on frontend:3000');
    }
});
