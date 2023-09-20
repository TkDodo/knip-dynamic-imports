import type { KnipConfig } from 'knip'

const config: KnipConfig = {
    ignore: [
    ],
    workspaces: {
        'packages/packageA': {
            entry: 'src/index.{ts,tsx}',
            project: '**/*.{js,ts,tsx}',
        },
    },
}
export default config