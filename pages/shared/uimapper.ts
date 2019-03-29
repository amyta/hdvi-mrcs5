class UI_Mapper {
  qaUsername:string = 'qa.admin';
  qaPassword:string = 'Qa.Admin1!';
  qaPSRUser:string = 'qa.psruser';
  standardPause:number = 3000;

  public get loadingSpinnerIcon() { return $('.ui-table-loading-icon')}
  public get bigSpinnerIcon() { return $('.loader')}
}

const UIMapper = new UI_Mapper()
export default UIMapper