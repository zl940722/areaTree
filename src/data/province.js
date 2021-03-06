const provinces = [
    {
        'code': '110000',
        'parentCode': '',
        'id': 110000,
        'name': '北京市',
        'idPath': '110000',
        'namePath': '北京市',
    },
    {
        'code': '120000',
        'parentCode': '',
        'id': 120000,
        'name': '天津市',
        'idPath': '120000',
        'namePath': '天津市',
    },
    {
        'code': '130000',
        'parentCode': '',
        'id': 130000,
        'name': '河北省',
        'idPath': '130000',
        'namePath': '河北省',
    },
    {
        'code': '140000',
        'parentCode': '',
        'id': 140000,
        'name': '山西省',
        'idPath': '140000',
        'namePath': '山西省',
    },
    {
        'code': '150000',
        'parentCode': '',
        'id': 150000,
        'name': '内蒙古自治区',
        'idPath': '150000',
        'namePath': '内蒙古自治区',
    },
    {
        'code': '210000',
        'parentCode': '',
        'id': 210000,
        'name': '辽宁省',
        'idPath': '210000',
        'namePath': '辽宁省',
    },
    {
        'code': '220000',
        'parentCode': '',
        'id': 220000,
        'name': '吉林省',
        'idPath': '220000',
        'namePath': '吉林省',
    },
    {
        'code': '230000',
        'parentCode': '',
        'id': 230000,
        'name': '黑龙江省',
        'idPath': '230000',
        'namePath': '黑龙江省',
    },
    {
        'code': '310000',
        'parentCode': '',
        'id': 310000,
        'name': '上海市',
        'idPath': '310000',
        'namePath': '上海市',
    },
    {
        'code': '320000',
        'parentCode': '',
        'id': 320000,
        'name': '江苏省',
        'idPath': '320000',
        'namePath': '江苏省',
    },
    {
        'code': '330000',
        'parentCode': '',
        'id': 330000,
        'name': '浙江省',
        'idPath': '330000',
        'namePath': '浙江省',
    },
    {
        'code': '340000',
        'parentCode': '',
        'id': 340000,
        'name': '安徽省',
        'idPath': '340000',
        'namePath': '安徽省',
    },
    {
        'code': '350000',
        'parentCode': '',
        'id': 350000,
        'name': '福建省',
        'idPath': '350000',
        'namePath': '福建省',
    },
    {
        'code': '360000',
        'parentCode': '',
        'id': 360000,
        'name': '江西省',
        'idPath': '360000',
        'namePath': '江西省',
    },
    {
        'code': '370000',
        'parentCode': '',
        'id': 370000,
        'name': '山东省',
        'idPath': '370000',
        'namePath': '山东省',
    },
    {
        'code': '410000',
        'parentCode': '',
        'id': 410000,
        'name': '河南省',
        'idPath': '410000',
        'namePath': '河南省',
    },
    {
        'code': '420000',
        'parentCode': '',
        'id': 420000,
        'name': '湖北省',
        'idPath': '420000',
        'namePath': '湖北省',
    },
    {
        'code': '430000',
        'parentCode': '',
        'id': 430000,
        'name': '湖南省',
        'idPath': '430000',
        'namePath': '湖南省',
    },
    {
        'code': '440000',
        'parentCode': '',
        'id': 440000,
        'name': '广东省',
        'idPath': '440000',
        'namePath': '广东省',
    },
    {
        'code': '450000',
        'parentCode': '',
        'id': 450000,
        'name': '广西壮族自治区',
        'idPath': '450000',
        'namePath': '广西壮族自治区',
    },
    {
        'code': '460000',
        'parentCode': '',
        'id': 460000,
        'name': '海南省',
        'idPath': '460000',
        'namePath': '海南省',
    },
    {
        'code': '500000',
        'parentCode': '',
        'id': 500000,
        'name': '重庆市',
        'idPath': '500000',
        'namePath': '重庆市',
    },
    {
        'code': '510000',
        'parentCode': '',
        'id': 510000,
        'name': '四川省',
        'idPath': '510000',
        'namePath': '四川省',
    },
    {
        'code': '520000',
        'parentCode': '',
        'id': 520000,
        'name': '贵州省',
        'idPath': '520000',
        'namePath': '贵州省',
    },
    {
        'code': '530000',
        'parentCode': '',
        'id': 530000,
        'name': '云南省',
        'idPath': '530000',
        'namePath': '云南省',
    },
    {
        'code': '540000',
        'parentCode': '',
        'id': 540000,
        'name': '西藏自治区',
        'idPath': '540000',
        'namePath': '西藏自治区',
    },
    {
        'code': '610000',
        'parentCode': '',
        'id': 610000,
        'name': '陕西省',
        'idPath': '610000',
        'namePath': '陕西省',
    },
    {
        'code': '620000',
        'parentCode': '',
        'id': 620000,
        'name': '甘肃省',
        'idPath': '620000',
        'namePath': '甘肃省',
    },
    {
        'code': '630000',
        'parentCode': '',
        'id': 630000,
        'name': '青海省',
        'idPath': '630000',
        'namePath': '青海省',
    },
    {
        'code': '640000',
        'parentCode': '',
        'id': 640000,
        'name': '宁夏回族自治区',
        'idPath': '640000',
        'namePath': '宁夏回族自治区',
    },
    {
        'code': '650000',
        'parentCode': '',
        'id': 650000,
        'name': '新疆维吾尔自治区',
        'idPath': '650000',
        'namePath': '新疆维吾尔自治区',
    },
    {
        'code': '710000',
        'parentCode': '',
        'id': 710000,
        'name': '台湾省',
        'idPath': '710000',
        'namePath': '台湾省',
    },
    {
        'code': '810000',
        'parentCode': '',
        'id': 810000,
        'name': '香港特别行政区',
        'idPath': '810000',
        'namePath': '香港特别行政区',
    },
    {
        'code': '820000',
        'parentCode': '',
        'id': 820000,
        'name': '澳门特别行政区',
        'idPath': '820000',
        'namePath': '澳门特别行政区',
    },
];


const _ = require('lodash');

const bb = _.map(provinces, (value, key) => {
    const { code, name, parentCode , idPath ,namePath  } = value;
    return {
        code: _.toInteger(code),
        parentCode,
        id: _.toInteger(code),
        pId: _.toInteger(parentCode),
        name,
        idPath: _.toInteger(idPath),
        namePath,
    };
});

const province = JSON.stringify(bb, null, 2)
// console.log(province)

module.exports = province;