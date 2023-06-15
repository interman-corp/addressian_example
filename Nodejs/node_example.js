const axios = require('axios'); // Axiosライブラリを必要とします。

const apiKey = 'YOUR_API_KEY';
const address1 = "港区芝大門一丁目一〇番一八号 PMO芝大門3階";
const address2 = "鹿児島市中央町10-6F";
const url = "https://s32y6jl1f8.execute-api.ap-northeast-1.amazonaws.com/api/address_normalizer";
const headers = {"Content-Type": "application/json", "x-api-key": apiKey};
const body = [{address: address1}, {address: address2}];

axios.post(url, body, {headers: headers})
    .then(response => {
        console.log(response.data);

        let items = response.data.items;
        for (let i = 0; i < items.length; i++) {
            console.log("\n郵便番号: " + items[i].zip_code);
            console.log("正規化後住所: " + items[i].normalized_address_type2);
            console.log("建物名: " + items[i].building);
        }
    })
    .catch(error => {
        console.error(error);
    });
