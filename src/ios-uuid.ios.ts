import { Common } from './ios-uuid.common';
import { ios } from 'tns-core-modules/utils/utils';

export class IosUuid extends Common {
  public static getUUID(): string {
  let mainBundle = ios.getter(NSBundle, NSBundle.mainBundle);
  let appName = mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
  let strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
  if (!strApplicationUUID) {
    let currentDevice = ios.getter(UIDevice, UIDevice.currentDevice);
    strApplicationUUID = currentDevice.identifierForVendor.UUIDString;
    SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
  }

  return strApplicationUUID;
}
}
