import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b0f3845d9ff24d20b3f66227dce3cbc1'
    }
})