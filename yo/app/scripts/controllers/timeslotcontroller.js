angular.module('webappApp', ['ngAnimate', 'ui.bootstrap']);

angular.module('webappApp')
  .controller('timeslotcontroller', function($scope, addtimeslot) {
    "use strict";
    addtimeslot.query()
      .$promise.then(function (timeslot) {
        $scope.timeslots = timeslot._embeddedItems;
      });
  });

angular.module('webappApp').controller('DatepickerCtrl', function ($scopet) {
  "use strict";
  $scopet.today = function() {
    $scopet.dt = new Date();
  };
  $scopet.today();

  $scopet.clear = function () {
    $scopet.dt = null;
  };

  // Disable weekend selection
  $scopet.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scopet.toggleMin = function() {
    $scopet.minDate = $scope.minDate ? null : new Date();
  };
  $scopet.toggleMin();
  $scopet.maxDate = new Date(2020, 5, 22);

  $scopet.setDate = function(year, month, day) {
    $scopet.dt = new Date(year, month, day);
  };

  $scopet.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scopet.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scopet.format = $scope.formats[0];

  $scopet.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scopet.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scopet.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scopet.events.length;i++){
        var currentDay = new Date($scopet.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scopet.events[i].status;
        }
      }
    }
    return '';
  };
});

angular.module('uwebappApp').controller('TimepickerCtrl', function ($scopeh, $log) {
  "use strict";
  $scopeh.mytime = new Date();

  $scopeh.hstep = 1;
  $scopeh.mstep = 30;

  $scopeh.ismeridian = false;

  $scopeh.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scopeh.mytime = d;
  };

  $scopeh.changed = function () {
    $log.log('Time changed to: ' + $scopeh.mytime);
  };

  $scopeh.clear = function() {
    $scopeh.mytime = null;
  };
});
