import {Injectable} from '@nestjs/common';
import {VersionVo} from './model/versionVo';
import {AreaTreeVo} from './model/areaTreeVo';
import {AreaVo} from './model/areaVo';
import cnP = require('./data/cnP.js');
import cnT = require('./data/cnT.js');
import amT = require('./data/amT.js');
import _ = require('lodash');

@Injectable()
export class AppService {

    private static version = 1;

    static getVersion(): VersionVo {
        return {
            version: AppService.version,
        };
    }

    static getAreaTree(version: number = AppService.version): AreaVo[] {
        return JSON.parse(cnT);
    }

    static getAreaPlain(version: number  = AppService.version): AreaVo[] {
        return JSON.parse(cnP);
    }

    static getAMAreaTree(version: number  = AppService.version): AreaVo[] {
        return JSON.parse(amT);
    }

    static getAreaTreeById(id: string): AreaVo[] {
        const cnTree = JSON.parse(cnT);
        const cnTreeById = _.filter(cnTree , (o: any) => {
            return o.id === _.toInteger(id);
        });
        const cnTreeById2 = _.filter(cnTree.children , (o: any) => {
            return o.id === _.toInteger(id);
        });
        return cnTreeById || cnTreeById2;
    }
    //
    // static addAreaPlain(areaVo: AreaVo): AreaVo {
    //   return 'Hello World!';
    // }
    //
    // static getAreaPlainById(id: string): AreaVo {
    //   return 'Hello World!';
    // }
    //
    //
    // static getAreaPlainByPId(pId: string): AreaVo {
    //   return 'Hello World!';
    // }
    //
}
