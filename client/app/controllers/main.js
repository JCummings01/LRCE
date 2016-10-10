;(function () {
  'use strict'

  angular.module('LRCE')
        .controller('Main', Main)

  Main.$inject = ['storage', '$scope', '$state', '$timeout']

  function Main (storage, $scope, $state, $timeout) {
    var vm = this

    vm.editable = -1

    // Update student information via inline editing
    vm.updateStudent = function (key, student) {
      storage.studentNameAndGradeList[key] = student
      $timeout(function () {
        storage.syncSavedList()
        vm.getStudents()
      }, 250)
    }

    // Delete student from list
    vm.deleteStudent = function (key, student) {
      storage.studentNameAndGradeList.splice(key, 1)
      $timeout(function () {
        storage.syncSavedList()
        vm.getStudents()
      }, 250)
    }

    // Update Performance Summary
    vm.updateStats = function () {
      storage.findMin()
      .then(function (min) {
        vm.minScore = min
      })
      storage.findMax()
      .then(function (max) {
        vm.maxScore = max
      })
      storage.findAverage()
      .then(function (avg) {
        vm.avgScore = avg
      })
    }

    // Add student via form
    vm.addStudent = function (student) {
      storage.saveStudent(student)
      $scope.student = {}
      $scope.addForm.$setPristine()
      $scope.addForm.$setUntouched()
      $timeout(function () {
        storage.syncSavedList()
        vm.getStudents()
      }, 250)
    }

    // Load students list
    vm.getStudents = function (students) {
      storage.getStudents()
        .then(function (response) {
          vm.studentList = response
          vm.updateStats()
        })
    }
    vm.getStudents()
  }
})()
