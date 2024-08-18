const assetsWhiteList = ["FET", "RENDER", "ZEC", "XVG", "FTT", "CRV", "XRP", "BTC", "SOL", "ETH", "LTC", "TRX", "TON", "AAVE", "ADA", "BCH", "NEAR", "MNT", "OP", "MANTA", "BEAMX", "ICP", "STORJ", "ETC", "LINK", "DGB", "DOGE", "BURGER", "UNI", "DOT", "AVAX", "FIL", "EVER", "USTC", "LUNA", "LUNC", "SUSHI", "ZRX", "MATIC", "XLM", "ATOM", "SAND", "MANA", "DASH", "BNB", "CAKE", "EOS", "BAT", "USDC", "TUSD"];

const whiteListEnabled = false;
const assetsSet = new Set(assetsWhiteList);

function isAssetInWhiteList(asset) {
    if(!whiteListEnabled) {
        return true;
    }

    return assetsSet.has(asset);
}
