import { Observable } from 'tns-core-modules/data/observable';
import { IosUuid } from 'nativescript-ios-uuid';

export class HelloWorldModel extends Observable {
  public uuid: string;
  private iosUuid: IosUuid;

  constructor() {
    super();
    this.uuid = IosUuid.getUUID();
  }
}
