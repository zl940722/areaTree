/**
 * es-area-api
 * Company related APIs of r2 SaaS System.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class VersionVo {
    'version': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return VersionVo.attributeTypeMap;
    }
}
