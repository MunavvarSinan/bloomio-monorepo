module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-exclamation-mark': [2, 'never'],
        'type-enum': [2, 'always', [
            'feat', 'fix', 'docs', 'style',
            'refactor', 'test', 'chore',
            'perf', 'build', 'ci'
        ]]
    }
};