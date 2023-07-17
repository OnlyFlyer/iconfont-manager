export enum VersionType {
  patch = 'z',
  minor = 'y',
  major = 'x'
};

export const VersionNameMap = {
  [VersionType.major]: 'major',
  [VersionType.minor]: 'minor',
  [VersionType.patch]: 'patch',
};

export const VersionNums = [VersionType.patch, VersionType.minor, VersionType.major];
