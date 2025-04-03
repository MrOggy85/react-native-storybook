# "Storybook"

This is a solution inspired by Storybook. As stated on Storybook's website: "Storybook is a frontend workshop for building UI components and pages in isolation". The overal goal of this solution is the same. However, it's _very basic_ with a very _limited scope_.

## Why call it "Storybook"?

"Storybook" has become a word to describe showcasing UI components. Instead of coming up with a new name I decided that the least confusion would be to call this "Storybook", with the realization that it would still cause some initial confusion.

## Run

- Start metro bundler using: `npm run metro:storybook`
- Run app: `npm run start`

## Develop

- create a component under the folder "storybook/stories"
- run `npm run storybook:generate`
- Follow the steps above in "Run" :point_up:

## Architecture

### How does this solution Work?

In `index.js`, if `STORYBOOK` env is set, the main component is switched with: `storybook/Storybook`.
This is a component that will list the "stories" under the folder `storybook/stories`.

The script `scripts/generateStories.js` will loop over all files in the folder `storybook/stories` and create the file: `storybook/generatedStories.ts`. Since the runtime cannot access the filesystem, this process is done ahead of time in order to expose the components. This means you can't create new stories without running this script first.

## Troubleshooting

### I can't get back to the real app!

Make sure to run `metro:start-resetcache` when switching back to develop on the real app. The env var: `STORYBOOK` is cached and you need to reset the cache if you like to change this value.
