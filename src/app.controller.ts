import {Get, Controller, Post , Param} from '@nestjs/common';
import {AppService} from './app.service';
import {VersionVo} from './model/versionVo';
import {AreaTreeVo} from './model/areaTreeVo';
import {AreaVo} from './model/areaVo';

@Controller('/api')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/area/version')
    getVersion(): VersionVo {
        return AppService.getVersion();
    }

    @Get('/area/tree')
    getAreaTree(): AreaTreeVo[] {
        return AppService.getAreaTree();
    }

    @Get('/area/atree')
    getAMAreaTree(): AreaTreeVo[] {
        return AppService.getAMAreaTree();
    }

    @Get('/area/plain')
    getAreaPlain(): AreaTreeVo[] {
        return AppService.getAreaPlain();
    }

    @Get('/area/tree/:id')
    getAreaTreeById(@Param('id') id): AreaTreeVo[] {
        return AppService.getAreaTreeById(`${id}`);
    }

    //
    // @Get("/area/version")
    // static getAreaPlain(): AreaVo[] {
    //   return AppService.getAreaPlain();
    // }

    // @Post("/area/version")
    // static addAreaPlain(): AreaVo {
    //   return AppService.addAreaPlain();
    // }
    //
    // @Get("/area/version")
    // static getAreaPlainById(): AreaVo {
    //   return AppService.getAreaPlainById();
    // }
    //
    // @Get("/area/version")
    // static getAreaTreeById(): AreaTreeVo {
    //   return AppService.getAreaTreeById();
    // }
    //
    // @Get("/area/version")
    // static getAreaPlainByPId(): AreaVo {
    //   return AppService.getAreaPlainByPId();
    // }
    //
    // @Get("/area/version")
    // static getAreaTreeByPId(): AreaTreeVo {
    //   return AppService.getAreaTreeByPId();
    // }
}
