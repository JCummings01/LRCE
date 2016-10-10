;(function () {
  'use strict'

  angular.module('LRCE')
    .controller('Process', Process)

  Process.$inject = ['storage', '$state', '$timeout', '$modal' ]

  function Process (storage, $state, $timeout, $modal) {
    var vm = this
    vm.companyName = 'Acme Bank'
    // vm.currentSelectedProcess = []

    // // LOAD PRIOR PERIOD
    // api.getPriorPeriod()
    //   .then(function (response) {
    //     vm.priorPeriod = response
    //     console.log('prior period', response)
    //   })
    //
    // // LOAD CURRENT PERIOD
    // api.getCurrentPeriod()
    //   .then(function (response) {
    //     vm.currentPeriod = response
    //     console.log('current period', response)
    //   })
    //
    // // LOAD SEGMENT PROCESSES
    // api.getSelectedSegment()
    //   .then(function (response) {
    //     vm.selectedSegment = response[0]
    //     console.log('selected segment', response)
    //     api.getProcesses(response)
    //       .then(function (processes) {
    //         var listOfProcesses = []
    //         console.log('list of processes before', processes)
    //         for (var i = 0; i < processes.length; i++) {
    //           var process = processes[i]
    //           listOfProcesses.push(process.process.S)
    //         }
    //         console.log('list of processes after', listOfProcesses)
    //         vm.segmentProcesses = listOfProcesses
    //         vm.processesLoaded = true
    //       })
    //   })
    //
    // vm.processSelector = function (proc) {
    //   vm.currentProcessSelected = proc
    //   vm.getAssessment(proc)
    // }
    //
    // vm.getAssessment = function (process) {
    //   api.getPriorAssessment(process)
    //     .then(function (results) {
    //       vm.assessmentInformation = results
    //       vm.processSelected = true
    //       console.log('results in Controller for getAssessment', results)
    //     })
    // }
  }
})()
