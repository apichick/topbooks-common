/*jshint esversion: 6 */

import apickli from 'apickli';
import {
    defineSupportCode
} from 'cucumber';

defineSupportCode(function ({
    Before
}) {

    Before(function () {
        this.apickli = new apickli.Apickli(this.parameters.scheme, this.parameters.domain, "test/integration/fixtures");
        if (this.parameters) {
            for (let key in this.parameters) {
                this.apickli.storeValueInScenarioScope(key, this.parameters[key]);
            }
        }
    });
});