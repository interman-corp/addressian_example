function myFunction() {
    // APIキー
    const apiKey = 'YOUR_API_KEY';

    // 正規化したい住所
    const address1 = "港区芝大門一丁目一〇番一八号 PMO芝大門3階";
    const address2 = "鹿児島市中央町10-6F";

    // 住所正規化APIのURL
    const url = "https://s32y6jl1f8.execute-api.ap-northeast-1.amazonaws.com/api/address_normalizer";

    // リクエストヘッダー（POSTで送信、JSON形式、APIキー）
    const headers = {"Content-Type": "application/json", "x-api-key": apiKey};

    // リクエストボディ（住所リスト）
    const body = JSON.stringify([{"address": address1}, {"address": address2}]);

    // API呼び出し
    const response = UrlFetchApp.fetch(url, {
        method: 'post',
        headers: headers,
        payload: body,
        muteHttpExceptions: true
    });

    // 結果表示
    Logger.log(response.getContentText());

    // 結果をJSON形式で取得
    const result = JSON.parse(response.getContentText());

    // 正規化された住所を表示
    for (let i = 0; i < result.items.length; i++) {
        Logger.log("郵便番号: " + result.items[i].zip_code);
        Logger.log("正規化後住所: " + result.items[i].normalized_address_type2);
        Logger.log("建物名: " + result.items[i].building);
    }
}
