

angular.module('webappApp')
  .factory('addtimeslot', ['$resource', function($resource) {
    return $resource('/api/timeSlots/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' }
      });
  }]);
