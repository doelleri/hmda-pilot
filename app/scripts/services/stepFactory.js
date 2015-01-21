'use strict';

/**
 * @ngdoc factory
 * @name hmdaPilotApp.factory:step
 * @description
 * # Step Factory
 * Factory for creating steps that can be used by the Wizard navigation service.
 */
module.exports = /*@ngInject*/ function (StepStatus) {

    // Constructor
    function Step(title, view) {
        this.title = title;
        this.view = view;
        this.status = StepStatus.incomplete;
        this.isActive = false;
    }

    Step.prototype = {
        isComplete: function() {
            return this.status === StepStatus.complete;
        },

        isIncomplete: function() {
            return this.status === StepStatus.incomplete;
        },

        markComplete: function() {
            this.status = StepStatus.complete;
        },

        markIncomplete: function() {
            this.status = StepStatus.incomplete;
        }
    };

    return (Step);
};
