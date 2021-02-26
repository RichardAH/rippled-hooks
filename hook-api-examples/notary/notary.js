const process = require('process')
const RippleAPI = require('ripple-lib').RippleAPI;
const fs = require('fs');
const api = new RippleAPI({server: 'ws://localhost:6005'});

api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});
api.on('connected', () => {
  console.log('connected');
});
api.on('disconnected', (code) => {
  console.log('disconnected, code:', code);
});
api.connect().then(() => {
/*
 * Address
 *  rGGLq3bp1oMjzFwwXnt3kMVtqgKpcue957
 * Secret
 *  ssxdewtczG1DU63wWHfEJ4q5a6Dik
 */
    var activate = {
        Account: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        TransactionType: "Payment",
        Amount: "10000000000", // 1000 XRP
        Destination: "rGGLq3bp1oMjzFwwXnt3kMVtqgKpcue957",
        Fee: "100000"
    }


    let s1activate = {
        Account: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        Destination: 'rJVmjaBshq7jDBLtHvN2D4juayqr6Nk7HL',
        TransactionType: "Payment",
        Amount: "10000000000", // 1000 XRP
        Fee: "100000"
    };

    let s2activate = {
        Account: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        Destination: 'rJU4PWvRQBnoDdscWvpWrAqGogmtfk3RXM',
        TransactionType: "Payment",
        Amount: "10000000000", // 1000 XRP
        Fee: "100000"
    };

    let s3activate = {
        Account: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        Destination: 'rEYgKBLzjyJXEcBPGNiB739b7xKS2Xkwew',
        TransactionType: "Payment",
        Amount: "10000000000", // 1000 XRP
        Fee: "100000"
    };

    api.prepareTransaction(s1activate).then((x)=> 
    {
        s = api.sign(x.txJSON, 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb')
        console.log(s)
        api.submit(s.signedTransaction).then( response => {
            console.log(response.resultCode, response.resultMessage);
       
    api.prepareTransaction(s2activate).then((x)=> 
    {
        s = api.sign(x.txJSON, 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb')
        console.log(s)
        api.submit(s.signedTransaction).then( response => {
            console.log(response.resultCode, response.resultMessage);
    
    api.prepareTransaction(s3activate).then((x)=> 
    {
        s = api.sign(x.txJSON, 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb')
        console.log(s)
        api.submit(s.signedTransaction).then( response => {
            console.log(response.resultCode, response.resultMessage);

        api.prepareTransaction(activate).then((x)=> 
        {
            s = api.sign(x.txJSON, 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb')
            console.log(s)
            api.submit(s.signedTransaction).then( response => {
                console.log(response.resultCode, response.resultMessage);
            
                // set signer list 
                s = {
                    Account: 'rGGLq3bp1oMjzFwwXnt3kMVtqgKpcue957',
                    Flags: 0,
                    TransactionType: "SignerListSet",
                    SignerQuorum: 3,
                    SignerEntries: [
                        {
                            SignerEntry: {
                                Account: 'rJVmjaBshq7jDBLtHvN2D4juayqr6Nk7HL',
                                SignerWeight: 1
                            }
                        },
                        {
                            SignerEntry: {
                                Account: 'rJU4PWvRQBnoDdscWvpWrAqGogmtfk3RXM',
                                SignerWeight: 1
                            }
                        },
                        {
                            SignerEntry: {
                                Account: 'rEYgKBLzjyJXEcBPGNiB739b7xKS2Xkwew',
                                SignerWeight: 1
                            }
                        }
                    ]
                };

                api.prepareTransaction(s).then((x)=>{
                    s = api.sign(x.txJSON, 'ssxdewtczG1DU63wWHfEJ4q5a6Dik')
                    console.log(s)
                    api.submit(s.signedTransaction).then( response => {
                        console.log(response.resultCode, response.resultMessage);
                        binary = fs.readFileSync('notary.wasm').toString('hex').toUpperCase();
                        j = {
                            Account: 'rGGLq3bp1oMjzFwwXnt3kMVtqgKpcue957',
                            TransactionType: "SetHook",
                            CreateCode: binary,
                            HookOn: '0000000000000000'
                        }
                        api.prepareTransaction(j).then((x)=> 
                        {
                            s = api.sign(x.txJSON, 'ssxdewtczG1DU63wWHfEJ4q5a6Dik')
                            console.log(s)
                            api.submit(s.signedTransaction).then( response => {
                                console.log(response.resultCode, response.resultMessage);
                                console.log("Done!")
                                process.exit() 
                            }).catch ( e=> { console.log(e) });
                        });
                    }).catch ( e=> { console.log(e) });
                });
            }).catch (e=> { console.log(e) });
        });
            }).catch (e=> { console.log(e) });
        });
            }).catch (e=> { console.log(e) });
        });
            }).catch (e=> { console.log(e) });
        });


}).then(() => {
 // return api.disconnect();
}).catch(console.error);
