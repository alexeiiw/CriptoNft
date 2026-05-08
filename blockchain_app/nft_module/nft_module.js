const { BaseModule } = require('lisk-sdk');
const CreateNFTAsset = require('./transactions/create_nft_asset');
const PurchaseNFTAsset = require('./transactions/purchase_nft_asset');
const TransferNFTAsset = require('./transactions/transfer_nft_asset');
const { getAllNFTTokensAsJSON } = require('./nft');

class NFTModule extends BaseModule {
    name = 'nft';
    id = 1024;
    accountSchema = {
        type: 'object',
        properties: {
            ownNFTs: {
                fieldNumber: 1,
                type: 'array',
                items: {
                    dataType: 'bytes',
                },
            },
        },
        default: {
            ownNFTs: [],
        },
    };
    transactionAssets = [
        new CreateNFTAsset(),
        new PurchaseNFTAsset(),
        new TransferNFTAsset(),
    ];
    actions = {
        getAllNFTTokens: async (context) => {
            return getAllNFTTokensAsJSON(context.dataAccess);
        },
    };
}

module.exports = { NFTModule };
