// import Enum from 'enum';

const config = {
    apis: {
    },
    apiRoot: ''
};
config.setRoot = root => {
    if (process.env.NODE_ENV !== 'production') {
        config.apiRoot = root;
        config.apis.forEach(value => {
            config.apis[value] = `${root}${value}`;
        });
    }
};

// config.setRoot('http://p3.thedoc.cn');

export default config;
