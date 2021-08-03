import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'

import postRoutes from './routes/post.routes'

export default class App {
    private app: Application;

    constructor(private port?: string | number) {
        this.app = express();
        this.setting();
        this.middleware();
        this.route();
        this.staticFiles();
    }

    private middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private setting() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    private route() {
        this.app.use('/api/posts/', postRoutes);
    }

    private staticFiles() {
        this.app.use(express.static(path.join(__dirname, 'build')));
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}