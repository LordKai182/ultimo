module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: "com.cinecoqui.app",
                productName: "sagDesktop",
                win: {

                    target: [{
                        target: "nsis",
                        arch: ["x64", "ia32"]
                    }]
                },
                nsis: {
                    oneClick: false,
                    perMachine: true,
                    allowToChangeInstallationDirectory: true
                },
                publish: [{
                    provider: "github",
                    owner: "LordKai182",
                    repo: "https://github.com/LordKai182/ultimo.git",
                    token: "c99d27ba417f4c2b715f397a7d77fe238db35f13",
                    releaseType: "draft",
                    channel: "latest",
                    protocol: "https",
                    url: "cinecoqui.chrismichael.now.sh"
                }]
            }
        }
    }
}