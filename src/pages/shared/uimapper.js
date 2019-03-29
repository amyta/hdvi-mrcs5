"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UI_Mapper {
    constructor() {
        this.qaUsername = 'qa.admin';
        this.qaPassword = 'Qa.Admin1!';
        this.qaPSRUser = 'qa.psruser';
    }
    get loadingSpinnerIcon() { return $('.ui-table-loading-icon'); }
    get bigSpinnerIcon() { return $('.loader'); }
}
const UIMapper = new UI_Mapper();
exports.default = UIMapper;
