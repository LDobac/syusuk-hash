// 슈 : 15
// 슉 : 20
// . : 40
// 시 : 16
// 시발럼아 : 10
// 공백 : 3

const syusukField = [
    "슈",
    "슉",
    "슈슉",
    ".",
    "시",
    "시발럼아",
    " ",
];

const SyusukApp = {
    data()
    {
        return {
            plainText : "가나다",
        }
    },
    computed : {
        hashedPlainText() {
            const libHashed = (new Hashes.SHA512).hex(this.plainText);
            
            let hashed = "";
            for (const index in libHashed)
            {
                const syusukIndex = libHashed.charCodeAt(index) % syusukField.length;
                hashed += syusukField[syusukIndex];
            }

            return hashed;
        }
    }
};

Vue.createApp(SyusukApp).mount("#app");