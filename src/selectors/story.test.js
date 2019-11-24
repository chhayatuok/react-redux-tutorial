import { getReadableStories } from './story';

describe('story selector', () => {
    it('retrieves readable stories', () => {
        const storyState = {
            stories: [
                {objectID: '1', title: 'foo'},
                {objectID: '2', title: 'bar'},
            ],
            error: null,
        };

        const archiveState = ['1'];
        const state = { storyState, archiveState };

        const expectedReadableStories = [{ objectID: '2', title: 'bar'}];
        const readableStories = getReadableStories(state);

        expect(readableStories).toEqual(expectedReadableStories);
    });
});