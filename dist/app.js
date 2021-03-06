"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _app, _httpServer, _cors, _Mongo, _jsonParser, _urlencodedParser, _dotenv, _port, _expressHandlebars;
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("./plugin/passport"));
const mongoose_1 = __importDefault(require("./plugin/mongoose"));
const module_alias_1 = __importDefault(require("module-alias"));
const passport_2 = require("./plugin/passport");
//every push and build == true
//offline == false
const isProd = true;
if (isProd) {
    module_alias_1.default.addAliases({
        "@": path_1.default.join(__dirname, '/../dist')
    });
}
else {
    module_alias_1.default.addAliases({
        "@": path_1.default.join(__dirname, '/../src')
    });
}
class App {
    //  #corsOptions!: any
    constructor() {
        _app.set(this, void 0);
        _httpServer.set(this, void 0);
        _cors.set(this, void 0);
        _Mongo.set(this, void 0);
        _jsonParser.set(this, void 0);
        _urlencodedParser.set(this, void 0);
        _dotenv.set(this, void 0);
        _port.set(this, void 0);
        _expressHandlebars.set(this, void 0);
        this.initialize();
        this.createApp();
        this.middleware();
        this.createPage();
        this.createRouter();
        this.createServer();
        this.listen();
    }
    initialize() {
        __classPrivateFieldSet(this, _app, express_1.default());
        __classPrivateFieldSet(this, _cors, cors_1.default);
        __classPrivateFieldSet(this, _Mongo, new mongoose_1.default());
        __classPrivateFieldSet(this, _jsonParser, body_parser_1.default.json({ limit: '50mb' }));
        __classPrivateFieldSet(this, _urlencodedParser, body_parser_1.default.urlencoded({ limit: '50mb', extended: false }));
        __classPrivateFieldSet(this, _dotenv, dotenv_1.default);
        __classPrivateFieldSet(this, _port, App.PORT);
        __classPrivateFieldSet(this, _expressHandlebars, express_handlebars_1.default);
    }
    createApp() {
        __classPrivateFieldGet(this, _dotenv).config({ path: '.env' });
        __classPrivateFieldGet(this, _Mongo).connect();
    }
    middleware() {
        __classPrivateFieldGet(this, _app).use(__classPrivateFieldGet(this, _cors).call(this));
        __classPrivateFieldGet(this, _app).use(__classPrivateFieldGet(this, _jsonParser));
        __classPrivateFieldGet(this, _app).use(__classPrivateFieldGet(this, _urlencodedParser));
        __classPrivateFieldGet(this, _app).use(express_1.default.static('public'));
        __classPrivateFieldGet(this, _app).engine('handlebars', __classPrivateFieldGet(this, _expressHandlebars).call(this));
        __classPrivateFieldGet(this, _app).set('view engine', 'handlebars');
        __classPrivateFieldGet(this, _app).use(passport_1.default.initialize());
    }
    createPage() {
        __classPrivateFieldGet(this, _app).get('/admin-login', (req, res) => {
            res.render('admin-login', { layout: false });
        });
    }
    createRouter() {
        const authPath = __dirname + '/admin/apis/rest/auth/';
        fs_1.default.readdirSync(authPath).map((file) => {
            const route = './admin/apis/rest/auth/' + file;
            __classPrivateFieldGet(this, _app).use('/auth/api', require(route).default);
        });
        const routePath = __dirname + '/client/apis/rest/routes/';
        fs_1.default.readdirSync(routePath).map((file) => {
            const route = './client/apis/rest/routes/' + file;
            __classPrivateFieldGet(this, _app).use('/client/api', require(route).default);
        });
        const routePaths = __dirname + '/admin/apis/rest/routes/';
        fs_1.default.readdirSync(routePaths).map((file) => {
            const route = './admin/apis/rest/routes/' + file;
            __classPrivateFieldGet(this, _app).use('/admin/api', passport_2.isAuth, require(route).default);
        });
    }
    createServer() {
        __classPrivateFieldSet(this, _httpServer, http_1.default.createServer(__classPrivateFieldGet(this, _app)));
    }
    listen() {
        __classPrivateFieldGet(this, _httpServer).listen(__classPrivateFieldGet(this, _port), () => {
            console.log('Http is running at port: ' + __classPrivateFieldGet(this, _port));
        });
    }
}
_app = new WeakMap(), _httpServer = new WeakMap(), _cors = new WeakMap(), _Mongo = new WeakMap(), _jsonParser = new WeakMap(), _urlencodedParser = new WeakMap(), _dotenv = new WeakMap(), _port = new WeakMap(), _expressHandlebars = new WeakMap();
App.PORT = process.env.PORT || 3000;
// tslint:disable-next-line:no-unused-expression
new App();
