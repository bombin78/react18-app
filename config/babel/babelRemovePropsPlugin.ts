import { PluginItem } from '@babel/core';

// https://babeljs.io/docs/plugins#plugin-development
export default function (): PluginItem {
    return {
        visitor: {
            // AST Explorer: https://astexplorer.net/
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
