function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/memeber.html',
        controller: 'SkillsMemeberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}