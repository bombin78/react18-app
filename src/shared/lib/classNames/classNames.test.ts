import { classNames } from './classNames';

describe('classNames', () => {
    test('№1 with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('№2 with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('№3 with mods at the end', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            {
                hovered: true,
                scrollable: true,
            },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('№4 with mods (one is false) at the end', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            {
                hovered: true,
                scrollable: false,
            },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('№5 with mods (one is undefined) at the end', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            {
                hovered: true,
                scrollable: undefined,
            },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
