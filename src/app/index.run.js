(function() {
  'use strict';

  angular
    .module('siteVitrine')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
