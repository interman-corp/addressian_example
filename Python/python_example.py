import requests
import json

# APIキー
api_key = 'YOUR_API_KEY'

# 正規化したい住所
address1 = "港区芝大門一丁目一〇番一八号 PMO芝大門3階"
address2 = "鹿児島市中央町10-6F"

# 住所正規化APIのURL
url = (
    "https://s32y6jl1f8.execute-api.ap-northeast-1.amazonaws.com/api/address_normalizer"
)

# リクエストヘッダー（POSTで送信、JSON形式、APIキー）
headers = {"Content-Type": "application/json", "x-api-key": api_key}

# リクエストボディ（住所リスト）
body = [{"address": address1}, {"address": address2}]

# API呼び出し
response = requests.post(url, headers=headers, data=json.dumps(body))

# 結果全体を表示
print(response.text)

# 結果をJSON形式で取得
result = response.json()

# 正規化された住所を表示
for address in result["items"]:
    print("\n郵便番号: {}".format(address["zip_code"]))
    print("正規化後住所: {}".format(address["normalized_address_type2"]))
    print("建物名: {}".format(address["building"]))
