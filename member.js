function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/members/skills/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}