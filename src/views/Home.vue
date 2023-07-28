<template>

</template>

<script>
export default {
    name: '',
    data() {
        return {
            list: [{
                    dictvalue: 1,
                    dictLabel: "a1",
                    children: [{
                            dictvalue: 4,
                            dictLabel: "a2",
                        },
                        {
                            dictvalue: 5,
                            dictLabel: "a3",
                            children: [{
                                    dictvalue: 7,
                                    dictLabel: "a4",
                                },
                                {
                                    dictvalue: 8,
                                    dictLabel: "a5",
                                    children: [{
                                            dictvalue: 11,
                                            dictLabel: "a6",
                                        },
                                        {
                                            dictvalue: 10,
                                            dictLabel: "a7",
                                        },
                                    ],
                                },
                                {
                                    dictvalue: 9,
                                    dictLabel: "a8",
                                },
                            ],
                        },
                    ],
                },
                {
                    dictvalue: 2,
                    dictLabel: "a9",
                },
                {
                    dictvalue: 3,
                    dictLabel: "a10",
                    children: [{
                        dictvalue: 6,
                        dictLabel: "a11",
                        children: [{
                            dictvalue: 12,
                            dictLabel: "a12",
                        }, ],
                    }, ],
                },
            ]
        }
    },
    methods: {
        getTreeName(list, id) {
            let _this = this;
            let str = "";
            for (let i = 0; i < list.length; i++) {
                let a = list[i];

                if (a.dictvalue === id) {
                    str += a.dictLabel
                    return str;
                } else {
                    if (a.children && a.children.length > 0) {
                        str += a.dictLabel + "/";
                        let res = _this.getTreeName(a.children, id);
                        if (res) {
                            
                            str += res
                            return str;
                        }
                    }
                }
            }
        }
    },
    mounted(){
        
       let res = this.getTreeName(this.list,12)
       console.log(res)
    }
}
</script>

<style lang="" scoped>

</style>
