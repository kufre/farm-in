/**
 * To initialize the Editor, create a new instance with configuration object
 * @see docs/installation.md for mode details
 */
var editor = new EditorJS({
    /**
     * Enable/Disable the read only mode
     */
    readOnly: false,

    /**
     * Wrapper of Editor
     */
    holder: 'editorjs',

    /**
     * Common Inline Toolbar settings
     * - if true (or not specified), the order from 'tool' property will be used
     * - if an array of tool names, this order will be used
     */
    // inlineToolbar: ['link', 'marker', 'bold', 'italic'],
    // inlineToolbar: true,

    /**
     * Tools list
     */
    tools: {
        /**
         * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
         */
        header: {
            class: Header,
            inlineToolbar: ['marker', 'link'],
            config: {
                placeholder: 'Header',
            },
            shortcut: 'CMD+SHIFT+H',
        },

        /**
         * Or pass class directly without any configuration
         */
        image: SimpleImage,

        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
        },

        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },

        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author",
            },
            shortcut: 'CMD+SHIFT+O',
        },

        warning: Warning,

        marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },

        code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+C',
        },

        delimiter: Delimiter,

        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C',
        },

        linkTool: LinkTool,

        embed: Embed,

        table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T',
        },
    },

    /**
     * This Tool will be used as default
     */
    // defaultBlock: 'paragraph',

    /**
     * Initial Editor data
     */
});

// /**
//  * Saving button
//  */
// const saveButton = document.getElementById('saveButton');

// /**
//  * Toggle read-only button
//  */
// const toggleReadOnlyButton = document.getElementById('toggleReadOnlyButton');
// const readOnlyIndicator = document.getElementById('readonly-state');

// /**
//  * Saving example
//  */
// saveButton.addEventListener('click', function() {
//     editor.save()
//         .then((savedData) => {
//             cPreview.show(savedData, document.getElementById("output"));
//         })
//         .catch((error) => {
//             console.error('Saving error', error);
//         });
// });

// /**
//  * Toggle read-only example
//  */
// toggleReadOnlyButton.addEventListener('click', async() => {
//     const readOnlyState = await editor.readOnly.toggle();

//     readOnlyIndicator.textContent = readOnlyState ? 'On' : 'Off';
// });