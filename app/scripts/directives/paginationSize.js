'use strict';

/**
 * Directive for displaying the pagination header
 *
 * @namespace hmdaPilotApp
 * @module {Directive} PaginationSize
 * @requires pagination
 *
 * @example
 * <div pagination>
 *   <paginzation-size></pagination-size>
 * </>
 */
module.exports = /*@ngInject*/ function () {

    return {
        restrict: 'E',
        require: '^pagination',
        templateUrl: 'partials/pagination-size.html'
    };
};
