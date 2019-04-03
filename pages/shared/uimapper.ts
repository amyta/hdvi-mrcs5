class UI_Mapper {
  public qaUsername:string = 'qa.admin';
  public qaPassword:string = 'Qa.Admin1!';
  public qaPSRUser:string = 'qa.psruser';
  public unassignedChaseErrorMessage:string = 'You are not currently assigned to this Chase. Certain functions will not be available to you.';
  public readonlyText:string = 'Readonly View';

  public standardPause:number = 5000;
  public oneMinute:number = 60000;

  public get loadingSpinnerIcon() { return $('.ui-table-loading-icon')}
  public get bigSpinnerIcon() { return $('.loader')}
}

const UIMapper = new UI_Mapper()
export default UIMapper