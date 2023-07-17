"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNums = exports.VersionNameMap = exports.VersionType = void 0;
var VersionType;
(function (VersionType) {
    VersionType["patch"] = "z";
    VersionType["minor"] = "y";
    VersionType["major"] = "x";
})(VersionType || (exports.VersionType = VersionType = {}));
;
exports.VersionNameMap = {
    [VersionType.major]: 'major',
    [VersionType.minor]: 'minor',
    [VersionType.patch]: 'patch',
};
exports.VersionNums = [VersionType.patch, VersionType.minor, VersionType.major];
